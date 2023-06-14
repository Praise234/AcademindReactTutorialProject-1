
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    let filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear);
  
  
    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter = {filterChangeHandler} />
            <ExpensesChart expenses = {filteredExpenses} />
            <ExpensesList items = {filteredExpenses} />
        </Card>
        
        
    )
}

export default Expenses;