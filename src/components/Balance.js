import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);


    return (
        <div className="row d-flex justify-content-around" >
            <div className="col-sm-6 d-flex justify-content-around" style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)", minHeight: "25px" }} >
                <h2 className="text-muted">Your Balance</h2>
                <h2 className="">$<span className="text-primary">{total}</span></h2>
            </div>

        </div>

    )
}
