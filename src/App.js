import Profile from './components/profile/profile.js';
import profile from './components/profile/profile.json';
import Statistics from './components/statistics/statistics';
// import Statistic from './components/statistic/statistic';
import statisticalData from './components/statistics/statistical-data.json';
// import FriendListItem from './components/friend-list-item/friend-list-item';
import FriendList from './components/friend-list/friend-list';
// import friendList from './components/friend-list/friend-list.json';
import TransactionHistory from './components/transaction-history/transaction-history';
import transactions from './components/transaction-history/transaction-history.json';

export default function App() {
  return (
    <>
      <Profile
        name={profile.name}
        tag={profile.tag}
        location={profile.location}
        avatar={profile.avatar}
        stats={profile.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList />
      <TransactionHistory items={transactions} />
    </>
  );
}
