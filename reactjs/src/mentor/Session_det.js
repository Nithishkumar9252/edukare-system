import React from 'react';

function Session_det(){
    return(
        <div class="row">
                    <div class="col">
                        <div class="card shadow mb-3">
                            <div class="card-header py-3">
                                <p class="text-primary m-0 font-weight-bold">Student Information</p>
                            </div>
                            <div id="user" class="card-body">
                                <form>
                                    <div class="form-row">
                                        <div class="col">
                                            <div class="form-group"><label for="username"><strong>Name </strong></label><input class="form-control" type="text" placeholder="" name="username" /></div>
                                        </div>
                                        <div class="col">
                                            <div class="form-group"><label for="email"><strong>Roll Number</strong></label><input class="form-control" type="email" placeholder="" name="email" /></div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col">
                                            <div class="form-group"><label for="first_name"><strong>Class</strong></label><input class="form-control" type="text" placeholder="" name="first_name"/></div>
                                        </div>
                                        <div class="col">
                                            <div class="form-group"><label for="last_name"><strong>Section</strong></label><input class="form-control" type="text" placeholder="" name="last_name"/></div>
                                        </div>
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                        <div class="card shadow">
                            <div class="card-header py-3">
                                <p class="text-primary m-0 font-weight-bold">Mentor </p>
                            </div>
                            <div id="user2" class="card-body">
                                <form>
                                    <div class="form-group"><label for="address"><strong>Issues</strong></label><input class="form-control" type="text" placeholder="" name="address" /></div>
                                    <div class="form-row">
                                        <div class="col">
                                            <div class="form-group"><label for="city"><strong>Attendance</strong></label><input class="form-control" type="text" placeholder="" name="city"/></div>
                                        </div>
                                        <div class="col">
                                            <div class="form-group"><label for="country"><strong>Marks</strong></label><input class="form-control" type="text" placeholder="" name="country"/></div>
                                        </div>
                                    </div>
                                    
                                </form>
                                <form>
                                    <div class="form-group"><label for="address"><strong>Interests</strong></label><input class="form-control" type="text" placeholder="" name="address"/></div>
                                    <div class="form-row">
                                        <div class="col">
                                            <div class="form-group"><label for="city"><strong>Comfort</strong></label><input class="form-control" type="text" placeholder="" name="city"/></div>
                                        </div>
                                        <div class="col">
                                            <div class="form-group"><label for="country"><strong>Difficulty in Learning</strong></label><input class="form-control" type="text" placeholder="" name="country"/></div>
                                        </div>
                                    </div>
                                    
                                </form>
                                <form>
                                    <div class="form-group"><label for="address"><strong>Teachers</strong></label><input class="form-control" type="text" placeholder="" name="address"/></div>
                                    <div class="form-row">
                                        <div class="col">
                                            <div class="form-group"><label for="city"><strong></strong></label><input class="form-control" type="text" placeholder="" name="city"/></div>
                                        </div>
                                        <div class="col">
                                            <div class="form-group"><label for="country"><strong></strong></label><input class="form-control" type="text" placeholder="" name="country"/></div>
                                        </div>
                                    </div>
                                    <div class="form-group"><button class="btn btn-primary btn-sm" type="submit">Submit&nbsp;Session</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
    );
}
export default Session_det;