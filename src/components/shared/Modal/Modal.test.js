import Modal from "./Modal";
import { render } from "@testing-library/react";
import MockComponent from "./MockComponent";

const handleOpenModal = () => true;



const PROPS = {
    handleClose: handleOpenModal,
    show: false,
    children: MockComponent,
    color: "green",
  };

  describe("Test Modal", () => { 

    it("Should render", () => { 
        render(<Modal {...PROPS}>MockComponent</Modal>);
    });

  });