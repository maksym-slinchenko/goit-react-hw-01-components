import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <div className="container">
      <ul className="friend-list">{friends}</ul>
    </div>
  );
};
FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
export default FriendList;
