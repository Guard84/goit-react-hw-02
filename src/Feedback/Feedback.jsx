import css from './Feedback.module.css';

const Feedback = ({ values: { good, neutral, bad, }, total, percent }) => {
   return (
    <div className={css.feedback}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {percent}%</p>
    </div>
  )
}

export default Feedback;