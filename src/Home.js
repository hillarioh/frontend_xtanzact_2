import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { post_request, get_request } from './utils/api';

function Home() {
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);
  return (
    <div className="row">
      <header>user#1</header>
      <div className="col-6">
        <h2>Accounts</h2>
        <div>
          {accounts.map((ac) => {
            return (
              <div className="card" style={{ width: '18rem' }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="card-text">
                    <span>Type: {ac.account_type} </span>
                    <span>Balance: {ac.balance} </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <h2>Transaction History</h2>
          <ul>
            {transactions.map((tn) => {
              return (
                <li>
                  <p>{tn.transaction_type}</p>
                  <p>{tn.amount}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="col-6">
        <Deposit />
        <Withdraw />
        <Transfer />
      </div>
    </div>
  );
}

function Deposit({ url }) {
  const handleDeposit = async () => {
    try {
      let result = await post_request(url);
      console.log(result);
    } catch (error) {
      console.log(error?.response?.data);
    }
  };
  return (
    <div className="mb-3">
      <h3>Deposit</h3>
      <form>
        <div class="my-1">
          <label for="telNo" class="form-label">
            Tel No
          </label>
          <input
            type="number"
            class="form-control"
            id="telNo"
            placeholder="Enter telephone number"
          />
        </div>
        <div class="my-1">
          <label for="amount" class="form-label">
            Amount
          </label>
          <input
            type="number"
            class="form-control"
            id="amount"
            placeholder="Enter amount"
          />
        </div>
        <button
          type="submit"
          class="btn btn-primary my-2"
          onClick={handleDeposit}
        >
          Deposit
        </button>
      </form>
    </div>
  );
}

function Withdraw({ url }) {
  const handleWithdraw = async () => {
    try {
      let result = await post_request(url);
      console.log(result);
    } catch (error) {
      console.log(error?.response?.data);
    }
  };
  return (
    <div>
      <h3>Withdraw</h3>
      <form>
        <div class="my-1">
          <label for="telNo" class="form-label">
            Tel No
          </label>
          <input
            type="number"
            class="form-control"
            id="telNo"
            placeholder="Enter telephone number"
          />
        </div>
        <div class="my-1">
          <label for="amount" class="form-label">
            Amount
          </label>
          <input
            type="number"
            class="form-control"
            id="amount"
            placeholder="Enter amount"
          />
        </div>
        <button
          type="submit"
          class="btn btn-primary my-2"
          onClick={handleWithdraw}
        >
          Withdraw
        </button>
      </form>
    </div>
  );
}

function Transfer({ url }) {
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState('');

  const handleTransfer = async () => {
    try {
      let result = await post_request(url);
      console.log(result);
    } catch (error) {
      console.log(error?.response?.data);
    }
  };
  return (
    <div className="">
      <h3>Send Money</h3>
      <div className="">
        <select
          className="form-select"
          role="button"
          value={value}
          onChange={handleTransfer}
          name="receiver"
        >
          <option value="" className="placeholder">
            Choose recipient to send money to
          </option>
          {users?.map((user) => (
            <option value={user.id} key={user.id}>
              {`${user.first_name} ${user.last_name}`}
            </option>
          ))}
        </select>
        <div class="my-1">
          <label for="amount" class="form-label">
            Amount
          </label>
          <input
            type="number"
            class="form-control"
            id="amount"
            placeholder="Enter amount"
          />
        </div>
        <button
          type="submit"
          class="btn btn-primary my-2"
          onClick={handleTransfer}
        >
          Send Money
        </button>
      </div>
    </div>
  );
}

export default Home;
