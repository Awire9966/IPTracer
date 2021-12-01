
 var iptext = document.getElementById("iptext");
     
$.getJSON('https://json.geoiplookup.io/?callback?', function(data) {
   iptext.value = JSON.stringify(data, null, 2);
 
});
