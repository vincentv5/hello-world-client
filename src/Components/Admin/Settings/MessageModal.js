import React from 'react';
const MessageModal=(props)=>{
  const message=props.view !==null?props.view:"";
 return (
  <div style={styles.mrg} className="modal fade" id="MessageModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
    aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div style={styles.header} className="modal-header text-center">
          <h6 className="modal-title w-100 font-weight-bold">Message</h6>
          <button style={styles.deleteButton} type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body mx-3">
          <p>{message}</p>

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
  },

  mrg:{
    margin:"auto"
  }
}
 export default MessageModal;

