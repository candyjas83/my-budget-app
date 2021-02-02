import Button from 'react-bootstrap/Button';

const AddTransaction = () => {
  return (
    <>
    <h3>Add New Transaction</h3>
    <form>
    <div className="form-control">
    <label htmlFor="text">Transaction Type:</label>
    <input type="text" placeholder="Enter transaction..."/>
    </div>
    <div className="form-control">
    <label htmlFor="amount">Transaction Amount: <br /> (negative) = expense, (positive) = income)</label>
    <input type="amount" placeholder="Enter amount..."/>
    </div>
    <Button variant="dark" size="sm">Add transaction</Button>
    </form>
    </>
  )
}
export default AddTransaction;
