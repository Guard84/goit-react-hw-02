import css from './Notification.module.css';

const Notification = ({ total }) => {
  return total === 0 ? <p className={css.notify}>No feedback yet</p> : null;
}

export default Notification