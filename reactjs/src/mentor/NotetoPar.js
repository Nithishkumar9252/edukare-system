import React from 'react';

function Note(){
    return(
        <div class="card shadow mb-5">
            <div class="card-header py-3">
                <p class="text-primary m-0 font-weight-bold">Note to Parents</p>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-12">
                        <form>
                            <div class="form-group"><label for="signature"><strong></strong><br></br></label><textarea class="form-control" rows="4" cols="20" name="signature"></textarea></div>
                            <div class="form-group">
                                <div class="custom-control custom-switch"><input class="custom-control-input" type="checkbox" id="formCheck-1"/><label class="custom-control-label" for="formCheck-1"><strong>Send a copy to parent</strong></label></div>
                            </div>
                            <div class="form-group"><button class="btn btn-primary btn-sm" type="submit">Send </button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Note;