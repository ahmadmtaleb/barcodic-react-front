import React, {Component} from 'react';
import './Table.css';
import MaterialTable from 'material-table';

class TableForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
          // { title: 'Item id', field: 'id', type:"numeric" },
          { title: 'English Name', field: 'english_name' },
          { title: 'Arabic Name', field: 'arabic_name'},
          {
            title: 'Category',
            field: 'category_id',
            lookup: {
              1: "مشروبات",
              2: "حليب",
              3:"خبز",
              4:"كورن فلكس",
              5:"دخان",
              6:"بوظة",
              7:"مياه معبئة",
              8:"قهوة و شاي",
              9:"محارم",
              10:"حفاضات",
              11:"مواد تنظيف",
              12:"معلبات",
              13:"معجون أسنان",
              14:"شامبو",
              15:"ديودرون",
              16:"فحم",
              17: "حبوب/بهارات",
              18:"ألبان/أجبان",
              19:"سكاكر",
              20:"بطاطا",
              21: "مأكولات مثلجة",
              22:"قرطاسية",
              23:"مختلف",
              24:"الكترونيات",
              25:"دواء"
            },
          },
          {title: 'Brand', field: 'brand'},
          {title: 'Barcode', field: 'barcode'},
          {title: 'price', field: 'price'}
        ],
      
      data: [
        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
        {
          name: 'Zerya Betül',
          surname: 'Baran',
          birthYear: 2017,
          birthCity: 34,
        },
      ]
    };
  }
  componentDidMount = async ()=> {
    const token = localStorage.getItem('token');
    if (token !== undefined && token !== null) {

      try {
        const response = await fetch(`http://192.168.1.3:8000/api/items?token=${token}`);
        const json = await response.json();

        if (json.success === true) {
            this.setState({
         data: json.data
            })
        }
      } catch (error) {}
    }
  }
  
  render(){
    return (

      <div className="table_component_main_body" style={{maxWidth:'100%'}}>
        <MaterialTable
          title="Items"
          
          columns={this.state.columns}
          data={this.state.data}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  this.setState((prevState) => {
                    const data = [...prevState.data];
                    data.push(newData);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    this.setState((prevState) => {
                      const data = [...prevState.data];
                      data[data.indexOf(oldData)] = newData;
                      return { ...prevState, data };
                    });
                  }
                }, 600);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  this.setState((prevState) => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
          }}
          
          options={{
            exportButton: true,
            filtering: true,
            search:true,
            sorting:true
          }}
          
        />
      </div>
    );
  }  
}
export default TableForm;









