import dotenv from "dotenv";

export interface FacebugConfig {
    mysql: {
        host: string
        port: number,
        user: string,
        password: string,
        database: string
    }
}

// use dotenv to load .env variables to config (mainly for development)
dotenv.config()

export const config: FacebugConfig = {
    mysql: {
        host: process.env.MYSQL_HOST || 'localhost',
        port: parseInt(process.env.MYSQL_PORT) || 3306,
        user: process.env.MYSQL_USER || 'facebug',
        password: process.env.MYSQL_PASSWORD || 'facebug',
        database: process.env.MYSQL_DATABASE || 'facebug'
    }
}
