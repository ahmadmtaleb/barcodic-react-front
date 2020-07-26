import React from 'react'

import TableForm from '../../components/Table/Table'

import Total from '../../components/Total/Total'

import './HomePage.css'


export default class Home extends React.Component{

    constructor(props){
        super(props);
        this.state={
            incomes:0,
            expenses:0,
            listIncomes:[],
            listExpenses:[],
            tableTitle:["Incomes"," Expenses",]   

        }
    }
    async componentDidMount() {
        const token = localStorage.getItem('token');
        if (token !== undefined && token !== null) {
    
          try {
            const response = await fetch(`http://localhost:8000/api/transactions/find-by-type/expense?token=${token}`);
            const json = await response.json();

            if (json.success === true) {
                this.setState({
             listExpenses: json.data
                })
            }
          } catch (error) {}
          try {
            const response = await fetch(`http://localhost:8000/api/transactions/find-by-type/income?token=${token}`);
            const json = await response.json();

            if (json.success === true) {
                this.setState({
             listIncomes: json.data
                })
            }
          } catch (error) {}
        }
    }
    
  
    calculateIncome=(incomes)=>{
        incomes=0;
    for(let i=0;i<this.state.listIncomes.length;i++){
    
        incomes = incomes +parseInt(this.state.listIncomes[i].amount)
        
    console.log(incomes)
    }
    return incomes;
    }
    calculateExpen=(expenses)=>{
        expenses=0;
    for(let i=0;i<this.state.listExpenses.length;i++){
        expenses= expenses +parseInt(this.state.listExpenses[i].amount);
    }
    return expenses;
    }



    render(){
        return(
            <div>
               {/* <div className="sider">
                   </div> 
                 */}
               <div className="cont"> 
               
                    <div className="home_page_main_container">
                        <div className="transTable">
                        <TableForm list={this.state.listIncomes} name={this.state.tableTitle[0]} ></TableForm>
                        <TableForm list={this.state.listExpenses} name={this.state.tableTitle[1]} ></TableForm>
                    </div>  
                
                    <Total incomes={this.calculateIncome(this.state.incomes)}


                 expenses={this.calculateExpen(this.state.expenses)}
                
                 total={((this.calculateIncome(this.state.incomes))-(this.calculateExpen(this.state.expenses)))}
                
                
                ></Total>
                     </div> 
                
                </div>
            </div>
        );
    }
}