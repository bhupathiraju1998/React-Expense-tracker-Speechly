import React,{useReducer,createContext} from 'react';
import contextReducer from './contextReducer';
const intialState = JSON.parse(localStorage.getItem('transactions')) || [];
export const ExpenseTrackerContext = createContext(intialState);

export const Provider = ({children}) => {
    const [transactions, dispatch] = useReducer(contextReducer,intialState);

    //action creators
    const deleteTransaction = (id) => {
        dispatch({type:'DELETE_TRANSACTION',payload:id})
    }

    const addTransaction = (transaction) => {
        dispatch({type:'ADD_TRANSACTION',payload:transaction})
        console.log(transaction)
    }

    const balance = transactions.reduce((acc,currVal)=>{
        return (currVal.type === 'Expense' ? acc-currVal.amount:acc+currVal.amount)
    },0)

    return (
        <ExpenseTrackerContext.Provider value={{deleteTransaction,balance,transactions,addTransaction}}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}