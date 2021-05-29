import React, { Fragment } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomeIcon from '@material-ui/icons/Home';
import AssessmentIcon from '@material-ui/icons/Assessment';
import FolderIcon from '@material-ui/icons/Folder';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import CasinoIcon from '@material-ui/icons/Casino';

const LeftNav = () => {
    return (
        <Fragment>
            <div className="col-sm-1">
            <nav className="navbar navbar-dark bg-dark list">
                    <div>
                        <div className="center" style={{padding:'1rem 0'}}><CasinoIcon/></div>
                        <div className="leftNavItems" color="rgb(201, 201, 201)">
                            <button className="btn btn-block btn-dark btn-md active" style={{borderRight:'5px solid rgb(0, 204, 255)',color:'rgb(0, 204, 255)'}}><HomeIcon /></button>
                            <button className="btn btn-block btn-dark btn-md"><AssessmentIcon/></button>
                            <button className="btn btn-block btn-dark btn-md"><FolderIcon/></button>
                            <button className="btn btn-block btn-dark btn-md"><EventAvailableIcon/></button>
                            <button className="btn btn-block btn-dark btn-md"><GroupAddIcon/></button>
                            <button className="btn btn-block btn-dark btn-md"><ExitToAppIcon/></button>
                        </div>
                    </div>
                   
                    <div style={{paddingBottom:'2rem'}}>
                        <button className="btn btn-block btn-dark btn-md"><SettingsIcon/></button>
                    </div>
                </nav>
            </div>
        </Fragment>
    )
}

export default LeftNav
