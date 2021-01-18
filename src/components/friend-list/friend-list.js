const FriendList = ({ children }) => {
  return (
    <div className="container">
      <ul className="friend-list">{children}</ul>
    </div>
  );
};

export default FriendList;
