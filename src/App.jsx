import 'modern-normalize';
import { useState } from 'react';
import './App.css';
import { Toaster } from 'react-hot-toast';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import { fetchImages } from '../src/images-api';
import ImageModal from './components/ImageModal/ImageModal';

function App() {
  const [images, setImages] = useState([]);

  const [loading, setLoading] = useState(false);

  const [query, setQuery] = useState('');

  const [page, setPage] = useState(1);

  const [isModalOpen, setIsModalOpen] = useState('');

  const [error, setError] = useState(false);

  const openModal = imageUrl => {
    setIsModalOpen(imageUrl);
  };

  const closeModal = () => {
    setIsModalOpen(null);
  };

  const handleSearch = async newQuery => {
    try {
      setQuery(newQuery);
      setPage(1);
      setImages([]);
      setError(false);
      setLoading(true);
      const data = await fetchImages(newQuery, 1);
      setImages(data);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    try {
      const nextPage = page + 1;
      setLoading(true);

      const newImages = await fetchImages(query, nextPage);

      setImages(prev => [...prev, ...newImages]);
      setPage(nextPage);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="wrapper">
      <SearchBar onSubmit={handleSearch} />
      {images.length === 0 && (
        <p className="title">
          Welcome to the fastest service across the globe! Here you can find any
          kind of photo — all you need to do is make a request. We’d love to
          hear your feedback as soon as possible — we really appreciate you as a
          user ❤️ Enjoy our service! 😋
        </p>
      )} 

      {images.length > 0 && <ImageGallery items={images} onClick={openModal} />}
      {loading && <Loader />}
      {images.length > 0 && <LoadMoreBtn onClick={loadMore} />}

      {isModalOpen && <ImageModal image={isModalOpen} onClose={closeModal} />}
      {error && <ErrorMessage />}
      <Toaster
        position="bottom-right"
        duration={5000}
        toastOptions={{
          style: {
            border: '2px solid #d21313',
            padding: '18px',
            color: 'rgb(26, 30, 32)',
            background: '#f5c0bb',
            fontSize: '18px',
          },
        }}
      />
    </section>
  );
}

export default App;
