# NETFLIX

### Table of Contents
* [Prerequisites](#Prerequisites)
* [Tech Stack](#Tech-Stack)
* [Getting Started](#Getting-Started)
* [Testing](#Testing)
* [Deployment](#Deployment)

#
### Prerequisites

* <img src="readme/nodejs.png" width="25" style="top: 8px" /> *Node JS @16.X and up*
* <img src="readme/npm.png" width="25" style="top: 8px" /> *npm @8 and up*
* <img src="readme/typescript.png" width="25" style="top: 8px" /> *typescript @4 and up*

#
### Tech Stack

* *React @ 18.2.0 - front-end framework*
* *Cypress @10.7.0 - end to end testing Framework*
* *Tailwind @3.0.24 - CSS framework*
* *React-hook-form @7.34.0 - library for forms*
* *React-router @6.3.0 - library for routing*
* *React-use-cookie @1.4.0 - A React hook for managing cookies with no dependencies.*
* *react-redux @8.0.2 - A Predictable State Container for JS Apps*

#
### Getting Started
1. First of all you need to clone app repository from github:
```
https://github.com/AniAvazneli/netflix.git
```
2. Next step requires install all the dependencies.

```
npm install
```
3. Also you need to create .env file where copy information from .env.example file

```
cp .env.example .env
```


### Testing

For testing we are using Cypress. You can see all testing files on Cypres e2e subfolder.
```
cypress/e2e
```
If you want to see test in action, you need install cypress first

```
npm install cypress --save-dev
```
also you need to create cypress.config.ts file and move settings from cypress.config.ts.example there
```
cp cypress.config.ts.example cypress.config.ts
```
and also in the cypress folder is tsconfig.json file for some typescript configuration.

after all open Cypress
```
npx cypress open
``` 
[More information about Cypress](https://www.cypress.io)

#
### Deployment
Before every deployment you need to create build file.
```
npm run dev
```
after this you can use this file to deploy project on server.
