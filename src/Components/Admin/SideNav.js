import React, { Component } from 'react';
import FaAlignCenter from 'react-icons/lib/fa/align-center';
import FaAlignLeft from 'react-icons/lib/fa/align-left';
import { Link } from 'react-router-dom';
export class SideNav extends Component {
  constructor(props) {
    super(props);

    this.state={
      toggle:false
    }
  }

  toggleWrapper=()=> {
    this.setState({
      toggle:!this.state.toggle
    })
    
  }


  render() {
    const toggler = this.state.toggle ? 'toggled' :'';
    const icon = this.state.toggle ? (<FaAlignCenter />) :(<FaAlignLeft />);

    return (
      <div className={`d-flex ${toggler}`} id="wrapper" >
      <div className="bg-side-nav border-right" id="sidebar-wrapper" style={{backgroundColor:"#1c2260"}}>
          <div className="sidebar-heading">
            <img alt=""   src='/images/helloWorld.jpg' heigth='50' width="50" style={{borderRadius:"100%"}}/>
          </div>

      <div className="list-group list-group-flush" >
        <Link to='/admin/dashboard' className="list-group-item list-group-item-action bg-side-item">Dashboard</Link>
        <Link to="/admin/products" className="list-group-item list-group-item-action bg-side-item">Products</Link>
        <Link to="/admin/add" className="list-group-item list-group-item-action bg-side-item">Add to product</Link>
        <Link to="/admin/medias" className="list-group-item list-group-item-action bg-side-item">Gallary</Link>
        <Link to="/admin/settings" className="list-group-item list-group-item-action bg-side-item">Settings</Link>
      </div>
      </div>

      <div id="page-content-wrapper " className=''>
      <button 
      className="pointer  nav-togle" 
      id="menu-toggle" 
      onClick={this.toggleWrapper}
      style={{ backgroundColor:"#1c2260",color:'white'}}>
      {icon}
      </button>
      </div>

      </div>
   
     
    );
  }
}





