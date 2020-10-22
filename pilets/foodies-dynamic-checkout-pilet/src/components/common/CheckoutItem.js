import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import {Button} from 'react-bootstrap';
import Icofont from 'react-icofont';
import {addCheckOutItems} from '../Checkout';


class CheckoutItem extends Component {
 constructor(props) {
    super(props);
    this.state = {
      itemName: this.props.itemName || '',
      price: this.props.price || 0,
      priceUnit: this.props.priceUnit || '$',
      id: this.props.id || null,
      quantity: this.props.qty || 1,
      show: this.props.show || true,
      max:this.props.maxValue || 5,
      min:this.props.minValue || 0,
      total: this.props.total || 0,
    };
    console.log(this.props);
    addCheckOutItems(this.props,null);
    //console.log(JSON.stringify(checoutitems));
  }

  
  IncrementItem = () => {
    console.log('i: '+JSON.stringify(this.props));
    if(this.state.quantity >= this.state.max) {

    }else {
      this.state.total = this.state.total + this.props.price;
        this.setState({
            quantity: this.state.quantity + 1, total: this.state.total
        });
      addCheckOutItems(this.props,true);
    	this.props.getValue({id:this.props.id,quantity: (this.state.quantity + 1 ),itemName:this.props.itemName,price: this.props.price,priceUnit: this.props.priceUnit,total: (this.state.total)});
    }
    console.log('i: '+JSON.stringify(this.props));
  }
  DecreaseItem = () => {
    console.log('d: '+JSON.stringify(this.props));
    this.state.total = this.state.total - this.props.price;
    if(this.state.quantity <= (this.state.min +1)) {

    }else {
        this.setState({ quantity: this.state.quantity - 1, total: this.state.total});
      addCheckOutItems(this.props,false);
    	this.props.getValue({id:this.props.id,quantity: (this.state.quantity - 1 ),itemName:this.props.itemName,price: this.props.price,priceUnit: this.props.priceUnit,total: (this.state.total) });
    }
    console.log('d: '+JSON.stringify(this.props));
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }

  getTotal = () => {

  }

  render() {

    return (
    	<div className="gold-members p-2 border-bottom">
           <p className="text-gray mb-0 float-right ml-2">{this.props.priceUnit}{this.props.price * this.state.quantity}</p>
           <span className="count-number float-right">
               <Button variant="outline-secondary" onClick={this.DecreaseItem} className="btn-sm left dec"> <Icofont icon="minus" /> </Button>
               <input className="count-number-input" type="text" value={this.state.quantity} readOnly/>
               <Button variant="outline-secondary" onClick={this.IncrementItem} className="btn-sm right inc"> <Icofont icon="icofont-plus" /> </Button>
           </span>
           <div className="media">
              <div className="mr-2"><Icofont icon="ui-press" className="text-danger food-item" /></div>
              <div className="media-body">
                 <p className="mt-1 mb-0 text-black">{this.props.itemName}</p>
              </div>
           </div>
        </div>
    );
  }
}

CheckoutItem.propTypes = {
  itemName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  priceUnit: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  qty: PropTypes.number.isRequired,
  show: PropTypes.bool.isRequired,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  getValue: PropTypes.func.isRequired,
  checoutitems: PropTypes.array,
};
CheckoutItem.defaultProps = {
  show: true,
  priceUnit:'$'
}



export default CheckoutItem;