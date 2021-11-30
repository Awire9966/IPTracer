
 var iptext = document.getElementById("iptext");
     
$.getJSON('https://json.geoiplookup.io/?callback' + ip, function(data) {
   iptext.value = JSON.stringify(data, null, 2);
 
});
