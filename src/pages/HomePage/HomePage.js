import React from 'react'

import TableForm from '../../components/Table/Table'

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

    render(){
        return(
            <div>
               {/* <div className="sider">
                   </div> 
                 */}
               <div className="cont"> 
               
                    <div className="home_page_main_container">
                        <div className="transTable">
                        <TableForm></TableForm>
                    </div>  
                
                     </div> 
                
                </div>
            </div>
        );
    }
}