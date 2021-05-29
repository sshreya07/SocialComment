import React, { Fragment } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CallMadeIcon from '@material-ui/icons/CallMade';
import CallReceivedIcon from '@material-ui/icons/CallReceived';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import TelegramIcon from '@material-ui/icons/Telegram';
import AppImg from '../images/UIHere.png';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ForumRoundedIcon from '@material-ui/icons/ForumRounded';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import {
    LinearProgress,
    CircularProgress
} from '@material-ui/core';

import {
    Doughnut,
    Line,
    Bar
} from 'react-chartjs-2';

const Dashboard = () => {
    
    return (
        <Fragment>
            <div className="workPlace">
                <div className="col-sm-8 largeSection">
                    <div className="largeSectionDiv" style={{height:'150px'}}>
                        <div className="col-sm-4 check largeSectionDiv1">
                            <div className="spaceBetween">
                                <div>Total Applications</div><div><MoreHorizIcon/></div>
                            </div>
                            <div className="spaceBetween">
                                <div className="flexColumn">
                                    <h4>7956</h4><p><CallMadeIcon/><span style={{color:'#3f51b5'}}>+3.69%</span></p>
                                </div>
                                <div style={{width:'60px',height:'60px',position:'relative',bottom:'15px',right:'5px'}} >
                                    <Doughnut
                                
                                data={{
                                    labels:[],
                                    datasets: [
                                            {
                                                label:'',
                                                data: [70, 30],
                                                backgroundColor:['#3f51b5','rgba(65, 65, 65, 0.73)'],
                                                borderColor:['#3f51b5','rgba(65, 65, 65, 0.73)'],
                                                borderWidth:4,
                                                smooth:true,
                                                weight:0
                                            }                 
                                        ]
                                }}

                                option={{
                                    maintainAspectratio:true,
                                    responsive: true,
                                    legend:{
                                        display:false,
                                    },
                                    animationEnabled: true
                                }}
                            />
                                </div>
                            </div>
                        </div>


                        <div className="col-sm-4 check largeSectionDiv1">
                        <div className="spaceBetween">
                                <div>Shortlisted Candidates</div><div><MoreHorizIcon/></div>
                            </div>
                            <div className="spaceBetween">
                                <div className="flexColumn">
                                    <h4>4658</h4><p><CallMadeIcon/><span style={{color:'#e544ff'}}>+3.69%</span></p>
                                </div>
                                <div style={{width:'60px',height:'60px',position:'relative',bottom:'15px',right:'5px'}} >
                                    <Doughnut
                                
                                data={{
                                    labels:[],
                                    datasets: [
                                            {
                                                label:'',
                                                data: [70, 30],
                                                backgroundColor:['#e544ff','rgba(65, 65, 65, 0.73)'],
                                                borderColor:['#e544ff','rgba(65, 65, 65, 0.73)'],
                                                borderWidth:4,
                                                smooth:true,
                                                weight:0
                                            }                 
                                        ]
                                }}

                                option={{
                                    maintainAspectratio:true,
                                    responsive: true,
                                    legend:{
                                        display:false,
                                    },
                                    animationEnabled: true
                                }}
                            />
                                </div>
                            </div>
                        </div>


                        <div className="col-sm-4 check largeSectionDiv1">
                        <div className="spaceBetween">
                                <div>Total Applications</div><div><MoreHorizIcon/></div>
                            </div>
                            <div className="spaceBetween">
                                <div className="flexColumn">
                                    <h4>1501</h4><p><CallReceivedIcon/><span style={{color:'rgb(189, 8, 8)'}}>-0.4%</span></p>
                                </div>
                                <div style={{width:'60px',height:'60px',position:'relative',bottom:'15px',right:'5px'}} >
                                    <Doughnut
                                
                                data={{
                                    labels:[],
                                    datasets: [
                                            {
                                                label:'',
                                                data: [70, 30],
                                                backgroundColor:['rgb(245, 85, 85)','rgba(65, 65, 65, 0.73)'],
                                                borderColor:['rgb(245, 85, 85)','rgba(65, 65, 65, 0.73)'],
                                                borderWidth:4,
                                                smooth:true,
                                                weight:0
                                            }                 
                                        ]
                                }}

                                option={{
                                    maintainAspectratio:true,
                                    responsive: true,
                                    legend:{
                                        display:false,
                                    },
                                    animationEnabled: true
                                }}
                            />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="largeSectionDiv" style={{height:'250px'}}>
                        <div className="col-sm-8 check" style={{padding:'7px'}}>
                            <div className="spaceBetween">
                                <div>Applications Received</div><div>This Year</div><div>This week</div><div>Today</div><div><MoreVertIcon/></div>
                            </div>
                            <Line
                                data={{
                                    labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                                    datasets: [
                                            {
                                                label:'',
                                                data: [5, 6, 3, 4, 5, 2],
                                                backgroundColor:'rgba(255,255,255,0.5)',
                                                borderColor:'rgba(255,255,255,0.5)',
                                                borderWidth:1,
                                                smooth:true
                                            },
                                            {
                                                label:'#',
                                                data: [10, 2, 5, 2, 9, 8],
                                                backgroundColor:'rgba(63, 81, 181, 0.2)',
                                                borderColor:'rgba(63, 81, 181, 0.5)',
                                                borderWidth:1,
                                                fill: 'start'
                                                
                                            }                    
                                        ]
                                }}
                                height={130}
                                width={500}

                                option={{
                                    maintainAspectratio:false,
                                    smooth: 0.4
                                }}
                            />   
                        </div>&ensp;

                        <div className="col-sm-4 check" style={{padding:'7px'}}>
                            <div>Total Applications</div>
                            <div className="UL_LIs" >
                                <ul style={{marginTop:'6px'}}>
                                    <div className="flexRow" style={{color:"rgb(0, 204, 255)"}}><li >Applications </li></div>
                                    <div className="flexRow" style={{color:"blueviolet"}}><li >Shortlisted</li></div>
                                    <div className="flexRow" style={{color:"red"}}><li >Rejected</li></div>
                                    <div className="flexRow" style={{color:"lightblue"}}><li >On Load</li></div>
                                    <div className="flexRow" style={{color:"pink"}}><li >Resumes</li></div>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="largeSectionDiv" style={{height:'300px'}}>
                        <div className="col-sm-8 check">
                            <div className="spaceBetween">
                                <div style={{position:'relative',bottom:'12px'}}>Referals and Campaign stats</div>
                                <div className="flexRow">
                                    <div style={{color:'rgb(189, 8, 8)',position:'relative',top:'8px'}}><TelegramIcon/></div>
                                    <div className="flexColumn" style={{padding:'0'}}>
                                        <p style={{color:'red',fontSize:'14px'}}>40 Campaigns sent in total</p><p style={{fontSize:'12px',position:'relative',bottom:'12px'}}>4 Campaigns sent in last month</p>    
                                    </div>    
                                </div>    
                            </div>  
                            <div className="spaceAround flexRow" style={{position:'relative',bottom:'24px'}}>
                                <div className="flexColumn center check" style={{width:'8rem',padding:'3px'}}>
                                    <p>User's Reached</p>
                                    <p style={{color:'#3f51b5'}}><CallMadeIcon/> +3.07%</p>
                                    <h5 style={{position:'relative',bottom:'12px'}}>7956</h5>
                                </div>
                                <div className="flexColumn center check" style={{width:'8rem',padding:'3px'}}>
                                    <p>Referals</p>
                                    <p style={{color:'#3f51b5'}}><CallMadeIcon/> +3.07%</p>
                                    <h5 style={{position:'relative',bottom:'12px'}}>7956</h5>
                                </div>
                                <div className="flexColumn center check"  style={{width:'8rem',padding:'3px'}}>
                                    <p>Shares</p>
                                    <p style={{color:'#3f51b5'}}><CallMadeIcon/> +3.07%</p>
                                    <h5 style={{position:'relative',bottom:'12px'}}>7956</h5>
                                </div>
                                <div className="flexColumn center check" style={{width:'8rem',padding:'3px'}}>
                                    <p>Applications</p>
                                    <p style={{color:'#3f51b5'}}><CallMadeIcon/> +3.07%</p>
                                    <h5 style={{position:'relative',bottom:'12px'}}>7956</h5>
                                </div>
                            </div>
                            <div className="center flexRow" style={{position:'relative',bottom:'12px'}}>
                                <button className="btn btn-block btn-md btn-primary">Start a New Campaign Now</button>&emsp;&emsp;
                                <button className="btn btn-block btn-md btn-danger">Pause All Running Campaigns</button>
                            </div> 
                        </div>&ensp;

                        <div className="col-sm-4 check">
                            <div className="spaceBetween" style={{padding:'7px'}}>
                                <div>Open Positions by Department</div><div><MoreHorizIcon/></div>
                            </div>
                            <div style={{width:'200px',height:'200px',position:'relative',left:'3.5rem'}}>
                            <Doughnut
                                
                                data={{
                                    labels:['Jan', 'Feb', 'Mar'],
                                    datasets: [
                                            {
                                                label:'',
                                                data: [5, 6, 3],
                                                backgroundColor:['#3f51b5','lightblue','rgb(0, 204, 255)'],
                                                borderColor:['#3f51b5','lightblue','rgb(0, 204, 255)'],
                                                borderWidth:1,
                                                smooth:true,
                                                hoverBorderWidth:8
                                            }                 
                                        ]
                                }}

                                option={{
                                    maintainAspectratio:true,
                                    responsive: true,
                                    legend:{
                                        display:false,
                                    },
                                    animationEnabled: true
                                }}
                            />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-sm-4">
                <div className="rightSectionDiv check" style={{height:'690px',width:'400px'}}>
                        <div className="center" style={{padding:'7px'}}><small><span className="center">Hello John Doe,</span>You have 5 New Applications Today !</small></div>
                        <div className="center"><img src={AppImg} style={{width:'15rem',height:'15rem'}} /></div>
                        <div style={{height:'405px',width:'400px',backgroundColor:'rgba(43, 43, 46, 0.53)',borderRadius:'1rem', borderTopLeftRadius:'3rem',borderTopRightRadius:'3rem',padding:'1.5rem 2rem 0 2rem'}}>
                            <div className="spaceBetween">
                                <div>New Applicants</div><div><NavigateNextIcon/></div>
                            </div><br/>
                            <div className="flexRow spaceBetween">
                                <div className="flexRow center"><AccountCircleOutlinedIcon/>&emsp;
                                <span className="flexColumn">
                                <p style={{position:'relative',top:'8px'}}>Rosie Joseph</p><span style={{fontSize:'10px',position:'relative',bottom:'8px'}}>Applicant &ensp;<span style={{color:'rgb(0, 204, 255)'}}>iOS member</span></span>
                                </span></div>
                                <div><ForumRoundedIcon/>&emsp;&emsp;<PhoneRoundedIcon/></div>
                            </div>
                            <div className="flexRow spaceBetween">
                                <div className="flexRow center"><AccountCircleOutlinedIcon/>&emsp;
                                <span className="flexColumn">
                                <p style={{position:'relative',top:'8px'}}>Rosie Joseph</p><span style={{fontSize:'10px',position:'relative',bottom:'8px'}}>Applicant &ensp;<span style={{color:'rgb(0, 204, 255)'}}>iOS member</span></span>
                                </span></div>
                                <div><ForumRoundedIcon/>&emsp;&emsp;<PhoneRoundedIcon/></div>
                            </div>
                            <div className="flexRow spaceBetween">
                                <div className="flexRow center"><AccountCircleOutlinedIcon/>&emsp;
                                <span className="flexColumn">
                                <p style={{position:'relative',top:'8px'}}>Rosie Joseph</p><span style={{fontSize:'10px',position:'relative',bottom:'8px'}}>Applicant &ensp;<span style={{color:'rgb(0, 204, 255)'}}>iOS member</span></span>
                                </span></div>
                                <div><ForumRoundedIcon/>&emsp;&emsp;<PhoneRoundedIcon/></div>
                            </div>
                            <div className="flexRow spaceBetween">
                                <div className="flexRow center"><AccountCircleOutlinedIcon/>&emsp;
                                <span className="flexColumn">
                                <p style={{position:'relative',top:'8px'}}>Rosie Joseph</p><span style={{fontSize:'10px',position:'relative',bottom:'8px'}}>Applicant &ensp;<span style={{color:'rgb(0, 204, 255)'}}>iOS member</span></span>
                                </span></div>
                                <div><ForumRoundedIcon/>&emsp;&emsp;<PhoneRoundedIcon/></div>
                            </div>
                            <div className="flexRow spaceBetween">
                                <div className="flexRow center"><AccountCircleOutlinedIcon/>&emsp;
                                <span className="flexColumn">
                                <p style={{position:'relative',top:'8px'}}>Rosie Joseph</p><span style={{fontSize:'10px',position:'relative',bottom:'8px'}}>Applicant &ensp;<span style={{color:'rgb(0, 204, 255)'}}>iOS member</span></span>
                                </span></div>
                                <div><ForumRoundedIcon/>&emsp;&emsp;<PhoneRoundedIcon/></div>
                            </div>
                            <div className="flexRow spaceBetween">
                                <div className="flexRow center"><AccountCircleOutlinedIcon/>&emsp;
                                <span className="flexColumn">
                                <p style={{position:'relative',top:'8px'}}>Rosie Joseph</p><span style={{fontSize:'10px',position:'relative',bottom:'8px'}}>Applicant &ensp;<span style={{color:'rgb(0, 204, 255)'}}>iOS member</span></span>
                                </span></div>
                                <div><ForumRoundedIcon/>&emsp;&emsp;<PhoneRoundedIcon/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Dashboard
