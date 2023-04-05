Install node_modules:

## run npm install

To run this project, run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

To automate test app, run:

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Questions:

1. What is the reason for creating endpoints for '/games' (eg. '/games?category=shooter') to be used for filtering if the endpoint '/filter' can be used for the same purpose?

2. In the sorting order, there is an option 'relevance' to be passed as parameter on the api. Does this pertains to the relevance of the filtered data base on searched term? If so, does an endpoint where the searched term can be passed exist in order sort the order of the data from api relevant to the searched term? Currently, the search function filters the data from the api through javascript.


## What kind libraries your project is using?

1. Redux and Redux Toolkit
2. Sass
3. React Select

## What could you do better in your code next iteration?

1. Pagination for the Game Lists
2. Better Loading screen when fetching data
3. Fuzzy Search for searching, so results can show even if the searched term is not exact