import css from './Options.module.css';

const Options = ({ onUpdate, onReset, total }) => {
  return (
    <div className={css.btn}>
      <button onClick={() => onUpdate('good')}>Good</button>
      <button onClick={() => onUpdate('neutral')}>Neutral</button>
      <button onClick={() => onUpdate('bad')}>Bad</button>
      {total > 0 && <button onClick={onReset}>Reset</button>}
    </div>
  )
}

export default Options;