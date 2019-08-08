import React from 'react';
import Modal from 'react-responsive-modal';
export default class FormModal extends React.Component {
  state = {
    open: false,
     message:"",
  };
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };

   handleSubmit=(e)=> {
  e.preventDefault();
  alert(this.props.id);

 }
 

handleChange=(e)=> {
this.setState({
  message:e.target.value 
})
}
 
  render() {
    const { open } = this.state;
    return (
      <div>
      <div 
      onClick={this.onOpenModal}
      key={this.props.id}
      className = "rounded  pa1 tc  mb5 pointer" 
      style={{margin:'4px', width:300, height:150,backgroundColor:'#9e1061',color:'white' }}>
        <p className='tc'>{this.props.message}</p>
      </div>
        <Modal open={open} onClose={this.onCloseModal} center  style={{background: "#FFFF00"}}>
        <div className="container" role="document">
        <div className="modal-content">
          <div style={{background: "#1c2260",color:"white"}}  className="modal-header text-center"  >
            <h6 className="modal-title w-100 font-weight-bold">Reply</h6> 
          </div>
          <div className="modal-body mx-3">
            <div className="md-form mb-4">
              <i className="fas fa-envelope prefix grey-text"></i>
              <textarea onChange={this.handleChange} rows="7" className="form-control" value={this.state.message}/>
              <label data-error="wrong" data-success="right" htmlFor="form2">Message</label>
            </div>

          </div>
          <div className="modal-footer d-flex justify-content-center" >
            <button style={{background: "#1c2260",color:"white"}}   onClick={this.handleSubmit} className="btn form-control">Send <i className="fas fa-paper-plane-o ml-1"></i></button>
          </div>
          </div>
          </div>
        </Modal>
      </div>
    );
  }
}
 
 
const customStyles = {
  content : {
    width:"100%"
  
  }
};












