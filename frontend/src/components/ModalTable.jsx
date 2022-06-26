import Table from "react-bootstrap/Table";
import { nanoid } from "nanoid";
import DeleteItem from "./DeleteItem";

//The ModalTable will be placed inside the FavoritesModal component.
//This will display a list of all the favorite items in a table
function ModalTable(props) {
  //Convert milliseconds to minutes and seconds.
  function convert(millis) {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  //LOOP through each song
  let num = 0;// sets the song counter

  //Favorites menu list
  //Map over each item in favorites array and outputs the html content for each item
  let favTable = props.favoritesArray.map((item) => (
    <tr key={nanoid()} onClick={props.refreshState}>
      <td>{(num += 1)}</td>
      <td className="modal-main">
        <img src={item.artworkUrl30} alt={item.collectionName} />
        <p>{item.trackName}</p>
      </td>
      <td>{item.artistName}</td>
      <td>{item.kind}</td>
      <td>{item.trackTimeMillis ? convert(item.trackTimeMillis) : ""}</td>
      <td className="delete-block">
        {/* Deletes the selected item form list */}
        <DeleteItem
          deleteTrack={() => {
            let index = props.favoritesArray.indexOf(item);
            if (index !== -1) {
              props.favoritesArray.splice(index, 1);
            }
          }}
        />
      </td>
    </tr>
  ));

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Artist</th>
          <th>Media</th>
          <th>Time</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>{favTable}</tbody>
    </Table>
  );
}

export default ModalTable;
