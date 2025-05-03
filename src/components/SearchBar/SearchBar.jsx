import './SearchBar.modules.css';
import { useId } from 'react';
import { MdOutlineImageSearch } from 'react-icons/md';
import { toast } from 'react-hot-toast';

export default function SearchBar({ onSubmit }) {
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const search = form.elements.search.value;

    if (form.elements.search.value.trim() === '') {
      toast('Please enter your search request 💛');
      return;
    }

    onSubmit(search);
    form.reset();
  };

  const id = useId();

  return (
    <header className="header">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          name="search"
          id={id}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <MdOutlineImageSearch className="searchIcon" />

        <button className="searchBtn" type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
