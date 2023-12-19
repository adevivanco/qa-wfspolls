// @ts-ignore
import fs from 'fs'
var dataArray = JSON.parse(fs.readFileSync('environment/config/webConfig.json', 'utf-8'));

interface Venue {
    id: string;
    hostnames: string[];
    shortcode: string;
    lickstatsUrl: string;
    pin: string;
}

const key: string = "qa";


export const venues = dataArray;
