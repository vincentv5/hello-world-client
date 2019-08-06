import React from 'react';
import ImageUploader from 'react-images-upload';
import axios from 'axios';
import { SideNav } from './SideNav';
import Spinner from '../Spinner';
import {connect} from 'react-redux';
import {removeServerError,handleUpload,getUploads} from '../Store/Action';
const base_url = "http://localhost:3001";

 class Upload extends React.Component {
 
    constructor(props) {
        super(props);
         this.state = { 
			 pictures: null, 
             uploaded:false,
             sendFile:false
			};
         
    }
    componentDidMount() {
         this.props.getUploads().then(()=> {
               this.setState({uploaded:true});
           })
    }
   
    onDrop=(picture)=> {
         this.setState({
            ...this.state,
            pictures: picture
        },()=> {
        this.setState({...this.state,sendFile:true});
        this.props.removeServerError();
        this.setState({...this.state,uploaded:false})
        this.props.handleUpload(this.state.pictures).then(()=> {
            this.props.getUploads().then(()=> {
               this.setState({...this.state,uploaded:true}); 
            })
        }) 
    })  
 }


        
    render() {
            const images = this.state.uploaded
            ?this.props.Images.path.map((val)=>(
            <div key={val._id} className = "rounded grow  pa1 center  mb5 pointer"> 
                <img width="200" height="200" src={`${base_url}/${val.path}`} alt=""/>
            </div>
            )):this.state.sendFile?(<Spinner size={30}/>):"";

         return (
            <div style={{display:"flex"}}>
                <SideNav />
                <div style={{flex:"1"}}>
                    <div className="Container main">
                        <div className="styling1 mt5">
                            <ImageUploader
                                withIcon={true}
                                buttonText='Choose images'
                                onChange={this.onDrop}
                                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                maxFileSize={5242880}
                            /> 
                     </div>
                     <div className="Container main">
                    <div className="styling2 mt5">
                        {images}
                    </div>
                </div>
                </div>
            </div>
        </div>               
    
        );
    }
}
const mapStateToProps=(state)=> {
    return {
        Images:state.uploadedFiles
    }
}

export default connect(mapStateToProps,{removeServerError,getUploads,handleUpload})(Upload)