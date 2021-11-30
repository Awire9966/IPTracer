
 var iptext = document.getElementById("iptext")
     var ip = document.getElementById("ip").value;
if (ip == null) {      


$.getJSON('https://json.geoiplookup.io/?callback=?', function(data) {
   iptext.value = JSON.stringify(data, null, 2);
}
if (!ip = null)
 {
  

$.getJSON('https://json.geoiplookup.io/?ip=' + ip, function(data) {
   iptext.value = JSON.stringify(data, null, 2);
 }
});
