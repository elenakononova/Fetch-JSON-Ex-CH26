// TODO: add code here
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
          response.json().then( function(json) {
        // console.log(json);
        const destination = document.getElementById("container");
       // let index = 0;
       for ( let index = 0; index < 6; index ++) {       
           destination.innerHTML += `          
              <div class="astronaut">
              <div class="bio">
                 <h3>${json[index].firstName} ${json[index].lastName}</h3>
                 <ul>
                  <li>Hours in Space: ${json[index].hoursInSpace}</li>
                  <li>Active: ${json[index].active}</li>
                  <li>Skills: ${json[index].skills[0]}, ${json[index].skills[1]}</li>
                 </ul>
                 </div>
                 <img class="avatar" src=${json[index].picture} height=250></img>
              </div>
           `;
         }
          // index = (index + 1) % json.length;
      });
  });
});