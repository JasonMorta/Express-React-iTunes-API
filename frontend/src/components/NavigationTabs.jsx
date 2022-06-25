import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Music from "./Music";
import MusicVideos from "./MusicVideos";
import Podcasts from "./Podcasts";
import Movies from "./Movies";
import TvShows from './TvShows'

export default function NavigationTabs(props) {
  const style = {
    fontSize: "1rem",
    overflow: "auto",
  };
  //These values will be used to display the amount of items found.
  let totalSongs = props.songList;
  let totalMovies = props.movieList;
  let totalMusicVideos = props.musicVideosList;
  let totalPodcasts = props.podcastList;
  let totalTVshows = props.tvShows;

  return (
    <Tabs
      defaultActiveKey="tab1"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab
        eventKey="tab1"
        title={totalSongs.length === 0 ? `Music` : `Music ${totalSongs.length}`}
        style={style}
      >
        <Music
          updateFavCounter={props.updateFavCounter}
          favoritesArrayLength={props.favoritesArray}
          songList={props.songList}
          favoritesArray={props.favoritesArray}
        />
      </Tab>

      <Tab
        eventKey="tab2"
        title={
          totalMusicVideos.length === 0
            ? `Music Videos`
            : `Music Videos ${totalMusicVideos.length}`
        }
      >
        <MusicVideos
          musicVideosList={props.musicVideosList}
          favoritesArray={props.favoritesArray}
          favoritesArrayLength={props.favoritesArray}
          updateFavCounter={props.updateFavCounter}
        />
      </Tab>
      <Tab
        eventKey="tab3"
        title={
          totalMovies.length === 0 ? `Movies` : `Movies ${totalMovies.length}`
        }
      >
        <Movies
          movieList={props.movieList}
          favoritesArray={props.favoritesArray}
          favoritesArrayLength={props.favoritesArray}
          updateFavCounter={props.updateFavCounter}
        />
      </Tab>
      <Tab
        eventKey="tab4"
        title={
          totalPodcasts.length === 0
            ? `Podcasts`
            : `Podcasts ${totalPodcasts.length}`
        }
        style={style}
      >
        <Podcasts
          updateFavCounter={props.updateFavCounter}
          podcastList={props.podcastList}
          favoritesArray={props.favoritesArray}
        />
      </Tab>
      <Tab
        eventKey="tab5"
        title={
          totalTVshows.length === 0
            ? `TV Shows`
            : `TV Shows ${totalTVshows.length}`
        }
      >
       < TvShows
          tvShows={props.tvShows}
          favoritesArray={props.favoritesArray}
          updateFavCounter={props.updateFavCounter}
          />
      </Tab>
    </Tabs>
  );
}
