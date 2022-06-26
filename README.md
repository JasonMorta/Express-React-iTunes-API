
# Express and React iTunes API

- [Live Demo](https://fullstack-itunes-playlist.herokuapp.com/) hosted on Heroku

This app allows a user to find any media content from the iTunes API.
A user can add multiple media items to a favorites list.
This list only saved items to state. Favorites list items can also be deleted.

This app was made using React, Express, Bootstrap and some custom css.





## Installation
- Install and run the Express backend first.
- This process will install the app on your local machine.
```bash
  cd to current folder directory
  npm install
  npm start 
```
Open another terminal.
Navigate to the React App inside the **frontend** folder.

```bash
  cd frontend
  npm install
  npm start 
```

## Testing
To test the backend server and frontend, do the following.

#### Backend server/Unit test
- Tests are run using mocha and chai
- This test will run by calling all the fetch methods and checking each of their status codes.


```bash
  cd backend
  npm test
```
#### Frontend/Snapshot test

- Test snapshot test uses the renderer module and will run a test on the app.js.
- The first time it runs, it will create a _snapshot_ folder, which contains the app.js snapshot. if any changes are made to the main app.js the next snapshot test will fail. Because it's being tested and compared to the firs test.

```bash
  cd backend
  npm run test
```
## Security

- To help secure the apps backend from attackers I used the **Helmet** Helmet middleware on the backend Express server.
- **.env** keys are not required for this app since it only fetched data from the iTunes API and doesn’t  require a user account or any API keys. 


