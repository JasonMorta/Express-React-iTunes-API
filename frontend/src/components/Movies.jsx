import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FavIcon from "./FavIcon";
import { nanoid } from "nanoid";

//This component will be exported to the NavigationTabs component, and rendered there.
function Movies(props) {
  function updateFavCounter(){
    return props.updateFavCounter();
  }

  //md: items per row
  //xs: mobile view grouping = 2 items next to each other
  return (
    <Row xs={2} md={4} className="g-4 movie-card">
      {props.movieList.map((item) => (
        <Col key={nanoid()}>
          <Card>
            <Card.Img variant="top" src={item.artworkUrl100} />
            <Card.Body>
              <Card.Title>{item.trackCensoredName}</Card.Title>
              <Card.Text>{item.longDescription}</Card.Text>
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
                  //When adding to favorites, click the heart again will remove it from favorites.
                  favoritesArray={props.favoritesArray}
                  addToFavoritesArray={() => {
                    let index = props.favoritesArray.indexOf(item);
                    if (index !== -1) {
                      props.favoritesArray.splice(index, 1); //Remove item from favorites
                      return props.updateFavCounter();
                    } else {
                      props.favoritesArray.push(item); //Add item to favorites
                      console.log(item);
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

export default Movies;
