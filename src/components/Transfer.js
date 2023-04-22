import React, { useState } from 'react';
import { post_request } from '../utils/api';

function Transfer({ users, accounts, handleCheck }) {
  const [transfer, setTransfer] = useState({});
  const handleTransfer = async (e) => {
    e.preventDefault();
    try {
      let token = localStorage.getItem('token');
      let result = await post_request('accounts/transfer', token, transfer);
      if (result.status === 201) {
        handleCheck();
      }
    } catch (error) {
      console.log(error?.response?.data);
    }
  };
  const handleChange = (e) =>
    setTransfer({ ...transfer, [e.target.name]: e.target.value });

  return (
    <div className="border-top p-3">
      <div>
        <div className="my-1">
          <label htmlFor="account" className="form-label">
            Account To transfer From:
          </label>
          <select
            className="form-select"
            role="button"
            onChange={handleChange}
            name="account_id"
          >
            <option value="" className="placeholder">
              Choose Account ...
            </option>
            {accounts?.map((ac) => (
              <option value={ac.id} key={ac.id}>
                {`${ac.account_type}`}
              </option>
            ))}
          </select>
        </div>
        <div className="my-1">
          <label htmlFor="account" className="form-label">
            Select Receipient:
          </label>
          <select
            className="form-select"
            role="button"
            onChange={handleChange}
            name="user_id"
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
        </div>
        <div className="my-1">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            type="number"
            className="form-control"
            name="amount"
            onChange={handleChange}
            placeholder="Enter amount"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary my-2 px-5"
          onClick={handleTransfer}
        >
          Send Money
        </button>
      </div>
    </div>
  );
}

export default Transfer;
