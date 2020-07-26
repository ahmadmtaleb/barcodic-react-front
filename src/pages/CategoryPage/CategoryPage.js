import React from 'react'
import {
    Form,
    Input,
    Button,
    
    
  } from 'antd';
  import 'antd/dist/antd.css';
  import './CategoryPage.css'
  import Table from '../../components/CateTable/TableCate'

export default class CategoryPage extends React.Component{
    
        constructor(props){
            super(props);
            this.state={
                Category:[],
                name: '',
                id:'',
            }
        }
        async componentDidMount() {
         this.getCategories()
    }

    getCategories = async ()=> {
      const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xOTIuMTY4LjEuNjo4MDAwXC9hcGlcL2xvZ2luIiwiaWF0IjoxNTk1Nzg2NDg1LCJleHAiOjE1OTU4NzI4ODUsIm5iZiI6MTU5NTc4NjQ4NSwianRpIjoib0RyRER6cmVRZDEzMlhkZCIsInN1YiI6MSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.GLBl2MVwNlXsKSbNbpKznXKi8We-iVDT3_NO3n4Q24U';
      //const token = localStorage.getItem('token');
      if (token !== undefined && token !== null) {
  
        try {
          const response = await fetch(`http://192.168.1.6:8000/api/categories?token=${token}`);
          const json = await response.json();

          if (json.success === true) {
              this.setState({
           Category: json.data
              })
          }
        } catch (error) {}
      }
    }

    onNameChange(event)
    {
        this.setState({name:event.target.value})
    }

    async handleSubmit(event)
    {
        event.preventDefault();
        const token = localStorage.getItem('token');
          if (token !== undefined && token !== null) {

            try 
            {
                const response = await fetch(`http://192.168.1.6:8000/api/categories/?name=${this.state.name}&token=${token}`, {
                    method: 'POST'
                });
                const result = await response.json();
                if (result.success) 
                {
                    console.log("done")
                    this.getCategories();
                    this.setState({name:""})
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

    }
    

    render(){
        return(
            <div><h3 className="het">Add Category</h3>
            
                <Form className="ctn">
                <Form.Item label="Category Name:">
                <Input placeholder="Add New Category" value={this.state.name} onChange={this.onNameChange.bind(this)} />
              </Form.Item>
              <Form.Item className="btnA" >
                <Button type="primary" className="btna" onClick = {this.handleSubmit.bind(this)}>Add</Button>
              </Form.Item>
                </Form>
                 
                 <Table list={this.state.Category} updateDate={this.getCategories}></Table>
                

            
            </div>

        );
    }
}