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
                engish_name: '',
                arabic_name:'',
                id:'',
            }
        }
        async componentDidMount() {
         this.getCategories()
    }

    getCategories = async ()=> {
      const token = localStorage.getItem('token');
      if (token !== undefined && token !== null) {
  
        try {
          const response = await fetch(`http://192.168.1.12:8000/api/categories?token=${token}`);
          const json = await response.json();

          if (json.success === true) {
              this.setState({
           Category: json.data
              })
          }
        } catch (error) {}
      }
    }

    onEnglishNameChange(event)
    {
        this.setState({english_name:event.target.value})
    }
    onArabicNameChange(event)
    {
        this.setState({arabic_name:event.target.value})
    }
    async handleSubmit(event)
    {
        event.preventDefault();
        const token = localStorage.getItem('token');
          if (token !== undefined && token !== null) {

            try 
            {
                const response = await fetch(`http://192.168.1.12:8000/api/categories/?english_name=${this.state.english_name}&arabic_name='بطاريات'&token=${token}`, {
                    method: 'POST'
                });
                const result = await response.json();
                if (result.success) 
                {
                  alert("Category has been successfully added!");                    
                  this.getCategories();
                    this.setState({english_name:""})
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
                <Form.Item label="Add New Category:">
                <Input placeholder="Category's English Name" value={this.state.english_name} onChange={this.onEnglishNameChange.bind(this)} />
                {/* <Input placeholder="Category's Arabic Name" value={this.state.arabic_name} onChange={this.onArabicNameChange.bind(this)} /> */}
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