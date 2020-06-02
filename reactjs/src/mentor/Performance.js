import React from 'react';

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";


function Performance() {
  return (
    <div id="pro" class="card shadow mb-4">
                    <div id="perfo"  class="card-header py-3">
                        <div>
                            <div class="card-header py-3">
                                <h6 class="text-primary font-weight-bold m-0">Performance</h6>
                            </div>
                            <div id="card" class="card-body">
                                <h4 class="small font-weight-bold">Maths<span class="float-right">20%</span></h4>
                                <div class="progress progress-sm mb-3">
                                    <div class="progress-bar bg-danger" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: '20%'}}><span class="sr-only">20%</span></div>
                                </div>
                                <h4 class="small font-weight-bold">Physics<span class="float-right">40%</span></h4>
                                <div class="progress progress-sm mb-3">
                                    <div class="progress-bar bg-warning" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: '40%'}}><span class="sr-only">40%</span></div>
                                </div>
                                <h4 class="small font-weight-bold">Mid Term 1<span class="float-right">60%</span></h4>
                                <div class="progress progress-sm mb-3">
                                    <div class="progress-bar bg-primary" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}><span class="sr-only">60%</span></div>
                                </div>
                                <h4 class="small font-weight-bold">Mid Term 2<span class="float-right">80%</span></h4>
                                <div class="progress progress-sm mb-3">
                                    <div class="progress-bar bg-info" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}}><span class="sr-only">80%</span></div>
                                </div>
                                <h4 class="small font-weight-bold">Semester 1<span class="float-right">Complete!</span></h4>
                                <div class="progress progress-sm mb-3">
                                    <div class="progress-bar bg-success" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: '90%'}}><span class="sr-only">90%</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

  );
}

export default Performance;
