import React , {useState}from 'react';




function Card(){
    const [Details,setDetails]=useState([{Name:'Yama',Designation:'Mentor'},{Name:'Yama1',Designation:'Mentor'},{Name:'Yama2',Designation:'Mentor'},{Name:'Yama3',Designation:'Mentor'},{Name:'Yama4',Designation:'Mentor'},{Name:'Yama5',Designation:'Mentor'}]);
    const cardGroup= Details.map((item) =>{return(
    <div class="col-md-4">
    <div id="mcard" class="card mb-4 shadow-sm">
     <img class="bd-placeholder-img card-img-top" width="50%" height="225" src="https://www.searchpng.com/wp-content/uploads/2019/02/Men-Profile-Image-1024x941.png" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"></img><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text>
      <div class="card-body">
        <p class="card-text">
         <h2>{item.Name}</h2>
          <h5>
            <p>
              Designation: {item.Designation}
            </p>
          </h5>
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">Message</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
          </div>
          <large class="text-muted"><i class="fas fa-envelope"></i></large>
        </div>
      </div>
    </div>
  </div>

    );
})
    return(
        <div class="row">
        {cardGroup}
        </div>
    )
}
export default Card;