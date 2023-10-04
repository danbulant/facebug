import {con, initDb} from "../services/people.js";
import {logger} from "../services/logger.js";

await initDb()

const people = [
    { firstName: 'Karel', lastName: 'Dobry' },
    { firstName: 'Brad', lastName: 'Pitt' },
    { firstName: 'Jennifer', lastName: 'Aniston' },
    { firstName: 'Tom', lastName: 'Hanks' },
    { firstName: 'Julia', lastName: 'Roberts' },
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jane', lastName: 'Smith' },
    { firstName: 'Michael', lastName: 'Johnson' },
    { firstName: 'Emily', lastName: 'Davis' },
    { firstName: 'Robert', lastName: 'Brown' },
    { firstName: 'Amanda', lastName: 'Wilson' },
    { firstName: 'Daniel', lastName: 'Lee' },
    { firstName: 'Sarah', lastName: 'Anderson' },
    { firstName: 'Matthew', lastName: 'Taylor' },
    { firstName: 'Olivia', lastName: 'Moore' },
    { firstName: 'William', lastName: 'Jackson' },
    { firstName: 'Sophia', lastName: 'White' },
    { firstName: 'James', lastName: 'Martin' },
    { firstName: 'Lily', lastName: 'Harris' },
    { firstName: 'David', lastName: 'Thompson' },
    { firstName: 'Emma', lastName: 'Clark' },
    { firstName: 'Christopher', lastName: 'Lewis' },
    { firstName: 'Mia', lastName: 'Walker' },
    { firstName: 'Joseph', lastName: 'Green' },
    { firstName: 'Charlotte', lastName: 'Hall' },
    { firstName: 'Andrew', lastName: 'Allen' },
    { firstName: 'Grace', lastName: 'Baker' },
    { firstName: 'Nicholas', lastName: 'Young' },
    { firstName: 'Samantha', lastName: 'Nelson' },
    { firstName: 'Ryan', lastName: 'Wright' },
    { firstName: 'Ava', lastName: 'King' },
    { firstName: 'Kevin', lastName: 'Evans' },
    { firstName: 'Madison', lastName: 'Turner' },
    { firstName: 'Benjamin', lastName: 'Hill' },
    { firstName: 'Hannah', lastName: 'Scott' },
    { firstName: 'Jonathan', lastName: 'Adams' },
    { firstName: 'Ella', lastName: 'Bennett' },
    { firstName: 'Nathan', lastName: 'Carter' },
    { firstName: 'Avery', lastName: 'Price' }
];

for (const person of people) {
    logger.info(`inserting ${person.firstName} ${person.lastName}`)
    await con.promise().query(`INSERT INTO people (firstName, lastName) VALUES ("${person.firstName}", "${person.lastName}")`)
}
