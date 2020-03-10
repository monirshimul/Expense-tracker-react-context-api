import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }


    return (
        <div className="row d-flex justify-content-center mt-3">
            <div className="col-sm-6" style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)" }}>
                <h3 className="text-center">Add new transaction</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Text</label>
                        <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Text" />
                        <small className="form-text text-muted">Provide Your area of Income or Expense</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Amount</label>
                        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Amount" />
                        <small className="form-text text-muted">(-) is for Expense & (+) is for Income</small>
                    </div>

                    <button className="btn btn-primary btn-block mb-3">Add transaction</button>
                </form>
            </div>

        </div>
    )
}
