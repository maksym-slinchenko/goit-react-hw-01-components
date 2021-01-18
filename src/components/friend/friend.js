import PropTypes from 'prop-types';
import s from './friend.module.css';

const Friend = ({ id, avatar, name, isOnline }) => {
  return (
    <li className={s.item} key={String(id)}>
      <span
        className={isOnline ? `${s.status} ${s.green}` : `${s.status} ${s.red}`}
      ></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

Friend.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default Friend;
