import * as fs from 'fs';

interface Env {
    id: string;
    name: string;
    hostnames: string[];
    shortcode: string;
    lickstatsUrl: string;
    pin: string;
}

interface Envs {
    [key: string]: Env;
}

interface Config {
    envs: Envs[];
}

type EnvironmentKey = 'qa' | 'staging';

function parseConfigFile(filePath: string): Env | undefined {
    try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const config: Config = JSON.parse(fileContent);

        // Read the environment key from the environment variable
        const envKey: EnvironmentKey | undefined = process.env.ENVIRONMENT_KEY as EnvironmentKey | undefined;

        if (!envKey) {
            console.error('Environment key not specified. Set the ENVIRONMENT_KEY environment variable.');
            return undefined;
        }

        const env = config.envs.find((e) => e[envKey]);

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
const jsonFilePath = 'environment/config/webConfig.json';
const webEnvironment = parseConfigFile(jsonFilePath);

// Accessing properties using dot notation if the environment is defined
if (webEnvironment) {
    console.log('Environment Shortcode:', webEnvironment.shortcode);
}

export default webEnvironment;