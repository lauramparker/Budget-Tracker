# Budget Tracker
 _A progressive web application_

![MongoDB](https://e7.pngegg.com/pngimages/410/82/png-clipart-mongodb-inc-nosql-document-oriented-database-business-text-people-thumbnail.png)

> This project delivers a progressive web application-- Budget Tracker -- that allows a user to enter simple budget transactions and charts those transactions.  When a user wants to log a transaction, they need to enter the transaction name (i.e "Groceries" or "Paycheck"), enter the transaction amount, and select the appropriate button to either 
"+ Add Funds" or "-Subtract Funds".  The app logs the transaction, then charts all transaction dates, and cooresponding budget totals in an area chart. A service-worker.js file and manifest file are included in the app to allow for the offline functionality, and indexedDB is used to store client side data. The application database is on MongoDB Cloud Atlas and the deployed application is found on heroku: 

Features include:

- "Add" or "Subtract" buttons indicate expense or income entries
- Dynamic charting of individual transactions and the total budget balance
- Offline capabilities so that a user can continue entering transactions

![budget tracker demo](https://github.com/lauramparker/Budget-Tracker/blob/main/public/Budget%20Tracker.gif)

## Technologies Used
- [ReactJS](https://reactjs.org)
- [OpenWeatherMap API](https://openweathermap.org)


## Installation

To set-up the development environment, clone the repository found at https://github.com/lauramparker/Budget-Tracker. The following npm packages are required: 
```
- npm i node 
- npm i mongoose
- npm i indexeddb
```

To run the application locally, enter node server. The app will open on localhost port 3000.

Alternatively, the app can be accessed on heroku: [Budget-Tracker](https://immense-basin-97081.herokuapp.com/)

## Usage
Use this project as an example of a progressive web app using a service-worker & manifest

## Credits
Laura Parker @lauramparker (author)

## License
MIT

