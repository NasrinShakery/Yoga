import axios from "axios";

export const fetchYogaClasses = async () => {
   const response = await axios.get("http://localhost:3030/classes");
   return response.data;
}