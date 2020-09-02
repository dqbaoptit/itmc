import './index.scss';

export default function Lesson({ title, course = 'C++', onClick }) {
  return (
    <div className="lesson-card" onClick={onClick}>
      <div className="lesson-card__title">{title}</div>
      <div className="lesson-card__footer">
        Information Technology Media Club
      </div>
    </div>
  );
}
