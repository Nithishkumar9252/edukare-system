import React from 'react';

function Overall() {

    return(
        <div>
       
    <div id="wrapper">
        <nav class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
            <div class="container-fluid d-flex flex-column p-0">
                <a class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                    <div class="sidebar-brand-icon rotate-n-15"><i class="fas fa-laugh-wink"></i></div>
                    <div class="sidebar-brand-text mx-3"><span>Brand</span></div>
                </a>
                <hr class="sidebar-divider my-0"/>
                <ul class="nav navbar-nav text-light" id="accordionSidebar">
                    <li class="nav-item" role="presentation"><a class="nav-link active" href="Overall report.html"><i class="fas fa-check-circle"></i><span>Overall Report</span></a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="StudentDetails.html"><i class="fas fa-graduation-cap"></i><span>Students/class</span></a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="Mentor.html"><i class="fas fa-chalkboard-teacher"></i><span>Mentors</span></a></li>
                </ul>
                <div class="text-center d-none d-md-inline"><button class="btn rounded-circle border-0" id="sidebarToggle" type="button"></button></div>
            </div>
        </nav>
        <div class="d-flex flex-column" id="content-wrapper">
            <div id="content">
                <nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
                    <div class="container-fluid"><button class="btn btn-link d-md-none rounded-circle mr-3" id="sidebarToggleTop" type="button"><i class="fas fa-bars"></i></button>
                        
                        <ul class="nav navbar-nav flex-nowrap ml-auto">
                            <li class="nav-item dropdown d-sm-none no-arrow"><a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"><i class="fas fa-search"></i></a>
                                <div class="dropdown-menu dropdown-menu-right p-3 animated--grow-in" role="menu" aria-labelledby="searchDropdown">
                                    <form class="form-inline mr-auto navbar-search w-100">
                                        <div class="input-group"><input class="bg-light form-control border-0 small" type="text" placeholder="Search for ..."/>
                                            <div class="input-group-append"><button class="btn btn-primary py-0" type="button"><i class="fas fa-search"></i></button></div>
                                        </div>
                                    </form>
                                </div>
                            </li>
                            <li class="nav-item dropdown no-arrow mx-1" role="presentation">
                                <div class="nav-item dropdown no-arrow"><a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"><span class="badge badge-danger badge-counter">3+</span><i class="fas fa-bell fa-fw"></i></a>
                                    <div class="dropdown-menu dropdown-menu-right dropdown-list dropdown-menu-right animated--grow-in"
                                        role="menu">
                                        <h6 class="dropdown-header">Notifications</h6>
                                        <a class="d-flex align-items-center dropdown-item" href="#">
                                            <div class="mr-3">
                                                <div class="bg-primary icon-circle"><i class="fas fa-file-alt text-white"></i></div>
                                            </div>
                                            <div><span class="small text-gray-500">December 12, 2019</span>
                                                <p>A new monthly report is ready to download!</p>
                                            </div>
                                        </a>
                                        <a class="d-flex align-items-center dropdown-item" href="#">
                                            <div class="mr-3">
                                                <div class="bg-success icon-circle"><i class="fas fa-donate text-white"></i></div>
                                            </div>
                                            <div><span class="small text-gray-500">December 7, 2019</span>
                                                <p>$290.29 has been deposited into your account!</p>
                                            </div>
                                        </a>
                                        <a class="d-flex align-items-center dropdown-item" href="#">
                                            <div class="mr-3">
                                                <div class="bg-warning icon-circle"><i class="fas fa-exclamation-triangle text-white"></i></div>
                                            </div>
                                            <div><span class="small text-gray-500">December 2, 2019</span>
                                                <p>Spending Alert: We've noticed unusually high spending for your account.</p>
                                            </div>
                                        </a><a class="text-center dropdown-item small text-gray-500" href="#">Show All Alerts</a></div>
                                </div>
                            </li>
                            <li class="nav-item dropdown no-arrow mx-1" role="presentation">
                                <div class="nav-item dropdown no-arrow"><a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"><i class="fas fa-envelope fa-fw"></i><span class="badge badge-danger badge-counter">7</span></a>
                                    <div class="dropdown-menu dropdown-menu-right dropdown-list dropdown-menu-right animated--grow-in"
                                        role="menu">
                                        <h6 class="dropdown-header">Messages</h6>
                                        <a class="d-flex align-items-center dropdown-item" href="#">
                                            <div class="dropdown-list-image mr-3"><img class="rounded-circle" src="assets/img/avatars/avatar4.jpeg"/>
                                                <div class="bg-success status-indicator"></div>
                                            </div>
                                            <div class="font-weight-bold">
                                                <div class="text-truncate"><span>Hi there! I am wondering if you can help me with a problem I've been having.</span></div>
                                                <p class="small text-gray-500 mb-0">Emily Fowler - 58m</p>
                                            </div>
                                        </a>
                                        <a class="d-flex align-items-center dropdown-item" href="#">
                                            <div class="dropdown-list-image mr-3"><img class="rounded-circle" src="assets/img/avatars/avatar2.jpeg"/>
                                                <div class="status-indicator"></div>
                                            </div>
                                            <div class="font-weight-bold">
                                                <div class="text-truncate"><span>I have the photos that you ordered last month!</span></div>
                                                <p class="small text-gray-500 mb-0">Jae Chun - 1d</p>
                                            </div>
                                        </a>
                                        <a class="d-flex align-items-center dropdown-item" href="#">
                                            <div class="dropdown-list-image mr-3"><img class="rounded-circle" src="assets/img/avatars/avatar3.jpeg"/>
                                                <div class="bg-warning status-indicator"></div>
                                            </div>
                                            <div class="font-weight-bold">
                                                <div class="text-truncate"><span>Last month's report looks great, I am very happy with the progress so far, keep up the good work!</span></div>
                                                <p class="small text-gray-500 mb-0">Morgan Alvarez - 2d</p>
                                            </div>
                                        </a>
                                        <a class="d-flex align-items-center dropdown-item" href="#">
                                            <div class="dropdown-list-image mr-3"><img class="rounded-circle" src="assets/img/avatars/avatar5.jpeg"/>
                                                <div class="bg-success status-indicator"></div>
                                            </div>
                                            <div class="font-weight-bold">
                                                <div class="text-truncate"><span>Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</span></div>
                                                <p class="small text-gray-500 mb-0">Chicken the Dog · 2w</p>
                                            </div>
                                        </a><a class="text-center dropdown-item small text-gray-500" href="#">Show All Alerts</a></div>
                                </div>
                                <div class="shadow dropdown-list dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown"></div>
                            </li>
                            <div class="d-none d-sm-block topbar-divider"></div>
                            <li class="nav-item dropdown no-arrow" role="presentation">
                                <div class="nav-item dropdown no-arrow"><a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"><span class="d-none d-lg-inline mr-2 text-gray-600 small">Student Name</span><img class="border rounded-circle img-profile" src="assets/img/avatars/avatar1.jpeg"/></a>
                                    <div class="dropdown-menu shadow dropdown-menu-right animated--grow-in" role="menu"><a class="dropdown-item" role="presentation" href="#"><i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Profile</a><a class="dropdown-item" role="presentation" href="#"><i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Settings</a>
                                        <a class="dropdown-item" role="presentation" href="#"><i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Activity log</a>
                                            <div class="dropdown-divider"></div><a class="dropdown-item" role="presentation" href="#"><i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Logout</a></div>
                                    </div>
                    </li>
                </ul>
        </div>
    </nav>


    <div class="container-fluid">
        <div class="d-sm-flex justify-content-between align-items-center mb-4">
            <h3 class="text-dark mb-0">Overall School Report</h3>
            <button class="btn btn-primary btn-sm d-none d-sm-inline-block" onclick="downloadPdf()" href="#"><i class="fas fa-download fa-sm text-white-50"></i>&nbsp;Generate Report</button>
        </div>
        <div id="whiteboxbg">
           <div class="container-fluid">
                <div class="row">
                    <div class="col align-self-start">
                            <h5 class="heading"> Overall Schoool Academic Performance</h5>    
                    </div>
                    <div class="col align-self-center" style={{textalign: "center"}}>
                        <div class="btn-group" style={{textalign: "center"}}>
                            <button class="btn btn-success btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Select Exam
                            </button>
                            <div class="dropdown-menu" style={{textalign: "center"}}>
                                <a class="dropdown-item" href="#">MID-1</a>
                                <a class="dropdown-item" href="#">MID-2</a>
                                <a class="dropdown-item" href="#">Half-Yearly</a>
                                <a class="dropdown-item" href="#">Final</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Overall Performance</a>
                            </div>
                            <div class="btn-group" style={{alignitems: "center", marginleft: "10%"}}>
                                <button class="btn btn-info btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  Select Year
                                </button>
                                <div class="dropdown-menu" style={{textalign: "center"}}>
                                    <a class="dropdown-item" href="#">2016</a>
                                    <a class="dropdown-item" href="#">2017</a>
                                    <a class="dropdown-item" href="#">2018</a>
                                    <a class="dropdown-item" href="#">2019</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Current Year</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col align-self-start">
                        <div class="SM">
                            <canvas id="subjm"></canvas>
                        </div>
                    </div>
                    <div class="col align-self-end">
                        <h6 style={{textalign: "center"}}>Overall School Percentage: 69%</h6>
                        <h6 style={{textalign: "center"}}>Pass Percentage: 69%</h6>
                        <h6 style={{textalign: "center"}}>Fail Percentage: 69%</h6>
                    </div>
                </div>
           </div>
        </div>    
        <br></br>
        <div id="whiteboxbg">
            <div class="container-fluid">
                <div class="row">
                    <div class="col">
                        <h5 class="heading">Overall School Aptitude</h5>
                        <div class="card-body">
                            <h4 class="small font-weight-bold">Diagramatic reasoning<span class="float-right">70%</span></h4>
                            <div class="progress mb-4">
                                <div class="progress-bar bg-danger" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: "70%"}}><span class="sr-only">20%</span></div>
                            </div>
                            <h4 class="small font-weight-bold">Numerical reasoning<span class="float-right">40%</span></h4>
                            <div class="progress mb-4">
                                <div class="progress-bar bg-warning" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: "40%"}}><span class="sr-only">40%</span></div>
                            </div>
                            <h4 class="small font-weight-bold">Verbal reasoning<span class="float-right">60%</span></h4>
                            <div class="progress mb-4">
                                <div class="progress-bar bg-primary" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"  style={{width: "60%"}}><span class="sr-only">60%</span></div>
                            </div>
                            <h4 class="small font-weight-bold">Logical Reasoning<span class="float-right">80%</span></h4>
                            <div class="progress mb-4">
                                <div class="progress-bar bg-info" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"  style={{width: "80%"}}><span class="sr-only">80%</span></div>
                            </div>
                            <h4 class="small font-weight-bold">Overall progress<span class="float-right">68%</span></h4>
                            <div class="progress mb-4">
                                <div class="progress-bar bg-success" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"  style={{width: "68%"}}><span class="sr-only">100%</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="col align-self-center" style={{textalign: "center"}}>

                        <div class="btn-group" style={{alignitems: "center", marginbottom: "10%"}}>
                            <button class="btn btn-info btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Select Year
                            </button>
                            <div class="dropdown-menu" style={{textalign: "center"}}>
                                <a class="dropdown-item" href="#">2016</a>
                                <a class="dropdown-item" href="#">2017</a>
                                <a class="dropdown-item" href="#">2018</a>
                                <a class="dropdown-item" href="#">2019</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Current Year</a>
                            </div>
                        </div>

                        <canvas id="Apti"></canvas>
                    </div>
                </div>
            </div>
        </div>
        <br></br>
        <div id="whiteboxbg">
            <div class="container-fluid">
                <div class="row">
                    <div class="col align-self-start">
                        <h5 class="heading">Mentor Average Rating</h5>
                    </div>
                    <div class="col align-self-end" style={{textalign: "center"}}>

                        <div class="btn-group" style={{alignitems: "center", marginbottom: "5%"}}>
                            <button class="btn btn-info btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Select Year
                            </button>
                            <div class="dropdown-menu" style={{textalign: "center"}}>
                                <a class="dropdown-item" href="#">2016</a>
                                <a class="dropdown-item" href="#">2017</a>
                                <a class="dropdown-item" href="#">2018</a>
                                <a class="dropdown-item" href="#">2019</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Current Year</a>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="row">
                    
                    <div class="col align-self-center">
                        <h6 style={{textalign: "center"}}>Parent Average Rating: 79%</h6>
                        <br></br>
                        <h6 style={{textalign: "center"}}>Student Average rating: 8.3/10</h6>
                        <br></br>
                        <h6 style={{textalign: "center"}}>Overall Mentor rating: 7.0/10</h6>
                        <br></br>
                    </div>
                    <div class="col align-self-center">
                        <h6 class='heading' style={{textalign: "center"}}>Mentor's Average Rating Graph</h6>
                        <canvas id="perpfo"></canvas>
                    </div>
                </div>
            </div>
        </div>
        <br/>
        <br/>
        <div id="whiteboxbg">
            <div class="container-fluid">
                <div class="row">
                    <div class="col align-self-start">
                        <h5 class="heading">Student Activity</h5>
                    </div>
                    <div class="col align-self-end" style={{textalign: "center"}}>
                        
                        <div class="btn-group" style={{alignitems: "center", marginbottom: "5%"}}>
                            <button class="btn btn-info btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Select Year
                            </button>
                            <div class="dropdown-menu" style={{textalign: "center"}}>
                                <a class="dropdown-item" href="#">2016</a>
                                <a class="dropdown-item" href="#">2017</a>
                                <a class="dropdown-item" href="#">2018</a>
                                <a class="dropdown-item" href="#">2019</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Current Year</a>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="row">
                    <div class="col align-self-center">
                        <h6 style={{textalign: "center"}}>Student Average Attendance: 79%</h6>
                        <br></br>
                        <h6 style={{textalign: "center"}}>Student Average monthly activity percentage: 32%</h6>
                        <br></br>
                        <h6 style={{textalign: "center"}}>Growth rate: 5.4%</h6>
                        <br></br>
                    </div>
                    <div class="col">
                        <canvas id="testO"></canvas>
                    </div>
                </div>
            </div>
        </div> 
        <br/><br/>
    </div> 

    






</div></div></div>
    <div><a class="border rounded d-inline scroll-to-top" href="#page-top"><i class="fas fa-angle-up"></i></a></div>
    
</div>
    )
    
}


export default Overall;