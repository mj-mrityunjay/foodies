import React from 'react';
import {Link} from 'react-router-dom';
import {Row,Col,Container} from 'react-bootstrap';
import Icofont from 'react-icofont';
import CartDropdownItem from './cart/CartDropdownItem';

class TrackOrder extends React.Component {

	render() {
    	return (
    		<section className="section bg-white osahan-track-order-page position-relative">
	         <iframe title="Address" className="position-absolute" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.350541796823!2d80.20113261413437!3d12.885166620256934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525bee111f5207%3A0x734e6e3a3318f41e!2s28%2C%20Bollineni%20Hillside%20Rd%2C%20Nookampalayam%2C%20Arasankalani%2C%20Sithalapakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600126!5e0!3m2!1sen!2sin!4v1603810157085!5m2!1sen!2sin" width="100%" height="676" frameBorder="0" style={{border:0}} allowFullScreen=""></iframe>
	         <Container className="pt-5 pb-5">
	            <Row className="d-flex align-items-center">
	               <Col md={6} className="text-center pb-4">
	                  <div className="osahan-point mx-auto"></div>
	               </Col>
	               <Col md={6}>
	                  <div className="bg-white p-4 shadow-lg mb-2">
	                     <div className="mb-2"><small>Order #25102589748<Link className="float-right font-weight-bold" to="#"><Icofont icon="headphone-alt"/> HELP</Link></small></div>
	                     <h6 className="mb-1 mt-1">
	                     	<Link to="/detail" className="text-black">Spice Hut Restaurant
	                        </Link>
	                     </h6>
	                     <p className="text-gray mb-0"><Icofont icon="clock-time"/> 04:19 PM | 8 Items | $314</p>
	                  </div>
	                  <div className="bg-white p-4 shadow-lg">
	                     <div className="osahan-track-order-detail po">
	                        <h5 className="mt-0 mb-3">Order Details</h5>
	                        <Row>
	                           <Col md={5}>
	                              <small>FROM</small>
	                              <h6 className="mb-1 mt-1"><Link to="/detail" className="text-black"><Icofont icon="food-cart"/> Spice Hut Restaurant
	                                 </Link>
	                              </h6>
	                              <p className="text-gray mb-5">5/15, Block-20, Anna Nagar, Chennai, Tamil Nadu, 600004, India</p>
	                              <small>DELIVER TO</small>
	                              <h6 className="mb-1 mt-1"><span className="text-black"><Icofont icon="map-pins"/> Other
	                                 </span>
	                              </h6>
	                              <p className="text-gray mb-0">101/208, BHS, Nookampalayam, Sithalapakkam, Chennai, Tamil Nadu 600131, India
	                              </p>
	                           </Col>
	                           <Col md={7}>
	                                <div className="mb-2"><small><Icofont icon="list"/> 4 ITEMS</small></div>

				                    <CartDropdownItem 
				                     	icoIcon='ui-press'
				                     	iconClass='text-danger food-item'
				                     	title='Chicken Tikka Sub 12" (30 cm) x 1'
				                     	price='$314'
				                    />
				                    <CartDropdownItem 
				                     	icoIcon='ui-press'
				                     	iconClass='text-danger food-item'
				                     	title='Corn &amp; Peas Salad x 1'
				                     	price='$209'
				                    />
				                    <CartDropdownItem 
				                     	icoIcon='ui-press'
				                     	iconClass='text-danger food-item'
				                     	title='Veg Seekh Sub 6" (15 cm) x 1'
				                     	price='$133'
				                    />
				                    <CartDropdownItem 
				                     	icoIcon='ui-press'
				                     	iconClass='text-danger food-item'
				                     	title='Chicken Tikka Sub 12" (30 cm) x 1'
				                     	price='$314'
				                    />
				                  <hr />
	                              <p className="mb-0 font-weight-bold text-black">TOTAL BILL  <span className="float-right text-secondary">$209</span></p>
	                              <p className="mb-0 text-info"><small>Paid via Credit/Debit card
	                                 <span className="float-right text-danger">$620 OFF</span></small>
	                              </p>
	                           </Col>
	                        </Row>
	                     </div>
	                  </div>
	                  <div className="bg-white p-4 shadow-lg mt-2">
	                     <Row className="text-center">
	                        <Col>
	                        	<Icofont icon="tasks" className="icofont-3x text-info"/>
	                           <p className="mt-1 font-weight-bold text-dark mb-0">Order Received</p>
	                           <small className="text-info mb-0">NOW</small>
	                        </Col>
	                        <Col>
	                        	<Icofont icon="check-circled" className="icofont-3x text-success"/>
	                           <p className="mt-1 font-weight-bold text-dark mb-0">Order Confirmed</p>
	                           <small className="text-success mb-0">NEXT</small>
	                        </Col>
	                        <Col>
	                        	<Icofont icon="delivery-time" className="icofont-3x text-primary"/>
	                           <p className="mt-1 font-weight-bold text-dark mb-0">Order Picked Up</p>
	                           <small className="text-primary mb-0">LATER (ET : 30min)</small>
	                        </Col>
	                     </Row>
	                  </div>
	               </Col>
	            </Row>
	         </Container>
	      </section>
    	);
    }
}


export default TrackOrder;