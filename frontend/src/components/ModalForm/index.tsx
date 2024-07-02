import Modal from "react-modal";

Modal.setAppElement("#root");

export const ModalForm = ({ modalIsOpen, setModalIsOpen, userEdit }: any) => {
  console.log(userEdit);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            color: "lightsteelblue",
          },
        }}
      >
        <h2>Hello</h2>
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
    </div>
  );
};
