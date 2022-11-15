import TransactionCard from "./TransactionCard";
import TransactionForm from "./TransactionForm";
import TransactionTags from "./TransactionTags";

const Transactions = () => {
  return ( 
    <>
      <TransactionCard/>
      <p>write memo</p>
      <TransactionTags />
      <TransactionForm />
    </>
  );
}

export default Transactions;