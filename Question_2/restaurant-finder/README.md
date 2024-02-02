## Description

A Node server  (Restaurant-finder) developed with Nestjs Framework. To run please do the following:

- Ensure Node, NPM and PGAdmin (PostgreSQL) are present in the system. 
- Run npm install to install dependencies.
- Create a database on PostgreSQL called ivorypay. User and password were set to postgres and 0000 respectfully.
- You can update the database connection string which can be found in the app.config.ts file to you preference.
- Run npm run start:dev to start the server in dev mode

# Other Information
- Error Handling is ensured in the codebase as you will see when checked
- Versioning is handled 
- Optional restaurant properties like cuisineType, priceRange, ratings were implemented
- Rate limiting was implemented using ThrottlerModule
- Documentation is implemented using Swagger Documentation. Visit - http://localhost:3500/docs
- APIs were simple CRUD operations which were tested with Postman.
- Code sits on a github repository.


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## Stay in touch

- Author - [Chudalu Ezenwafor](https://chudaluezenwafor.com)

