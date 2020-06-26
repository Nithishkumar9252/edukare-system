import React from 'react';
import VNav from './V_Nav1'
import CardGroup from './MentorCard'
import HNav from './H_Nav'
import Chat from './Chat'
import Header from './Header';
function Mentor(){
    return(
        <div id="wrapper">
          <VNav/>
      <div class="d-flex flex-column" id="content-wrapper">
          <div id="content">
              <HNav/>
       
        <div class="container-fluid">
          <Header/>
            
            
              <div id="boxclass" class="album py-5 bg-light">
                <div id="new" class="container">
            
                  
                    <CardGroup/>
                    
                </div>
              </div>
        </div>
        
        <Chat/>

       
            

            
         
    </div></div></div>
    )
}

export default Mentor;