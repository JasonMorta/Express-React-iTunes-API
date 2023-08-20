let chai = require('chai');
let expect = chai.expect;
let app = require('../app');
let request = require('request');


describe('Fect request to iTunes API should do: ', () => {

   it('Should return all songs', (done) => {
      request(`https://itunes.apple.com/search?term=dre&limit=100&media=music`, function (error, response, body) {
         expect(response.statusCode).to.equal(200);
         done();
      });
   });

   it('Should return all movies', (done) => {
      request(`https://itunes.apple.com/search?term=dre&limit=100&media=movie`, function (error, response, body) {
         expect(response.statusCode).to.equal(200);
         done();
      });
   });

   it('Should return all musicVideos', (done) => {
      request(`https://itunes.apple.com/search?term=dre&limit=100&media=musicVideo`, function (error, response, body) {
         expect(response.statusCode).to.equal(200);
         done();
      });
   });

   it('Should return all TVshows', (done) => {
      request(`https://itunes.apple.com/search?term=dre&limit=100&media=tvShow`, function (error, response, body) {
         expect(response.statusCode).to.equal(200);
         done();
      });
   });

   it('Should return all podcasts', (done) => {
      request(`https://itunes.apple.com/search?term=dre&limit=100&media=podcast`, function (error, response, body) {
         expect(response.statusCode).to.equal(200);
         done();
      });
   });

})
