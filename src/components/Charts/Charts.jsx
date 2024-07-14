import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Line, LineChart, Legend, CartesianGrid, XAxis, Tooltip, YAxis, ResponsiveContainer } from "recharts";
import { DataContext } from "../../context/DataContext";

export default function Charts() {
  const { allTransactions, allCustomers } = useContext(DataContext); 
  const [transactionsCharts, setTransactionsCharts] = useState([]);
  const [customersCharts, setCustomersCharts] = useState([]);
  const [chartData, setChartData] = useState([]);
  const { id } = useParams();
  const [customerName, setCustomerName] = useState('');

  async function transactionsData() {
    const res = await allTransactions();
    setTransactionsCharts(res.data);
  }

  async function customersData() {
    const res = await allCustomers();
    setCustomersCharts(res.data);
  }

  useEffect(() => {
    transactionsData();
    customersData();
  }, []);

  useEffect(() => {
    if (id && transactionsCharts.length > 0) {
      const customerTransactions = transactionsCharts.filter(transaction => transaction.customer_id === parseInt(id));
      const aggregatedData = customerTransactions.reduce((acc, transaction) => {
        const date = transaction.date;
        if (!acc[date]) {
          acc[date] = { date, amount: 0 };
        }
        acc[date].amount += transaction.amount;
        return acc;
      }, {});

      setChartData(Object.values(aggregatedData));
    }
  }, [id, transactionsCharts]);

  useEffect(() => {
    if (id && customersCharts.length > 0) {
      const customer = customersCharts.find(customer => customer.id === parseInt(id));
      if (customer) {
        setCustomerName(customer.name);
      }
    }
  }, [id, customersCharts]);


  return (
    <div className="min-h-screen p-12">
    <div className="w-[80%] h-[20rem] mx-auto mt-10">
      <h2 className="m-10 uppercase text-2xl text-blue-800">{customerName}</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="amount" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
}


