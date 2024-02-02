# ivorypay-interview
Ivorypay interview assessments

# QUESTION 1
A simple algorithm was written in Javascript so that it can be easily tested on the web console. 

- Go to Question_1 Folder, where you will see the algorithm.js file. 


# QUESTION 2
A Node server was developed with Nestjs Framework. To run please do the following:

- Navigate to Question_2 -> restaurant-finder
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
- Documentation is implemented using Swagger Documentation. Visit - http://localhost:3000/docs
- APIs were simple CRUD operations which were tested with Postman.
- Code sits on a github repository.
