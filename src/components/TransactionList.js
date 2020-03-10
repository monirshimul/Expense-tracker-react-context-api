import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction'

export const TransactionList = () => {

    const { transactions } = useContext(GlobalContext)
    //console.log(context.transactions[1].amount);
    return (
        <div className="row d-flex justify-content-center mt-3">
            <div className=" col-sm-6" style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)" }}>
                <h1 className=" d-flex justify-content-center" style={{ borderBottom: "1px solid #e0d9d9" }}>History</h1>

                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}









            </div>

        </div>
    )
}
