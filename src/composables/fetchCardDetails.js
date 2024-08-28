import axios from "axios";

export const fetchCardDetails = async (userid) => {
    try{
        console.log("hello brother");
        const url='http://localhost:3000/user/carddetails';
        console.log(localStorage.getItem('userId'));
        const res= await axios.get(url, {
            params: { userid: localStorage.getItem('userId') }
          });
        return res.data;
    }
    catch(error)
    {
        console.error('Error fetching card details:', error);
    }

}