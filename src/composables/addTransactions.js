import axios from "axios";
export const Addtransaction =async (transaction) => {
    console.log(transaction.type);
    console.log(localStorage.getItem('userId'));
    const res= await axios.post('http://localhost:3000/transactions/add', {
      userid: localStorage.getItem('userId'),
      description: transaction.description,
      amount: transaction.amount,
      card: transaction.card,
      date: new Date().toISOString(),
      type: transaction.type,
    });
    console.log(res.status); 
    return res.status;
    console.log("Add transaction button clicked");
  };