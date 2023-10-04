import mysql from 'mysql2'
import {config} from "../config.js";

export const con = mysql.createConnection(config.mysql);

export const initDb = async () => {
    // create database
    await con.promise().query(`CREATE DATABASE IF NOT EXISTS ${config.mysql.database}`)

    // create table
    await con.promise().query(`CREATE TABLE IF NOT EXISTS people (
        id INT PRIMARY KEY AUTO_INCREMENT,
        firstName VARCHAR(255) NOT NULL,
        lastName VARCHAR(255) NOT NULL
    )`)
}

export const searchPeople = async (firstName, lastName) => {
    // connect to mysql and make a query
    const [rows] = await con.promise().query(`SELECT * FROM people WHERE firstName="${firstName}" AND lastName="${lastName}"`)
    return rows
}
