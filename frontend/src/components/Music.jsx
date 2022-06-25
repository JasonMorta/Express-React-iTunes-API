import React from "react";
import Table from 'react-bootstrap/Table'
import { nanoid } from 'nanoid'
import FavIcon from "./FavIcon";


export default function Music(props) {

//This component will be exported to the NavigationTabs component, and rendered there.

//convert milliseconds to minutes and seconds.
  function convert(millis) {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  } 

 const style ={
   'fontSize': '1rem',
    
 }

//LOOP through each song
 let num = 0;

  let songData = props.songList.filter((kind) =>(
   kind.kind === 'song'))
   .map((item) => (
    <tr key={nanoid()}>
      <td>{(num += 1)}</td>
      <td>
        <img src={item.artworkUrl30} alt={item.collectionName} />
        {item.trackName}
      </td>
      <td>{item.artistName}</td>
      <td>{item.collectionName}</td>
      <td >{item.trackTimeMillis ? convert(item.trackTimeMillis) : ""}</td>
      <td>
        <FavIcon 
          //This method maps over every item.trackId inside favoritesArray.
          //The .find() method looks for the current item.trackId(songList.map(item...)) inside the favoritesArray, every time AddToFavoritesArray() is called.
          //This will keep the heart icon red is the same item.trackId exists in favoritesArray(FavoritesModal component).
          changeHeart={
            props.favoritesArray.map(favItem => favItem.trackId)
            .find(favItem => favItem === item.trackId) ? true :false}

        //When adding to favorites, click the heart again will remove it from favorites.    
        favoritesArray={props.favoritesArray}
        addToFavoritesArray={()=>{
            let index = props.favoritesArray.indexOf(item);
            if (index !== -1) {
                props.favoritesArray.splice(index, 1)//Remove item from favorites
                return props.updateFavCounter()
              } else{
                props.favoritesArray.push(item)//Add item to favorites
                return props.updateFavCounter()
              }
          }
        }
        />
        
      </td>
    </tr>
  ));

  function updateFavCounter(){
      return props.updateFavCounter()
  }
    
  
 return (
   <Table striped bordered hover onClick={updateFavCounter} responsive>
   <thead>
     <tr className="music-thead">
       <th>#</th>
       <th>Name</th>
       <th>Artist</th>
       <th>Album</th>
       <th>Time</th>
       <th>Fav</th>
     </tr>
   </thead>
   <tbody style={style}>
{songData}
   
   </tbody>
 </Table>
  );
}
