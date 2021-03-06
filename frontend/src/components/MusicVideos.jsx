import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FavIcon from "./FavIcon";
import { nanoid } from "nanoid";

  //This component will be exported to the NavigationTabs component, and rendered there.
function MusicVideos(props) {
  function updateFavCounter() {
    return props.updateFavCounter();
  }

  return (

    //md: items per row
    //xs: mobile view grouping = 2 items next to each other
    <Row xs={2} md={4} className="g-4 music-videos-card">
      {props.musicVideosList.map((item) => (
        <Col key={nanoid()}>
          <Card>
            <Card.Img variant="top" src={item.artworkUrl100} />
            <Card.Body>
              <Card.Title>{item.artistName}</Card.Title>
              <Card.Text>{item.trackCensoredName}</Card.Text>
              <div onClick={updateFavCounter} style={{ width: "fit-content" }}>
                <FavIcon
                  //This method maps over every item.trackId inside favoritesArray.
                  //The .find() method looks for the current item.trackId(songList.map(item...)) inside the favoritesArray, every time AddToFavoritesArray() is called.
                  //This will keep the heart icon red is the same item.trackId exists in favoritesArray(FavoritesModal component).
                  changeHeart={
                    props.favoritesArray
                      .map((favItem) => favItem.trackId)
                      .find((favItem) => favItem === item.trackId)
                      ? true
                      : false
                  }
                  //When adding to favorites, click the heart icon again will remove it from favorites.
                  favoritesArray={props.favoritesArray}
                  addToFavoritesArray={() => {
                    let index = props.favoritesArray.indexOf(item);
                    if (index !== -1) {
                      props.favoritesArray.splice(index, 1); //Removes item from favorites array
                      return props.updateFavCounter();
                    } else {
                      props.favoritesArray.push(item); //Adds item to favorites array
                      return props.updateFavCounter();
                    }
                  }}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default MusicVideos;
