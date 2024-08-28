import axios from "axios";

export const fetchCardBalance= async(userid)=>{
try{
 const url=`http://localhost:3000/user/cardbalance`;
    const res=await axios.post(url,{userid:localStorage.getItem('userId')});
    console.log(res.data.balance[0]);
    return res.data.balance;
}
catch(Error){
    console.error('Error fetching card balance:', Error);
}
};