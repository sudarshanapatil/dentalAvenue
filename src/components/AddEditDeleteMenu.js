import React from "react";
import { Button, ButtonToolbar, ButtonGroup, Row } from "react-bootstrap";
import "../styles/AddEditDeleteMenu.css";

const AddEditDeleteMenu = props => {
  return (
    <Row noGutters className="add-edit-delete-menu">
      <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup
          className="mr-2 add-edit-delete-menu-button"
          aria-label="First group"
        >
          <Button
            variant="primary"
            onClick={() => props.setAddEditDelete("add")}
          >
            Add new
          </Button>
        </ButtonGroup>

        <ButtonGroup
          className="mr-2 add-edit-delete-menu-buttons"
          aria-label="Second group"
        >
          <Button
            variant="success"
            onClick={() => props.setAddEditDelete("edit")}
          >
            Edit
          </Button>
        </ButtonGroup>

        <ButtonGroup aria-label="Third group" className="mr-2">
          <Button
            variant="danger"
            onClick={() => props.setAddEditDelete("delete")}
          >
            Delete
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
    </Row>
  );
};
export default AddEditDeleteMenu;
