const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path')
const fetch = require('isomorphic-fetch');
//let itunesData = fs.readFileSync('itunesData.json');
const helmet = require("helmet");

/* If we want our Express server to be able to access content that is passed in the body of the HTTP request, 
we need to include the body-parser middleware. 
The body-parser middleware extracts the entire body portion of an incoming request stream and exposes it on req.body.*/
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({
   extended: false
})) // for parsing application/x-www-form-urlencoded
app.use(helmet());




//Songs
app.post('/songs', (req, res) => {
   fetch(`https://itunes.apple.com/search?term=${req.body.name}&limit=100&media=music`)
      .then(res => res.json())
      .then(
         (JSONobject) => {

            res.send(JSONobject)
         },
         (error) => {
            console.log(error)
         })
});

//MOVIES
app.post('/movie', (req, res) => {
   fetch(`https://itunes.apple.com/search?term=${req.body.name}&limit=100&media=movie`)
      .then(res => res.json())
      .then(
         (JSONobject) => {

            res.send(JSONobject)
         },
         (error) => {
            console.log(error)
         })
});


//MUSIC VIDEOS
app.post('/musicVideos', (req, res) => {
   fetch(`https://itunes.apple.com/search?term=${req.body.name}&limit=100&media=musicVideo`)
      .then(res => res.json())
      .then(
         (JSONobject) => {

            res.send(JSONobject)
         },
         (error) => {
            console.log(error)
         })
});

//TVshows
app.post('/TVshows', (req, res) => {
   fetch(`https://itunes.apple.com/search?term=${req.body.name}&limit=100&media=tvShow`)
      .then(res => res.json())
      .then(
         (JSONobject) => {

            res.send(JSONobject)
         },
         (error) => {
            console.log(error)
         })
});

//PODCASTS
app.post('/podcasts', (req, res) => {
   fetch(`https://itunes.apple.com/search?term=${req.body.name}&limit=100&media=podcast`)
      .then(res => res.json())
      .then(
         (JSONobject) => {

            res.send(JSONobject)
         },
         (error) => {
            console.log(error)
         })
});


/* For Heroku Deployment */
if (process.env.NODE_ENV === 'production') {
   app.use(express.static(path.join(__dirname, 'frontend/build')));
   app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname,
         'frontend', 'build', 'index.html'));
   });
}

//Listening on port 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
   console.log(`Server is listening on port ${PORT}`);
});
