import React from 'react';
 const ContactModal=(props)=>{
  const getResponse=props.response==="success"?(<div className="alert alert-success">reply sent</div>)
  :props.response==="failed"?(<div className="alert alert-danger">oops reply not sent</div>)
  :null;
 return (
  <div className="modal fade" id="modalSubscriptionForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
    aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div style={styles.header} className="modal-header text-center">
          <h6 className="modal-title w-100 font-weight-bold">Reply</h6>
          <button style={styles.deleteButton} type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
         {getResponse}
        <div className="modal-body mx-3">
          <div className="md-form mb-4">
            <i className="fas fa-envelope prefix grey-text"></i>
            <textarea onChange={props.handleChangeData}  rows="7"  className="form-control validate" value={props.message}/>
            <label data-error="wrong" data-success="right" htmlFor="form2">Message</label>
          </div>

        </div>
        <div className="modal-footer d-flex justify-content-center">
          <button style={styles.button}  onClick={props.handleSubmitReplyContact} className="btn form-control">Send <i className="fas fa-paper-plane-o ml-1"></i></button>
        </div>
      </div>
    </div>
  </div>
    );
  }

const styles={
  button:{
    backgroundColor:"#1c2260",
    color:"white",
  },

  header:{
       backgroundColor:"#1c2260",
        color:"white",
  },

  deleteButton:{
    color:"white",
  }
}
 export default ContactModal;

