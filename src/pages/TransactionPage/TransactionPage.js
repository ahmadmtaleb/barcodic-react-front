import React from 'react'

import {
    Form,
    Input,
    Button,
   
    
    
    DatePicker,
    InputNumber,
    
  } from 'antd';
  import 'antd/dist/antd.css';
  import './TransactionPage.css'

export default class  Transaction extends React.Component{
constructor(props){
    super(props);
    this.state={
        list_type:[
          {value:"income"}
          ,{value:"expense"}
        ],
        category:[],
        currency:[],
        title:'',
        description:'',
        amount:'',
        category_id:0,
        start_date: null,
        end_date: null,
        interval:'',
        type:'',
        currency_id:''
        
    }
}
async componentDidMount() {
  this.getCategories()
}

getCategories = async ()=> {
const token = localStorage.getItem('token');
if (token !== undefined && token !== null) {

 try {
   const response = await fetch(`http://localhost:8000/api/categories?token=${token}`);
   const json = await response.json();

   if (json.success === true) {
       this.setState({
    category: json.data
       })
   }
 } catch (error) {}
}
try{
  const response = await fetch('http://127.0.0.1:8000/api/currencies/');
  const json = await response.json();

  if (json.success === true) {
      this.setState({
          currency: json.data
      })
  }
}
catch(error){}
}

onCurrencyChange(event)
  {
      this.setState({currency_id:event.target.value})
  }
onCategoryChange(event)
{
    this.setState({category_id:event.target.value})
}
onTypeChange(event)
    {
        this.setState({type:event.target.value})
    }
    onTitleChange(event)
    {
        this.setState({title:event.target.value})
    }
    onDescriptionChange(event)
    {
        this.setState({description:event.target.value})
    }
    

    onStartChange = (value, dateString) => {
      console.log('Selected Time: ', value);
      console.log('Formatted Selected Time: ', dateString);
    }
    onStartOk = (value) => {
      this.setState({
        
          start_date: value})
        
      }
      onEndChange = (value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
      }
      onEndOk = (value) => {
        this.setState({
          
            end_date: value})
          
        }

    // onEndChange(event)
    // {
    //     this.setState({end_date:JSON.stringify(event.target.value)})
    // } 
    onAmountChange(event)
    {
        this.setState({amount:event.target.value})
    }
   
    

    async handleSubmit(event)
    {
        event.preventDefault();

        const token = localStorage.getItem('token');
        if (token !== undefined && token !== null) {
        try 
        {
            const response = await fetch(`http://127.0.0.1:8000/api/transactions?token=${token}&title=${this.state.title}&description=${this.state.description}&amount=${this.state.amount}&category_id=${this.state.category_id}&start_date=${this.state.start_date}&end_date=${this.state.end_date}&interval=${this.state.interval}&type=${this.state.type}&currency_id=${this.state.currency_id}`, {
                method: 'POST'
            });
            const result = await response.json();
            if (result.success) 
            {
                console.log("done")   
                this.setState({title:""})        
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
            <div className="transaction_page_fi" >
                <div></div>
                <div >
                <h3>Add Transaction</h3>
            <Form >
               
              
              <Form.Item label="Title">
                <Input onChange={this.onTitleChange.bind(this)}/>
              </Form.Item>
              <Form.Item label="Description">
                <Input onChange={this.onDescriptionChange.bind(this)} />
              </Form.Item>
      
              <Form.Item label="Start date">
                <DatePicker showTime onChange={this.onStartChange} onOk={this.onStartOk}/>
              </Form.Item>
              <Form.Item label="End date">
                <DatePicker showTime onChange={this.onEndChange} onOk={this.onEndOk}/>
              </Form.Item>
              <Form.Item label="Amount">
                <InputNumber onClick={this.onAmountChange.bind(this)}/>
              </Form.Item>
              <Form.Item label="Currency">
                <select onChange={this.onCurrencyChange.bind(this)}>
                    <option>Choose your Currency</option>
                {
                    this.state.currency.map(currency => {
                        return <option key={currency.id} value={currency.id}>{currency.code}</option>
                    })
                }
                  </select>
              </Form.Item>
              <Form.Item label="Category">
              <select onChange={this.onCategoryChange.bind(this)}>
              <option>Choose a category</option>

                {
                    this.state.category.map(category => {
                        return <option key={category.id} value={category.id}>{category.name}</option>
                    })
                }
                  </select>
              </Form.Item>
              <Form.Item label="Type">
                {/* <Select onClick={this.onTypeChange.bind(this)}>
              {this.state.list_type.map((item,index)=>
              <Select.Option key={index} value={this.state.list_type[index]}>
              {this.state.list_type[index]}
              </Select.Option>
              )}

            
           
                </Select> */}
                 <select onChange={this.onTypeChange.bind(this)}>
              <option>Choose a type</option>

                {
                    this.state.list_type.map(type => {
                        return <option key={type} value={type.value}>{type.value}</option>
                    })
                }
                  </select>
              </Form.Item>
              
             
              <Form.Item label="Confirm">
                <Button type="primary" className="btna" onClick={this.handleSubmit.bind(this)}>Add</Button>
              </Form.Item>
            </Form>
          </div>
          <div>
          
          </div></div>
        );
      };
    }