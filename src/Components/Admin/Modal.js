import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 


const Modal = (form,title,message)=> {
 return confirmAlert({
    title: title,
    message: message,
    buttons: [
      {
        label: 'Yes',
        onClick: () => (form)
      },
      {
        label: 'No',
        onClick: () =>false
      }
    ],
   
  });

}

module.exports=Modal;

 
