import { sequelize_config } from "../../environment";
import { Sequelize, DataTypes } from 'sequelize';
import sequelize = require("sequelize");

export default class DB {

    private static _instance: DB;

    private config: any;

    public server: Sequelize;
    public datatypes: DataTypes;

    private constructor() {
       this.config = sequelize_config;
       this.datatypes = sequelize;
       this.server = new sequelize(this.config);
    }

    public static get instance() {
        return this._instance || ( this._instance = new this() );
    }
}