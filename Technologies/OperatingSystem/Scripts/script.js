let url = "icons.json";
let options = {
  method: "GET",
  headers: {}
};

// Send the request using fetch()
fetch(url, options)
  // Check if the response was successful
  .then(function(response) {
    if (response.ok) {
      // Return the response as a JSON object
      return response.json();
    } else {
      // Throw an error
      throw new Error("Request failed: " + response.status);
    }
  })
  // Handle the JSON data from the response
.then(function(data) {
    // Do something with the data
    console.log(data);
    // Get the container element where the JSON data will be appended
    let container = document.getElementById("container");
    // Loop through the array of technologies in the JSON object
    for (var i = 0; i < data.Technologies.length; i++) {
      // Get the current technology object
      let tech = data.Technologies[i];
      // Create a template literal for each technology
      let techTemplate = `
        <div class="tech">
          <span class="tech-category">${tech.TechCategory}: </span>
          <span class="tech-name">${tech.TechName}</span>
          <img class="tech-icon" src="${tech.Icon}" />
        </div>
      `;
      // Append the template literal to the container element
      container.innerHTML += techTemplate;
    }
  })
  