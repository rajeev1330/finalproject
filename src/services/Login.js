import axios from "axios";


const user_base_url = "http://localhost:8081";


const authenticateUser=async (user)=> {
        try {
    const res = await axios.post(user_base_url + '/signin', user);
    if (res.status === 'SUCCESS')
      console.log("Sucess");
     else if (res.status === 'FAILURE') 
      console.log("Failure");
  } catch (err) {
    console.error(err);
  }
    }

    export default authenticateUser
