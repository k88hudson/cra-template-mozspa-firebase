# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Special setup

### Configure Firebase

1. Go to https://console.firebase.google.com/
2. Create a new project.
3. Click "Add Firebase to your web app"
4. Give the app a unique name
5. Copy the app config and paste it into src/firebase.ts
6. Go to "Firestore Database" and create a new DB. Feel free to start with test permissions, but make sure you update this later.
7. Run the app with "npm start".
8. Navigate to #/about, start adding data. A collection will be created called "cats".

### Rules

1. Install `firestore` cli
2. Edit your local firestore.rules file
3. `firebase deploy --only firestore:rules` to deploy

### Cloud functions

1. `firebase init functions`
2. Change the target to node 14, it's node 8 by default
3. `firebase deploy --only functions` to deploy

### Deploy front-end

#### With gh-pages

You can deploy this application to gh-pages by running `npm run deploy`. This will push to a `gh-pages` branch on Github.

#### With Firebase

1. Change `HashRouter` to `BrowserRouter` in Routes.tsx, since you can use real routing
2. `firebase init hosting`. Set the public directory to `build`
3. Change the `npm deploy` script to `npm run build && firebase deploy --only hosting`

## Available CRA Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
