import axios from "axios";
class Service implements iService{
   async Post(url:String, obj?: any, config?: any) {
      await axios.post(url, obj, config);
    }
    
}