import React, { Component } from "react";
import ProductService from "./../../services/product.service";
import {InputText} from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

export default class AddProduct extends Component {
    
  constructor(props) {
    super(props);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeMeasurment = this.onChangeMeasurment.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.saveProduct = this.saveProduct.bind(this);
    this.newProduct = this.newProduct.bind(this);

    this.state = {
      productId: null,
      name: "",
      category:"",
      measurment:"",
      price:"",
      submitted: false
    };
  }
  
  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeId(e){
    this.setState({
      productId: e.target.value
    });
  }
  onChangeCategory(e) {
    this.setState({
      category: e.target.value
    });
  }
  onChangeMeasurment(e){
    this.setState({
      measurment: e.target.value
    });
  }
  onChangePrice(e){
      this.setState({
        price: e.target.value
      });
    }
  saveProduct() {
    console.log('here');
    var data = {
      productId: this.state.productId,
      name: this.state.name,
      category: this.state.category,
      measurment: this.state.measurment,
      price: this.state.price
    };
    console.log(data);
    ProductService.create(data)
      .then(response => {debugger;
        console.log(response);
        this.setState({
          productId: response.data.productId,
          name: response.data.name,
          category: response.data.category,
          measurment: response.data.measurment,
          price: response.data.price,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newProduct() {debugger;
    this.setState({
      productId: null,
      name: "",
      category: "",
      measurment: "",
      price:"",

      submitted: false
    });
  }

  render() {
    return (   
            
      <div className="flex align-items-center justify-content-center mt-4x`">
          <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
              <div className="text-center mb-5">
                  <div className="text-900 text-3xl font-medium mb-3">Create product</div>
            </div>
              <div>
                  <label htmlFor="product_id" className="block text-900 font-medium mb-2">Product ID</label>
                  <InputText id="product_id" type="text" value={this.state.productId} onChange={this.onChangeId} placeholder="product identifier" className="w-full mb-3" />
                  
                  <label htmlFor="category" className="block text-900 font-medium mb-2">Category</label>
                  <Dropdown optionLabel="label" value={this.state.category} onChange={this.onChangeCategory}
          optionGroupLabel="label" optionGroupChildren="items" className="w-full md:w-14rem" placeholder="Select product type" />
        
                  <label htmlFor="product_name" className="block text-900 font-medium mb-2">Name</label>
                  <InputText id="product_name" type="text" value={this.state.name} onChange={this.onChangeName} placeholder="product name" className="w-full mb-3" />

                  <label htmlFor="measurment" className="block text-900 font-medium mb-2 mt-2">Measurment</label>
                  <Dropdown optionLabel="label" 
          optionGroupLabel="label" optionGroupChildren="items" value={this.state.measurment} onChange={this.onChangeMeasurment} className="w-full md:w-14rem" placeholder="Select product measurment" />
        
                  <label htmlFor="product_price" className="block text-900 font-medium mb-2 mt-2">Price</label>
                  <InputText id="product_price" value={this.state.price} onChange={this.onChangePrice} type="text" placeholder="price" className="w-full mb-3" />

                  <Button label="Create" icon="pi pi-check" iconPos="right"  onClick={this.saveProduct} className="w-full mt-4"/>
              </div>
          </div>
      </div>
        )}
     
  }


