Task 2: Country Searching and Sorting
with React JS
Objective: Build a country search and sort app using API calls. Implement search and
sort functionality for displaying country cards.

Requirements:

● Technology: React JS

● API: https://restcountries.com/v3.1/all

Features:
1. Create Four Pages with Corresponding Routes:
○ Homepage (/)
○ Country Details Page (/country/:countryName)
○ Country Region Page (/country-region)
○ Selected Region Page (/region/:regionName)
2. Add a Common Header for All Pages:
○ The header should contain a search field and a dropdown with two
options: "Independent" and "Dependent."
3. Country Card on Homepage:
○ Display a country cards on the homepage with the following details:
■ Country flag
■ Country common name
■ Country code
■ Country region
■ Country borders
(Data to be fetched from the provided API.)
4. Search Functionality:
○ Allow users to search for countries by name, region, or country code using
the search field in the header.
○ Filter results based on the search input.
5. Dropdown Functionality:
○ When the "Independent" option is selected, show country cards for
countries with the "independent" property set to true.
○ When the "Dependent" option is selected, show country cards for
countries with the "independent" property set to false.
6. Country Details Page:
○ When a country card is clicked, redirect to the Country Details Page
(/country/:countryName), where you will display the details of the
selected country:
■ Country flag
■ Country name
■ Country code
■ Country region
■ Country borders
7. Country Region Page:
○ When the "Region" link is clicked, redirect to the Country Region Page
(/country-region), where a static list of regions will be displayed.
○ Hide the search field and dropdown on the Region Page.
8. Selected Region Page:
○ When a region is selected from the Country Region Page, redirect to the
Selected Region Page (/region/:regionName), and show all
countries related to the selected region.
9. Borders Navigation:
○ When a country border is clicked from the Country Details Page, redirect
to the Country Details Page for the selected border country and display its
details.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
