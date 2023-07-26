import React, { Component } from "react";
import ProductService from "../../services/product.service";
import { Link } from "react-router-dom";
import { DataTable }from 'primereact/datatable';
import { Column } from 'primereact/column';


export default class ProductListComponent extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveProducts = this.retrieveProducts.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveProduct = this.setActiveProduct.bind(this);
    this.removeAllProducts = this.removeAllProducts.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      Products: [],
      currentProduct: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }
 products=ProductService.getMock();;
  componentDidMount() {
    this.retrieveProducts();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  retrieveProducts() {
    ProductService.getAll()
      .then(response => {
        this.setState({
          Products: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
   this.products=ProductService.getMock();
   console.log(this.products);
  }

  refreshList() {
    this.retrieveProducts();
    this.setState({
      currentProduct: null,
      currentIndex: -1
    });
  }

  setActiveProduct(Product, index) {
    this.setState({
      currentProduct: Product,
      currentIndex: index
    });
  }

  removeAllProducts() {
    ProductService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchTitle() {
    ProductService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          Products: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    // const { searchTitle, Products, currentProduct, currentIndex } = this.state;

    return (
      
      <div className="table p-4 mt-6 rounded-8">
        
        <DataTable value={this.products} paginator rows={5}  sortMode="multiple" dataKey="id"  filterDisplay="row" globalFilterFields={['name', 'id', 'category', 'price']} header="Products" >
            <Column field="id" filter filterPlaceholder="Search by id" sortable  header="ID"></Column>
            <Column field="name" filter filterPlaceholder="Search by name" sortable header="Name"></Column>
            <Column field="category" filter filterPlaceholder="Search by category" sortable header="Category"></Column>
            <Column field="measurment" header="Measurment"></Column>
            <Column field="price" sortable header="Price per unit"></Column>
        </DataTable>
       </div>
    );
  }
}

