## Introduction

Run "npm install" and then "npm start" to start the app in dev mode.

If you want to run it in production mode you can install "serve" npm install serve -g and then you can use "npm run build" and "serve -s build" to start the application.

In DEV mode youn can notice that maybe the app will slow down when you're adding more items. This is due to a Formik bug with Material UI library.

Anyway this won't be a problem in production mode where there won't be slowdowns.


## Formik Validations Schemas

I added some validation schemas , probably they could be done better for some fields but it was just to give an idea about Formik validation

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all packages

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

