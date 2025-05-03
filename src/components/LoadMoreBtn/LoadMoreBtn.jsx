import './LoadMoreBtn.modules.css';

export default function LoadMoreBtn({ onClick }) {
  return (
    <button type="button" className="LoadMoreBtn" onClick={onClick}>
      Load more
    </button>
  );
}
