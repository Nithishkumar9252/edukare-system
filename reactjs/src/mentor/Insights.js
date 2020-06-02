import React from 'react';

function Insights(){
    return(
        <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="text-primary font-weight-bold m-0">Insights</h6>
                    </div>
                    <div id="insights" class="card-body">
                        <h4 class="small font-weight-bold">Science<span class="float-right">20%</span></h4>
                        <div class="progress progress-sm mb-3">
                            <div class="progress-bar bg-danger" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: '20%'}}><span class="sr-only">20%</span></div>
                        </div>
                        <h4 class="small font-weight-bold">Maths<span class="float-right">40%</span></h4>
                        <div class="progress progress-sm mb-3">
                            <div class="progress-bar bg-warning" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: '40%'}}><span class="sr-only">40%</span></div>
                        </div>
                        <h4 class="small font-weight-bold">Creativity<span class="float-right">60%</span></h4>
                        <div class="progress progress-sm mb-3">
                            <div class="progress-bar bg-primary" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}><span class="sr-only">60%</span></div>
                        </div>
                        <h4 class="small font-weight-bold">Aptitude<span class="float-right">80%</span></h4>
                        <div class="progress progress-sm mb-3">
                            <div class="progress-bar bg-info" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}}><span class="sr-only">80%</span></div>
                        </div>
                        <h4 class="small font-weight-bold">Comfort<span class="float-right">Complete!</span></h4>
                        <div class="progress progress-sm mb-3">
                            <div class="progress-bar bg-success" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}><span class="sr-only">100%</span></div>
                        </div>
                    </div>
                   
                </div>
    );
}

export default Insights;