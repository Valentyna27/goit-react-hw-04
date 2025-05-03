import Modal from 'react-modal';
import './ImageModal.modules.css';

export default function ImageModal({ image, onClose }) {
  return (
    <Modal
      className="content"
      overlayClassName="overlay"
      isOpen={true}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      ariaHideApp={false}
    >
      <img className="regularImg" src={image} alt="SelectedImages" />
    </Modal>
  );
}
