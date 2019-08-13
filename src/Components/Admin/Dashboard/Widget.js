import React from "react";

const Widget = (props) => {
    const {products,feedbacks,contacts}=props
	return (
		<div className=" mt5">
		<div className="row">
            <div className=" col-sm-4">
                <div className="card mb-4 bg-primary">
                    <div className="card-body">
                        <div className="media d-flex align-items-center">
                            <div className="mr-4 rounded-circle bg-white  sr-icon-box text-primary">
                                <i className="vl_download"></i>
                            </div>
                            <div className="media-body text-white">
                                <h4 className="text-uppercase mb-0 weight500">{products.length?products.length:""}</h4>
                                <span>Products</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-sm-4">
                <div className="card mb-4 bg-danger">
                    <div className="card-body">
                        <div className="media d-flex align-items-center">
                            <div className="mr-4 rounded-circle bg-white sr-icon-box text-danger">
                                <i className="vl_shopping-bag2"></i>
                            </div>
                            <div className="media-body text-white">
                                <h4 className="text-uppercase mb-0 weight500">{feedbacks.length}</h4>
                                <span>Feedbacks</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" col-sm-4">
                <div className="card mb-4 bg-success">
                    <div className="card-body">
                        <div className="media d-flex align-items-center">
                            <div className="mr-4 rounded-circle bg-white sr-icon-box text-success">
                                <i className="vl_cart-empty"></i>
                            </div>
                            <div className="media-body text-white">
                                <h4 className="text-uppercase mb-0 weight500">{contacts.length}</h4>
                                <span>Contacts</span>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
	 	</div>
	</div>	


		)
}

export default Widget;