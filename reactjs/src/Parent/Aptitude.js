import React from 'react';

function Apitude(){
    return(
        <div id="whiteboxbg">
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <h5 class="heading">Aptitude Progress</h5>
                    <div class="card-body">
                        <h4 class="small font-weight-bold">Diagramatic reasoning<span class="float-right">70%</span></h4>
                        <div class="progress mb-4">
                            <div class="progress-bar bg-danger" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"  style={{width: '70%'}}><span class="sr-only">20%</span></div>
                        </div>
                        <h4 class="small font-weight-bold">Numerical reasoning<span class="float-right">40%</span></h4>
                        <div class="progress mb-4">
                            <div class="progress-bar bg-warning" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: '40%'}}><span class="sr-only">40%</span></div>
                        </div>
                        <h4 class="small font-weight-bold">Verbal reasoning<span class="float-right">60%</span></h4>
                        <div class="progress mb-4">
                            <div class="progress-bar bg-primary" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}><span class="sr-only">60%</span></div>
                        </div>
                        <h4 class="small font-weight-bold">Logical Reasoning<span class="float-right">80%</span></h4>
                        <div class="progress mb-4">
                            <div class="progress-bar bg-info" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}}><span class="sr-only">80%</span></div>
                        </div>
                        <h4 class="small font-weight-bold">Overall progress<span class="float-right">68%</span></h4>
                        <div class="progress mb-4">
                            <div class="progress-bar bg-success" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: '68%'}}><span class="sr-only">100%</span></div>
                        </div>
                    </div>
                </div>
                <div class="col align-self-center">
                    <canvas id="Apti"></canvas>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Apitude;