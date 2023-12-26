import {test, expect, request, defineConfig, APIRequestContext} from '@playwright/test';
import  apiEnvironment from "../environment/apiEnvironment";
import webEnvironment from "../../web/environment/webEnvironment";

let token: string = "";
let apiContext: APIRequestContext= null;

test.beforeEach(async () => {

    apiContext = await request.newContext(
        {
            baseURL: apiEnvironment.BASE_URL,
            ignoreHTTPSErrors: true
    });

    const response = await apiContext.post('/authenticate', {
        data: {
            email: apiEnvironment.ADMIN,
            password: apiEnvironment.ADMIN_PASSWORD
        }
    });

    expect(response.ok()).toBeTruthy();
    let body = await response.json();

    token = body.token
});

test('validate admin authentication', async ({ request }) => {

});

test('get template polls', async ({ request }) => {
    const getTemplatePollResponse = await apiContext.get('/template-polls', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    expect(getTemplatePollResponse.ok()).toBeTruthy();
    let body = await getTemplatePollResponse.json();
    console.log(body);

});