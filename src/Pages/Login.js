import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

function MyModal(props) {
  const { modal, toggle } = props;
  return (
    <Modal className="modallogin" isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle} className="Mheader">
        <span className="mystyle text-warning ps-0 pt-1 ">LEC</span> <span className=" mystyle text-info ps-1 pt-1">WISys</span>
      </ModalHeader>
      <ModalBody>
        <form>
          <div className="row justify-content-center ">
            <input type="text" placeholder="Username" className="input1 border border-dark" />
          </div>
          <div className="row justify-content-center">
            <input type="password" placeholder="Password" className="input2 border border-dark"/>
          </div>
          <div class="row justify-content-center">
            <button type="submit" className="modalbutton btn btn-success">Submit</button>
          </div>
        </form>
      </ModalBody>
    </Modal>
  );
}

export default MyModal;