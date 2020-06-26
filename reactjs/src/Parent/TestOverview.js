import React from 'react';

function Test(){
    return(
        <div id="whiteboxbg">
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <h5 class="heading">Test Overview</h5>
                    <div class="btn-group">
                        <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown">
                          Select Test<span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu scrollable-menu" role="menu">
                          <li><a href="#">Test Name - Topic</a></li>
                          <li><a href="#">Test Name - Topic</a></li>
                          <li><a href="#">Test Name - Topic</a></li>
                          <li><a href="#">Test Name - Topic</a></li>
                          <li><a href="#">Test Name - Topic</a></li>
                          <li><a href="#">Test Name - Topic</a></li>
                          <li><a href="#">Test Name - Topic</a></li>
                          <li><a href="#">Test Name - Topic</a></li>
                          <li><a href="#">Test Name - Topic</a></li>
                          <li><a href="#">Test Name - Topic</a></li>
                          <li><a href="#">Test Name - Topic</a></li>
                          <li><a href="#">Test Name - Topic</a></li>
                          <li><a href="#">Test Name - Topic</a></li>
                          <li><a href="#">Test Name - Topic</a></li>
                        </ul>
                      </div>
                </div>
                <div class="col align-self-center">
                    <p class="TOT center"><h6>Percentage: 69%</h6><br></br>
                        <h6>Average Marks: 34/100</h6><br></br>
                        <h6>Total Marks: 365/600</h6></p>
                </div>
                <div class="col-8">
                    <canvas id="testO"></canvas>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Test;