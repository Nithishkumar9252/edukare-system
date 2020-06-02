
import React from 'react';

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";


function Settings() {
  return (
    <div class="row">
    <div class="col">
        <div class="card shadow mb-3">
            <div id="one" class="card-header py-3">
                <p class="text-primary m-0 font-weight-bold">User Settings</p>
            </div>
            <div id="user" class="card-body">
                <form>
                    <div class="form-row">
                        <div class="col">
                            <div class="form-group"><label for="username"><strong>Username</strong></label><input class="form-control" type="text" placeholder="Username" name="username" /></div>
                        </div>
                        <div class="col">
                            <div class="form-group"><label for="email"><strong>Email Address</strong></label><input class="form-control" type="email" placeholder="user@example.com" name="email"/></div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col">
                            <div class="form-group"><label for="first_name"><strong>First Name</strong></label><input class="form-control" type="text" placeholder="" name="first_name" /></div>
                        </div>
                        <div class="col">
                            <div class="form-group"><label for="last_name"><strong>Last Name</strong></label><input class="form-control" type="text" placeholder="" name="last_name" /></div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col">
                            <div class="form-group"><label for="first_name"><strong>Designation</strong></label><input class="form-control" type="text" placeholder="" name="first_name" /></div>
                        </div>
                        <div class="col">
                            <div class="form-group"><label for="last_name"><strong>Department</strong></label><input class="form-control" type="text" placeholder="" name="last_name" /></div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col">
                            <div class="form-group"><label for="first_name"><strong>Years of Experience </strong></label><input class="form-control" type="text" placeholder="" name="first_name " /></div>
                        </div>
                        <div class="col">
                            <div class="form-group"><label for="last_name"><strong>Career Level</strong></label><input class="form-control" type="text" placeholder="" name="last_name"/></div>
                        </div>
                    </div>
                    <div class="form-group"><button class="btn btn-primary btn-sm" type="submit">Save Settings</button></div>
                </form>
            </div>
        </div>
        <div class="card shadow">
            <div id="one" class="card-header py-3">
                <p class="text-primary m-0 font-weight-bold">Contact Settings</p>
            </div>
            <div id="user2" class="card-body">
                <form>
                    <div class="form-group"><label for="address"><strong>Address</strong></label><input class="form-control" type="text" placeholder="" name="address"/></div>
                    <div class="form-row">
                        <div class="col">
                            <div class="form-group"><label for="city"><strong>City</strong></label><input class="form-control" type="text" placeholder="" name="city"/></div>
                        </div>
                        <div class="col">
                            <div class="form-group"><label for="country"><strong>Country</strong></label><input class="form-control" type="text" placeholder="" name="country"/></div>
                        </div>
                    </div>
                    <div class="form-group"><button class="btn btn-primary btn-sm" type="submit">Save&nbsp;Settings</button></div>
                </form>
            </div>
        </div>
    </div>
</div>

  );
}

export default Settings;
