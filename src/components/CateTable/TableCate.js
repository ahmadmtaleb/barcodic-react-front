import React from 'react'


import { Table} from 'reactstrap';



import './TableCate.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'antd';


class TabelForm extends React.Component {
  state = {
    id:''
  }

  async handleDelete(event)
    {
        event.preventDefault();
        debugger;
        this.setState({id:event.target.value}, async()=> {
          // Running it using this way will ensure that we get the latest id from the stae
          // this function will only run when react finish updating the state 
          const token = localStorage.getItem('token');
          if (token !== undefined && token !== null) {

            try 
            {
                const response = await fetch(`http://127.0.0.1:8000/api/categories/${this.state.id}?token=${token}`, {
                    method: 'DELETE'
                });
                const result = await response.json();
                if (result.success) 
                {
                  this.props.updateDate()
                    console.log("done")
                } 
                else 
                {
                    console.log("error")
                }
            } 
            catch (err) 
            {
                console.log('err', err)
            }
          }
        }) // event
      

    }
    

  render(){
  return (

    <div className="Table_cat_main">
     
      <h3>{this.props.name}</h3>

      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            
            <th>Name</th>
            <th></th>
           

          </tr>
        </thead>
        <tbody>
        {this.props.list.map((item,index)=>
             <tr key={index}>
             <th scope="row">{index+1}</th>
           
           <td>{item.name}</td>
           <td><Button type="primary" value={item.id} onClick={ this.handleDelete.bind(this)}>DELETE</Button></td>
          </tr>
           )}
          

        </tbody>
      </Table></div>
  );
        }
}
export default TabelForm