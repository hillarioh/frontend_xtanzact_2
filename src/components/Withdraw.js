import React, { useState } from 'react';
import { post_request } from '../utils/api';

function Withdraw({ accounts, handleCheck }) {
  const [transaction, setTransaction] = useState({
    transaction_type: 'withdraw',
  });

  const handleWithdraw = async (e) => {
    e.preventDefault();
    try {
      let token = localStorage.getItem('token');
      let result = await post_request('accounts/transact', token, {
        transaction: transaction,
      });
      if (result.status === 201) {
        handleCheck();
      }
    } catch (error) {
      console.log(error?.response?.data);
    }
  };

  const handleChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
    console.log(transaction);
  };
  return (
    <div className="border-top py-2 px-3">
      <form>
        <div>
          <label htmlFor="account" className="form-label">
            Account:
          </label>
          <select
            className="form-select"
            role="button"
            onChange={handleChange}
            name="account_id"
          >
            <option value="" className="placeholder">
              Choose Account type ...
            </option>
            {accounts?.map((ac, i) => (
              <option value={ac.id} key={ac.id}>
                {`${ac.account_type}`}
              </option>
            ))}
          </select>
        </div>
        <div className="my-1">
          <label htmlFor="telNo" className="form-label">
            Tel No
          </label>
          <input
            type="number"
            className="form-control"
            id="telNo"
            placeholder="Enter telephone number"
          />
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
          onClick={handleWithdraw}
        >
          Withdraw
        </button>
      </form>
    </div>
  );
}

export default Withdraw;
