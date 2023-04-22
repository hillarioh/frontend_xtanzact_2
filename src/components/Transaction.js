function Transaction({ transactions }) {
  return (
    <div className="p-2 my-1">
      <h2>Transaction History</h2>
      <div className="card">
        {transactions.map((tn) => {
          return (
            <div
              className="d-flex flex-column align-items-start p-3 border-bottom"
              key={tn.id}
            >
              <p className="mb-1">Transaction Type: {tn.type}</p>
              <p className={`mb-1 ${tn.recipient ? '' : 'd-none'}`}>
                Recipient: {tn.recipient}
              </p>
              <p className="mb-1">Amount: Ksh.{tn.amount}/=</p>
              <p className="mb-1">Date: {tn.transaction_date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Transaction;
