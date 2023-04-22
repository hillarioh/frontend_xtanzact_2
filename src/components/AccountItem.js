import React from 'react';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import Transfer from './Transfer';

function Item({ item, action, setAction, accounts, handleCheck, users }) {
  const Action = ({ val, accounts, handleCheck, users }) => {
    if (val === 'withdraw') {
      return <Withdraw accounts={accounts} handleCheck={handleCheck} />;
    } else if (val === 'transfer') {
      return (
        <Transfer accounts={accounts} users={users} handleCheck={handleCheck} />
      );
    } else {
      return <Deposit accounts={accounts} handleCheck={handleCheck} />;
    }
  };
  return (
    <li className="list-group-item p-0">
      <div className="bg-secondary p-2 d-flex">
        <button
          type="button"
          className="btn text-capitalize flex-fill"
          name={item}
          onClick={(e) => setAction(e.target.name)}
        >
          {item}
        </button>
      </div>
      {item === action && (
        <Action
          val={action}
          accounts={accounts}
          handleCheck={handleCheck}
          users={users}
        />
      )}
    </li>
  );
}

export default Item;
