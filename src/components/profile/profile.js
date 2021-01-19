import PropTypes from 'prop-types';
import s from './profile.module.css';

const Profile = ({ avatar, name, tag, location, stats }) => {
  const { followers = 0, views = 0, likes = 0 } = stats;
  return (
    <div className="container">
      <div className={s.profile}>
        <div className={s.description}>
          <img src={avatar} alt="Аватар пользователя" className={s.avatar} />
          <p className={s.name}>{name}</p>
          <p className="tag">@{tag}</p>
          <p className="location">{location}</p>
        </div>
        <ul className={s.stats}>
          <li className={s.stats_item}>
            <span className={s.label}>Followers</span>
            <span className={s.quantity}>{followers}</span>
          </li>
          <li className={s.stats_item}>
            <span className={s.label}>Views</span>
            <span className={s.quantity}>{views}</span>
          </li>
          <li className={s.stats_item}>
            <span className={s.label}>Likes</span>
            <span className={s.quantity}>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
export default Profile;
