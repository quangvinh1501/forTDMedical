import React from "react";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function ModelRandomBySystem(props) {

  return (
    <div>
      <Modal
        portalClassName="modal"
        isOpen={props.modalIsOpen2}
        onRequestClose={props.closeModal2}
        style={customStyles}
        contentLabel="List of Exam"
        ariaHideApp={false}
      >
        <div className="modalContent">
          <div className="modalHeader">
            <div className="modalHeaderLeft">
              <h2>10 Random Selected by System</h2>
            </div>
            <div className="modalHeaderRight">
              <button onClick={props.closeModal2}>close</button>
            </div>
          </div>
          <div className="rowExam">
          {
        props.todos.slice(0, 10).map(item =>
               <div key={item.id}>
                  {item.title} - {item.created_date}
                 </div>
            )
            }
          </div>
        </div>
      </Modal>
    </div>
  );
}
export default ModelRandomBySystem;
