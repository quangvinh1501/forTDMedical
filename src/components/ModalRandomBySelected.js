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

function ModelRandomBySelected(props) {
  
  const shuffle = array => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  };
  return (
    <div>
      <Modal
        portalClassName="modal"
        isOpen={props.modalIsOpen1}
        onRequestClose={props.closeModal1}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="List of Exam"
      >
        <div className="modalContent">
          <div className="modalHeader">
            <div className="modalHeaderLeft">
              <h2>10 Random Selected Exam</h2>
            </div>
            <div className="modalHeaderRight">
              <button onClick={props.closeModal1}>close</button>
            </div>
          </div>
          <div className="rowExam">
            {shuffle(props.todos).slice(0,10).map(item =>
              item.published ? (
               <div key={item.id}>
                  {item.title} - {item.created_date}
                 </div>
              ) : null
              
            )
            }
          </div>
        </div>
      </Modal>
    </div>
  );
}
export default ModelRandomBySelected;
