import {test, expect, request, defineConfig, APIRequestContext} from '@playwright/test';
import  apiEnvironment from "../environment/apiEnvironment";

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
    console.log(body);
});

test('validate admin authentication', async ({ request }) => {
   console.log('validate admin auth');
});