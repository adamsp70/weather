Weather project - built for a previous interview test.

I was given 2-3 hours to complete, but it took a bit longer. 

It's a bit rough and ready, needs better testing and I would have split the components further (container/presentation) etc 
But this is a good representation of what I can achieve in the given time.

----------------------------------	

Brief

For this test, we are looking for you to create a simple React SPA. The application should have the following functionality / features

● Create-react-application should be used to bootstrap the application
● On the first load a user is asked to allow his location to proceed.
● If user gives consent to use his location the browser location dialog is shown to let user allow his location.
● The application uses the user’s location to fetch the current weather using one of the public apis (you can use ​https://www.metaweather.com/api/​ or similar)
● Show the current weather icon in the middle of the screen (centered vertically and horizontally)
● Change the page background color dynamically based on the current temperature shown in celsius. Use the following colors: #00ffff ​for -10 degrees and below #fff700 ​for +10 degrees #ff8c00 ​for +30 degrees and above Dynamically calculate the color for the temperature in between.

Stretch Goal

● Add a slider to the bottom of the page to adjust the temperature shown on the screen (the slider should affect the background color as well).
● Host the site on heroku, firebase, aws or any other hosting provider of your choice.
● Provide a deployment script to deploy the site to the hosting provider of your choice and instructions on how to use it.

Other

● Use the React best practices
● Use the latest version of the framework
● Provide an appropriate .gitignore file
● Please keep the git commit history clean and tidy. Commits should be logical and apply to the single feature / functionality / integration.
● Third-party libraries can be used
● Make sure the libraries being used have 0 vulnerabilities
● We would like to see demonstrable use of best SOLID practises

----------------------------------	

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
