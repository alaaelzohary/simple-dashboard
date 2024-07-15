import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataContext";

export default function CustomerService() {
  const { allCustomers, allTransactions } = useContext(DataContext);
  const [transactionsDetails, setTransactionsDetails] = useState([]);
  const [customersDetails, setCustomersDetails] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  async function allTransactionsShow() {
    const res = await allTransactions();
    setTransactionsDetails(res.data);
  }

  async function allCustomersShow() {
    const res = await allCustomers();
    setCustomersDetails(res.data);
  }

  useEffect(() => {
    allTransactionsShow();
    allCustomersShow();
  }, []);

  const handleCustomerClick = (customerId) => {
    navigate(`/simple-dashboard/charts/${customerId}`);
  };

  return (
    <>
      <div className="relative z-0">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          id="floating_standard"
          className="w-[80%] mx-auto block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="floating_standard"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-40 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Search
        </label>
      </div>

      <div className="mt-10 relative overflow-x-auto shadow-md sm:rounded-lg w-[80%] mx-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Amount</th>
              <th scope="col" className="px-6 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {transactionsDetails
              .map((process) => {
                const customer = customersDetails
                  .filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.name.toLowerCase().includes(search.toLowerCase());
                  })
                  .find((customer) => customer.id === process.customer_id);

                if (!customer?.name) {
                  return null;
                }

                return (
                  <tr
                    key={process.id}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer"
                      onClick={() => handleCustomerClick(customer.id)}
                    >
                      {customer.name}
                    </th>
                    <td className="px-6 py-4">{process.amount}</td>
                    <td className="px-6 py-4">{process.date}</td>
                  </tr>
                );
              })
              .filter(Boolean)}
          </tbody>
        </table>
      </div>
    </>
  );
}

