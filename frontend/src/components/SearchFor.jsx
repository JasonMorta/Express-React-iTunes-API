import React from "react";
//import './css/searchContainer.css'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

//This component will be exported to the main App, and rendered there.
//This component will send the users input results to the backend and return the found content
//This search Form also uses validation to check for user input
export default function SearchFor(props) {

  let loadingBar = <div className="loader">Loading...</div>;// loading css animation

  return (
    <div className="search-container">
      <div className="search-heading">
        <p>Enter a name to search for</p>
      </div>
      <div className="search-bar">
        <InputGroup className="mb-3" hasValidation>
          
          <Form.Control
            required
            onChange={props.storeUserInput}
            value={props.inputValue}
            placeholder="Search.."
            aria-label="Search.."
            aria-describedby="basic-addon2"
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={props.searchBtn}
          >
            {/* when fetching search results, display loading animation */}
            {props.loading ? loadingBar : "Search"}
          </Button>
        </InputGroup>
      </div>
    </div>
  );
}
