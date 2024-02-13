
const Options = ({ onUpdate, onReset, total }) => {
  return (
    <>
      <button onClick={() => onUpdate('good')}>Good</button>
      <button onClick={() => onUpdate('neutral')}>Neutral</button>
      <button onClick={() => onUpdate('bad')}>Bad</button>
      {total > 0 && <button onClick={onReset}>Reset</button>}
    </>
  )
}

export default Options;