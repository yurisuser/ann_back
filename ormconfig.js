module.exports = [{
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "qqaazz112233",
    "database": "proj",
    "autoSchemaSync": true,
    "entities": [`./src/**/*.entity.ts`],
    "migrations": [
        "src/migration/*.ts"
    ],
    "cli": {
        "migrationsDir": "src/migration",
    }
}];