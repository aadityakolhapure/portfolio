
//   document.addEventListener('contextmenu', function(event) {
//     event.preventDefault();
//   });

  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    var form = e.target;
    var data = new FormData(form);
    
    fetch(form.action, {
        method: 'POST',
        body: data,
    }).then(function(response) {
        return response.text();
    }).then(function(text) {
        alert("Form submitted successfully!");
        form.reset();
    }).catch(function(error) {
        alert("Form submission failed: " + error);
    });
});
function doPost(e) {
    Logger.log(JSON.stringify(e)); // Log the entire event object
    
    if (e.parameter) {
        return ContentService.createTextOutput("Data received: " + JSON.stringify(e.parameter));
    } else {
        return ContentService.createTextOutput("No data received.");
    }
}



  

