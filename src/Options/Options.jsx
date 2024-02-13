
const Options = ({ update, reset, total }) => {
  return (
    <>
      <button onClick={() => update('good')}>Good</button>
      <button onClick={() => update('neutral')}>Neutral</button>
      <button onClick={() => update('bad')}>Bad</button>
      {total > 0 && <button onClick={reset}>Reset</button>}
    </>
  )
}

export default Options;