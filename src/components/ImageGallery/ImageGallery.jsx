import './ImageGallery.modules.css';
import ImageCard from './ImageCard/ImageCard';

export default function ImageGallery({ items, onClick }) {
  return (
    <ul className="galleryList">
      {items.map(item => (
        <li
          className="galleryItem"
          key={item.id}
          onClick={() => onClick(item.urls.regular)}
        >
          <ImageCard small={item.urls.small} alt={item.description} />
        </li>
      ))}
    </ul>
  );
}
