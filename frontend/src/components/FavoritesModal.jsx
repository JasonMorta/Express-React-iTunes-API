import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalTable from './ModalTable';

//The FavoriteModal will display a table with all the favorite items.
//The button to open the Modal will be placed in App.js
//Fav items can also be delete from the list.
//Items are all stores in state.

function FavoritesModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Your Favorites
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <ModalTable
            favoritesArray={props.favoritesArray}
            refreshState={props.refreshState}
            />
      </Modal.Body>
      <Modal.Footer>
        
        <Button onClick={props.onHide} className="modalBtn">Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FavoritesModal;
