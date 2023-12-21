import * as fs from 'fs';

interface Env {
    BASE_URL: string,
    ADMIN: string,
    ADMIN_PASSWORD: string,
    USERNAME: string,
    USER_PASSWORD: string
}

interface Envs {
    [key: string]: Env;
}

interface Environments {
    envs: Envs[];
}

type EnvironmentKey = 'local' | 'qa' | 'staging';

function parseEnvironmentFile(filePath: string): Env | undefined {
    try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const environments: Environments = JSON.parse(fileContent);

        // Read the environment key from the environment variable
        const envKey: EnvironmentKey | undefined = process.env.ENVIRONMENT_KEY as EnvironmentKey | undefined;

        if (!envKey) {
            console.error('Environment key not specified. Set the ENVIRONMENT_KEY environment variable.');
            return undefined;
        }

        const env = environments.envs.find((e) => e[envKey]);

        if (env) {
            return env[envKey];
        }

        console.error(`Environment key "${envKey}" not found in the JSON file.`);
        return undefined;
    } catch (error) {
        console.error('Error reading/parsing JSON file:', error);
        return undefined;
    }
}

// Example usage with a separate JSON file
const jsonFilePath = 'packages/api/environment/apiEnvironment.json';
const apiEnvironment = parseEnvironmentFile(jsonFilePath);

export default apiEnvironment;