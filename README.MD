# Installation:

1. clone this repo:
    - git clone git@github.com:Jeroenbruinsma/cavotec-titanic.git

2. Install packages   
    Use your favorite package manager (NPM, Yarn )to install the necessary packages:

    - npn install
    - yarn install
3. Run the sever
    - npm run start
    - yarn run start


## Endpoints:

| endpoint   | method | function           |
| ---------- | ------ | ------------------ |
| /          | GET    | Basic server test  |
| /people    | GET    | List of passengers |
| /people/id | GET    | Specific passenger |
| /people    | POST   | Add a passenger    |
| /people/id | PUT    | Edit a passenger   |
| /people/id | DELETE | Delte a passenger  |

## Packages Used:

cors: https://www.npmjs.com/package/cors  
express: https://www.npmjs.com/package/express  
morgan: https://www.npmjs.com/package/morgan  
pg: https://www.npmjs.com/package/pg  
sequelize: https://www.npmjs.com/package/sequelize

## Manual Sequelize-cli

https://github.com/sequelize/cli
