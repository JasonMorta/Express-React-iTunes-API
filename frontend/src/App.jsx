import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import NavigationTabs from "./components/NavigationTabs";
// import Music from './components/Music';
import SearchFor from "./components/SearchFor";
import logo from "./logo.png";
import "./App.css";
import "./fonts.css";
import FavoritesModal from "./components/FavoritesModal";

import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itunesSongs: [],
      itunesSongsObject: [],
      itunesMovies: [],
      itunesMoviesObject: [],
      itunesMusicVideos: [],
      itunesMusicVideosObject: [],
      itunesTvShows: [],
      itunesTvShowsObject: [],
      itunesPodcast: [],
      itunesPodcastObject: [],
      tabValue: "1",
      empty: [],
      addPlayer: false,
      findMedia: "",
      modalShow: false,
      changeFavIcon: false,
      inputValue: "",
      media: "all",
      favoritesArray: [],
      favCounter: 0,
      refreshState: false,
      loading: false,
    };
  }


  

  //SEARCH button
  searchBtn = () => {
    //Validation: The user must enter a value to get results from search.
    if (this.state.inputValue === "") {
      console.log("inputValue: " + typeof this.state.inputValue.length);
      alert("Please enter a value");
    } else {
      this.setState({
        itunesSongs: [],
        itunesSongsObject: [],
        itunesMovies: [],
        itunesMoviesObject: [],
        itunesMusicVideos: [],
        itunesMusicVideosObject: [],
        itunesTvShows: [],
        itunesTvShowsObject: [],
        itunesPodcast: [],
        itunesPodcastObject: [],
        isFav: false,
        changeHeart: "",
        loading: true,
      });
      console.log("inputValue: " + this.state.inputValue);
      //Get Songs
      fetch("https://itunedbackend.onrender.com/songs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.state.inputValue,
        }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Request failed with status: ${res.status}`);
          }
          return res.json();
        })
        .then((response) => {
          console.log('response', response)
          this.setState(
            {
              itunesSongs: response,
              itunesSongsObject: response.results,
              loadingDataBtn: false,
            },
            () => {}
          );
        })
        .catch((error) => console.log("Error:", error));

      //Get Movies
      fetch("https://itunedbackend.onrender.com/movie", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.state.inputValue,
        }),
      })
        .then((res) => res.json())
        .then((songs) => {
          this.setState({
            itunesMovies: songs,
            itunesMoviesObject: songs.results,
            loadingDataBtn: false,
          });
        })
        .catch((error) => console.log("Error:", error));

      //Get Music Video
      fetch("/musicVideos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.state.inputValue,
        }),
      })
        .then((res) => res.json())
        .then((response) => {
          this.setState({
            itunesMusicVideos: response,
            itunesMusicVideosObject: response.results,
            loadingDataBtn: false,
          });
        })
        .catch((error) => console.log("Error:", error));
console.count("rerender")
      //Get podcasts
      fetch("https://itunedbackend.onrender.com/TVshows", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.state.inputValue,
        }),
      })
        .then((res) => res.json())
        .then((response) => {
          this.setState({
            itunesTvShows: response,
            itunesTvShowsObject: response.results,
            loadingDataBtn: false,
          });
        })
        .catch((error) => console.log("Error:", error));

      //Get podcasts
      fetch("https://itunedbackend.onrender.com/podcasts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.state.inputValue,
        }),
      })
        .then((res) => res.json())
        .then((response) => {
          this.setState(
            {
              itunesPodcast: response,
              itunesPodcastObject: response.results,
              loading: false,
            },
            () => {}
          );
        })
        .catch((error) => console.log("Error:", error));
    }
  }; //end search

  //Get input field values for search
  storeUserInput = (e) => {
    this.setState({ inputValue: e.target.value }, () => {});
  };

  //Updated the favorite counter bubble
  updateFavCounter = () => {
    if (this.state.favoritesArray.length > -1) {
      this.setState({
        favCounter: this.state.favoritesArray.length,
      });
    } else {
      console.log("No update");
    }
  };

  //this is need to rerender the UI when a childe component changes it's own state, but not updating the UI.
  refreshState = () => {
    this.setState({
      refreshState: true,
      favCounter: this.state.favoritesArray.length,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="iTune-container">
          <p className="my-id">
            CREATED BY:
            <a
              href="https://github.com/JasonMorta?tab=repositories"
              target="_blank"
              rel="noreferrer"
              title="GitHub Profile"
            >
              JASON MORTA
            </a>
          </p>
          <div className="header-content">
            <img src={logo} alt="design-logo" />
          </div>
          <div>
            <SearchFor
              loading={this.state.loading}
              inputValue={this.state.inputValue}
              storeUserInput={this.storeUserInput.bind(this)}
              searchBtn={this.searchBtn.bind(this)}
            />
          </div>
          <div className="favBtn-container">
            {/* This is the red favorites counter bubble. it will only appear if there are favs */}
            {this.state.favCounter > 0 ? (
              <span className="fav-counter">{this.state.favCounter}</span>
            ) : (
              <></>
            )}
            {/* This button that opens the favorites list */}
            <Button
              variant="primary"
              onClick={() =>
                this.setState({
                  modalShow: true,
                })
              }
              className="favorites"
            >
              Favs
            </Button>
            {/* The favorites List component */}
            <FavoritesModal
              favoritesArray={this.state.favoritesArray}
              show={this.state.modalShow}
              onHide={() =>
                this.setState({
                  modalShow: false,
                })
              }
              refreshState={this.refreshState.bind(this)}
            />
          </div>
          {/* All Tabs */}
          <div className="navigation-container">
            <NavigationTabs
              updateFavCounter={this.updateFavCounter.bind(this)}
              songList={this.state.itunesSongsObject}
              podcastList={this.state.itunesPodcastObject}
              movieList={this.state.itunesMoviesObject}
              musicVideosList={this.state.itunesMusicVideosObject}
              tvShows={this.state.itunesTvShowsObject}
              favoritesArray={this.state.favoritesArray}
              favoritesArrayLength={this.state.favoritesArray}
            />
          </div>

          <div className="footer-content"></div>
        </div>
      </div>
    );
  }
}
