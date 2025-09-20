import transactions from "../../data/transactions.json";
import { TransactionsItem } from "../TransactionsItem/TransactionsItem";

export const TransactionsList = () => {
  return (
    <div>
      {transactions.map((friend) => (
        <TransactionsItem key={friend.id} transactions={friend} />
      ))}
    </div>
  );
}