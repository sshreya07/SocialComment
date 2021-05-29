import React, { Fragment } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '../images/github-octocat.png';
import AddIcon from '@material-ui/icons/Add';
import {Button,Badge, InputBase } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';

const Navbar = () => {
    return (
        <Fragment>
            <div className="col-sm-11">
                <nav className="navbar navbar-dark bg-dark topDiv">
                    <div>
                        <div><h5>Dashboard</h5></div>
                        <div>Sunday, <span style={{color:'#3f51b5'}}>30<superscript>th</superscript> May, 2021</span></div>
                    </div>                    
                    <div>
                    <div style={{position:'relative',bottom:'10px',right:'-9rem'}} >
                    <Badge variant="dot" color="primary"><NotificationsIcon color="white" /></Badge>&ensp;&ensp;&ensp;&ensp; John Doe &ensp;&ensp;&ensp; <img src={Avatar} alt="proPic" width="30px" height="30px" style={{borderRadius:'50%'}} /> <ExpandMoreIcon color="white" fontSize="small" />
                    </div>
                    <div  style={{position:'relative',right:'20px'}} >
                    <Button variant="contained" color="primary" size="small" style={{padding:'8px 20px'}}><AddIcon/> Add</Button>&ensp;&ensp;&ensp;&ensp;<SearchOutlined size="small"/>&ensp;<InputBase placeholder="Search for Application Here" style={{color:'white', width:"15rem"}}></InputBase>
                    </div>
                    </div>
                </nav>
            </div>
        </Fragment>
    )
}

export default Navbar
