this is a login file for our group project. It is divided into 2 parts: frontend and backend. the frontend is where i keep the react project for the website's ui and backend is where the express, jwt, and mongodb connections all are.

file to see if you're trying to finish the homework (the necessary codes to screenshot are here):
1. Mongodb => backend/app.js
2. jwt => backend/app.js, backend/routes/auth.js
3. Axios => frontend/login/src/Component/Login.js

you will need to have react, express, bcryptjs, axios, cors, bootstrap, and jsonwebtoken installed to run these files as i have not included their respective node_modules (react, axios, bootstrap, and cors will be inside frontend/login and the rest will be inside backend) you may also need to reconfigure the mongodb database since i'm using a local one. you can update them at the location specified above


the login file will be updated further as it is currently looks quite unappealing and a register form will be added at a later date.

(Note for my teammates: I will work on more pages in the future and probably do the backend as well)

25/10/2024: added register form and a link to login page in navbar. will add home page later once i've figured out how to make a card slider for the movie list. currently, it will redirect to an empty home page with just the navbar on top
