import axios from "axios";
import { createContext } from "react";

export const DataContext = createContext();

export default function DataContextProvider(props){
    
    function allTransactions(){
     return axios.get('http://localhost:5000/transactions')
        .then((response)=> response)
        .catch((error)=> error)
    }

    function allCustomers(){
        return axios.get('http://localhost:5000/customers')
        .then((response)=> response)
        .catch((error)=> error)
      }
      
return <DataContext.Provider value={{ allCustomers, allTransactions }}>
        { props.children }
      </DataContext.Provider>
}