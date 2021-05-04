import React, { Component } from 'react'

import axios from 'axios';

export class adp extends Component {


    constructor(props) { 
        super(props)

        this.state = {
            fields:{
            merchantId:"",
            merchantName:"",
            productId:"",
            productName:"",
            productPrice:"",
            productQuantity:"",
            productDescription:""
            },
            errors:{}  

        }

    }

    changeproductIdHandler = (e) => {
        this.setState({
            productId: e.target.value
        })
    }
    changemerchantIdHandler = (e) => {
        this.setState({
            merchantId: e.target.value
        })
    } 
    changemerchantNameHandler = (e) => {
        this.setState({
            merchantName: e.target.value
        })
    }
    changeproductNameHandler = (e) => {
        this.setState({
            productName: e.target.value
        })
    }
    changeproductPriceHandler = (e) => {
        this.setState({
            productPrice: e.target.value
        })
    }
    changeproductQuantityHandler = (e) => {
        this.setState({
            productQuantity: e.target.value
        })
    }
    changeproductDescriptionHandler = (e) => {
        this.setState({
            productDescription: e.target.value
        })
    }
        updateTrack=(e)=>{
            if(this.validateForm){
            e.preventDefault()
            let answer={
                merchantId:this.state.merchantId,
            merchantName:this.state.merchantName,
            productId:this.state.productId,
            productName:this.state.productName,
            productPrice:this.state.productPrice,
            productQuantity:this.state.productQuantity,
            productDescription:this.state.productDescription
            }
           axios.post("http://localhost:5000/api/projects",answer)
           .then(
               res => {
                   
                    alert('Updated successful')
                    this.props.history.push(`/dashboard`)
                   }
                   
           )
                }    
        }
       
          validateForm() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        if (!fields["merchantId"]) {
            formIsValid = false;
            errors["merchantId"] = "*Please enter Merchant Id...";
        }
    
        if (typeof fields["merchantId"] !== "undefined") {
              if ((fields["merchantId"]<0 || fields["id"]>10000) || (!(fields["id"].match(/^[0-9]*$/)) )) {
              formIsValid = false;
              errors["merchantId"] = "*Please enter valid Merchant Id...";
            }
        }
        if (!fields["merchantName"]) {
            formIsValid = false;
            errors["merchantName"] = "*Enter Merchant  Name..."; 
        }
    
        if (typeof fields["merchantName"] !== "undefined") {
            if (!fields["merchantName"].match(/^[a-zA-Z ]*$/)) {
              formIsValid = false;
              errors["merchantName"] = "*Please enter alphabet characters only...";
            }
        }
        if (!fields["productId"]) {
            formIsValid = false;
            errors["productId"] = "*Please enter Product Id...";
        }
    
        if (typeof fields["productId"] !== "undefined") {
              if ((fields["productId"]<0 || fields["id"]>10000) || (!(fields["id"].match(/^[0-9]*$/)) )) {
              formIsValid = false;
              errors["productId"] = "*Please enter valid Product Id...";
            }
        }
        if (!fields["productName"]) {
          formIsValid = false;
          errors["productName"] = "*Enter product Name...";
        }
  
        if (typeof fields["productName"] !== "undefined") {
          if (!fields["productName"].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            errors["productName"] = "*Please enter alphabet characters only...";
          }
        }
        if (!fields["productPrice"]) {
            formIsValid = false;
            errors["productPrice"] = "*Please enter Product Price...";
        }
    
        if (typeof fields["productPrice"] !== "undefined") {
              if ((fields["productPrice"]<0 || fields["id"]>10000) || (!(fields["id"].match(/^[0-9]*$/)) )) {
              formIsValid = false;
              errors["productPrice"] = "*Please enter valid Product Price...";
            }
        }
        if (!fields["productQuantity"]) {
            formIsValid = false;
            errors["productQuantity"] = "*Please enter Product Quantity...";
        }
    
        if (typeof fields["productQuantity"] !== "undefined") {
              if ((fields["productQuantity"]<0 || fields["id"]>10000) || (!(fields["id"].match(/^[0-9]*$/)) )) {
              formIsValid = false;
              errors["productQuantity"] = "*Please enter valid Product Quantity...";
            }
        }
        if (!fields["productDescription"]) {
            formIsValid = false;
            errors["productDescription"] = "*Enter product Description...";
          }
    
          if (typeof fields["productDescription"] !== "undefined") {
            if (!fields["productDescription"].match(/^[a-zA-Z ]*$/)) {
              formIsValid = false;
              errors["productDescription"] = "*Please enter alphabet characters only...";
            }
          }
       
        this.setState({
          errors: errors
        });
    return formIsValid;
    } 
    
    render() {
                return( 
            <div>   
            <center>
                <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-6 mx-auto">
                    <div className="card card0 border-0">
                        <div className="row d-flex">
                            <div className="col-lg-6">
                                <div className="card1 pb-5">
                                    <div></div>
                                    <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                                         <img src="https://i.pinimg.com/originals/e5/07/d7/e507d704d4b6fdcb17116762fcd99acd.gif" className="image" width="400" height="500"></img> 
                                        </div> 
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card2 card border-0  bg-info px-4 py-5">
                                    <h5 className="  text-dark"> ADD PRODUCT</h5>
                                    <p className="text-danger">Please Provide product details here!!!</p>
                                    <label className="mb-1">
                                        <h5 className="mb-0 text-sm text-light">Merchant ID</h5>
                                    </label>
                                    <input className="mb-4"
                                     type="text"
                                     value={this.state.merchantId} 
                                     name="merchantId" 
                                     pattern="[0-9]+"
                                     placeholder="Enter merchantId"
                                     onChange={this.changemerchantIdHandler.bind(this)}
                                     required/>
                                   
                                 
                                    <label className="mb-1">
                                        <h5 className="mb-0 text-sm text-light">Merchant Name</h5>
                                    </label><input className="mb-4" type="text" value={this.state.merchantName} name="merchantName" placeholder="Enter merchantName" onChange={this.changemerchantNameHandler.bind(this)}></input>
                                    <label className="mb-1">

                                        <h5 className="mb-0 text-sm text-light">Product ID</h5>
                                    </label><input className="mb-4" type="text" value={this.state.productId} name="productId" placeholder="Enter productId" onChange={this.changeproductIdHandler.bind(this)}></input>

                                    
                                   <label className="mb-1">
                                        <h5 className="mb-0 text-sm text-light">Product Name</h5>
                                    </label><input className="mb-4" type="text" value={this.state.productName} name="productName" placeholder="Enter productName" onChange={this.changeproductNameHandler.bind(this)}></input>
                                    <label className="mb-1">
                                        <h5 className="mb-0 text-sm text-light">Product Price</h5>
                                    </label><input className="mb-4" type="text" value={this.state.productPrice} name="productPrice" placeholder="Enter productPrice" onChange={this.changeproductPriceHandler.bind(this)}></input>
                                    <label className="mb-1">
                                        <h5 className="mb-0 text-sm text-light">Product Quantity</h5>
                                    </label><input className="mb-4" type="text" value={this.state.productQuantity} name="productQuantity" placeholder="Enter product Quantity" onChange={this.changeproductQuantityHandler.bind(this)}></input>
                                  <label className="mb-1">
                                        <h5 className="mb-0 text-sm text-light">Product Description</h5>
                                    </label><input className="mb-4" type="text" value={this.state.productDescription} name="productDescription" placeholder="Enter product Description" onChange={this.changeproductDescriptionHandler.bind(this)}></input>
                                    
                                   
                                   
                                    <div className="row mb-6 px-3"> <a href="/main"><button href="" type="submit" onClick={this.updateTrack} className="btn btn-blue  bg-warning text-center">Add product</button> </a></div>

                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </center>
            </div > )
    }

}
export default adp;