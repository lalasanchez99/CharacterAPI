const API = "https://jsonplaceholder.typicode.com/users";
const getData = async (api) => {
   try {
       let response = await fetch(api)
       let data = await response.json();
       console.log(data); 
       
       let html = "";
       data.forEach((person) => {
    html += '<div class="card mb-3 text-info" style="max-width: 540px;">';
    html += '<div class="row g-0">';
    html += '<div class="col-md-4">';
    html += '<img src="https://www.ver.bo/wp-content/uploads/2019/01/4b463f287cd814216b7e7b2e52e82687.png_1805022883.png" class="img-fluid rounded-start" alt="...">';
    html += "</div>";
    html += '<div class="col-md-8">';
    html += '<div class="card-body">';
    html += `<h5 class="card-title">${person.name}</h5>`;
    html += `<p class="card-text">${person.email}</p>`;
    html += `<p class="card-text"><small class="text-muted">${person.address.city}</small></p>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
    html += "</div>";
  });
  document.getElementById("datosPersonas").innerHTML = html;
   } catch(error){console.log(error)}
};


getData(API);
