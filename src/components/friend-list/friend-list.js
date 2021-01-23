import PropTypes from 'prop-types';
import friendList from './friend-list.json';
import FriendListItem from '../friend-list-item/friend-list-item';

const FriendList = () => {
  return (
    <div className="container">
      <ul className="friend-list">
        {friendList.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    </div>
  );
};
FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
export default FriendList;
