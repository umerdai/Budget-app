import axios from "axios";

export const fetchTotalBalance = async (userid) => {
  try {
    const url = `http://localhost:3000/user/balance`;
    const res = await axios.post(url, { userid: userid });
    console.log(res.data.balance);
    return res.data.balance;
  } catch (Error) {
    console.error("Error fetching total balance:", Error);
  }
};
