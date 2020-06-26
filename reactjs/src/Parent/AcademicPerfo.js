import React from 'react';

function Perfo(){
return(
    <div id="whiteboxbg">
       <div class="container-fluid">
            <div class="row">
                <div class="col align-self-start">
                        <h5 class="heading">Academic Performance</h5>    
                </div>
                <div class="col align-self-center center">
                    <div class="btn-group center">
                        <button class="btn btn-success btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Select Exam
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">MID-1</a>
                            <a class="dropdown-item" href="#">MID-2</a>
                            <a class="dropdown-item" href="#">Half-Yearly</a>
                            <a class="dropdown-item" href="#">Final</a>
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
                    <h6  class="center">Percentage: 69%</h6>
                    <h6  class="center">Average Marks: 34/100</h6>
                    <h6  class="center">Total Marks: 365/600</h6>
                    <br></br>
                    <h6  class="center">Remarks: Average, need to improve a lot</h6>
                </div>
            </div>
       </div>
    </div>
)
}
export default Perfo;