import React from 'react'


import { Table} from 'reactstrap';



import './Table.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function TableForm(props) {



  return (

    <div className="table_component_main_body">
     
      <h3>{props.name}</h3>

      <Table responsive>
        <thead>
          <tr>
           {/*  <th>#</th> */}
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Start date</th>
            <th>End date</th>
            <th>Interval</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
        {props.list.map((item,index)=>
             {
            return <tr key={index}>

              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.name}</td>
              <td>{item.start_date}</td>
              <td>{item.end_date}</td>
              <td>{item.interval}</td>
              <td>{item.amount}</td>
              <td>{item.code}</td>
              
            </tr>;
          }
           )}
          

        </tbody>
      </Table></div>
  );
}
export default TableForm









