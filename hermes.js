const transactions = [
  { ID: 1, Customer_ID: "21", Transaction_Date: "30/07/2019" },
  { ID: 2, Customer_ID: "15", Transaction_Date: "21/07/2019" },
  { ID: 3, Customer_ID: "16", Transaction_Date: "18/07/2019" },
  { ID: 4, Customer_ID: "20", Transaction_Date: "22/07/2019" },
  { ID: 5, Customer_ID: "15", Transaction_Date: "15/07/2019" },
  { ID: 6, Customer_ID: "20", Transaction_Date: "12/07/2019" },
  { ID: 7, Customer_ID: "15", Transaction_Date: "21/07/2019" },
  { ID: 8, Customer_ID: "20", Transaction_Date: "12/07/2019" }
];


const customerTransactions = transactions.reduce((acc, transaction) => {
  const customerId = transaction.Customer_ID;
  if (!acc[customerId]) {
    acc[customerId] = 0;
  }
  acc[customerId]++;
  return acc;
}, {});


const sortedCustomers = Object.entries(customerTransactions)
  .map(([Customer_ID, Total_Penjualan]) => ({ Customer_ID, Total_Penjualan }))
  .sort((a, b) => {
    if (b.Total_Penjualan !== a.Total_Penjualan) {
      return b.Total_Penjualan - a.Total_Penjualan;
    }
    return a.Customer_ID.localeCompare(b.Customer_ID);
  });


console.table("Customer_ID | Total Penjualan");
sortedCustomers.forEach(({ Customer_ID, Total_Penjualan }) => {
  console.table(`${Customer_ID} | ${Total_Penjualan}`);
});

