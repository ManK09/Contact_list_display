 # Kindly Note: Since the data is being retrieved from a mock API (reqres) which does not allow actual changes on the server, the web app will not work on refresh on any page. One of the reasons also is that the redux store will lose the data on refresh.
# Though the homepage and add user page were not breaking on refresh, they are breaking on the deployed site on refreshing the page.
# Also the credentials to login and register are fixed that are allowed by API as discussed.


# 'Alert' has been used to show succeess or failure return from API calls.


Test Cases:

1) User do not enter  login or password  => alert comes with email / password required.
2) User enteres invalid crendentials  => alert comes with "User not found"
3) User clicks Register button =>  user redirects to register page
4) On registration page, user do not enter either  email or password => alert comes with email/ password required.
5) On registration page, user enteres credentials and clicks on register page => alert comes as "user registered" and gets redirected to login page.
6) On login page, user enters valid credentials and presses login button => alert comes "User Logged In" and redirects to Home Page.

On Homepage,
7) user searches something => list corresponding to searched value is displayed.
8) user clicks Add user button => Redirects to Add User page.
9) user clicks Edit user button => redirects to Edit User page.
10) user clicks Delete Button => Pop Up comes up asking confirmation

In Delete Pop-up
11) user presses "Noo, cancel" => pop up closes and event gets cancelled.
12) User presses "Yes, Delete" => pop up closes and entry is deleted.

On Add User Page,
13) User clicks Submit button without entering Name/Username/email => alert comes with "Email/Username/Name required"
14) USer clicks Submit button after entering the details => alert comes as "Entry added" and user gets redirected to home page with an entry added in the display list.

On Edit User Page,
15) User clicks Submit button without entering Name/Username/email => alert comes with "Email/Username/Name required"
16) USer clicks Submit button after entering the details =>  user gets redirected to home page with the details updated in the display list.


# 17) User refreshes page => the site breaks



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

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

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
