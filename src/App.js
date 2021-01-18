import User from './components/user/user.js';
import user from './components/user/user.json';
import StatisticSection from './components/statistic-section/statistic-section';
import Statistic from './components/statistic/statistic';
import statistic from './components/statistic/statistic.json';
import Friend from './components/friend/friend';
import FriendList from './components/friend-list/friend-list';
import friendList from './components/friend-list/friend-list.json';
import TransactionHistory from './components/transaction-history/transaction-history';
import transactionHistory from './components/transaction-history/transaction-history.json';
import Tread from './components/transaction-history-thead/thread';

export default function App() {
  return (
    <>
      <User
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticSection
        children={statistic.map(item => (
          <Statistic id={item.id} title={item.label} stats={item.percentage} />
        ))}
      />
      <FriendList
        children={friendList.map(friend => (
          <Friend
            id={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      />
      <TransactionHistory
        children={transactionHistory.map(transaction => (
          <Tread
            id={transaction.id}
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
          />
        ))}
      />
    </>
  );
}
