import React from 'react';

function Perfo(){
    return(
        <div id="whiteboxbg">
        <div class="container-fluid">
            <div class="row">
                    <h5 class="heading">Personal Performance</h5>
            </div>
            <div class="row">
                <div class="col align-self-center">
                    <h6  class="center">Atendance Percentage: 79%</h6>
                    <h6  class="center">Staff rating: 8.3/10</h6>
                    <h6  class="center">Mentor rating: 7.0/10</h6>
                    <br></br>
                    <h6  class="center">Mentor Remarks: Amazing student, can perform a bit better in academics</h6>
                </div>
                <div class="col">
                    <h6 class='heading center' >Your Performance Graph</h6>
                    <canvas id="perpfo"></canvas>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Perfo;