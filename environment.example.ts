// Copy this file and rename to environment.ts in your root folder
import { Options } from "sequelize";

/**
 * Data for connection to sequelize database
 */
export const sequelize_config: Options = {
    host: 'localhost',
    database: 'db',
    dialect: 'mysql',
    username: 'user',
    password: 'password',
}

export const express_config = {
    port: 3000,
}