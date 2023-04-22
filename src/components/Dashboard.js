import React, { useState, useEffect } from 'react';
import { get_request } from '../utils/api';
import Item from './AccountItem';
import Transaction from './Transaction';

function Dashboard() {
  const [action, setAction] = useState('');
  const [check, setCheck] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [users, setUsers] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let token = localStorage.getItem('token');
        let response = await get_request('accounts', token);
        let users_response = await get_request('users', token);
        let tn_response = await get_request('transaction_history', token);
        setAccounts(response.data);
        setUsers(users_response.data);
        setTransactions(tn_response.data.transactions);
      } catch (error) {}
    }
    fetchData();
  }, [check]);

  const handleCheck = () => setCheck(!check);

  return (
    <>
      <div className="col-6">
        <div className="p-2 my-1">
          <h2>Accounts</h2>
          <div className="card mb-3 p-2">
            {accounts.map((ac) => (
              <AccountItem account={ac} key={ac.id} />
            ))}
          </div>
          <ul className="list-group">
            {['deposit', 'withdraw', 'transfer'].map((item, i) => {
              return (
                <Item
                  item={item}
                  action={action}
                  handleCheck={handleCheck}
                  key={i}
                  users={users}
                  setAction={setAction}
                  accounts={accounts}
                />
              );
            })}
          </ul>
        </div>
      </div>
      <div className="col-6">
        <Transaction transactions={transactions} />
      </div>
    </>
  );
}

const AccountItem = ({ account }) => {
  return (
    <div className="d-flex border rounded my-1">
      <div className="d-flex justify-content-center align-items-center p-3">
        <h1 className="m-0">AC</h1>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center p-3">
        <p className="m-0">
          <b>Type: </b>
          {account.account_type}
        </p>
        <p className="m-0">
          <b>Balance: </b>
          {account.balance}
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
