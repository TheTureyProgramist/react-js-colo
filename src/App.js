import './App.css';
import { UserList } from './components/UserList/UserList';
import { DataList } from './components/DataList/DataList';
import { FriendsList } from './components/FriendsList/FriendsList';
import { TransactionsList } from './components/TransactionsList/TransactionsList';
function App() {
  return (
    <div className="App">
      <UserList />
      <DataList />
      <FriendsList />
      <TransactionsList />
    </div>
  );
}
export default App;