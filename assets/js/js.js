
//getting location using watch

//scope cariables
var showPosition = ""
var watchID;
var geoLoc;

//location peramater
function showLocation(position) {
   var latitude = position.coords.latitude;
   var longitude = position.coords.longitude;
   console.log("Latitude : " + latitude + " Longitude: " + longitude);
}

// error handling
function errorHandler(err) {
   if(err.code == 1) {
      alert("Error: Access is denied!");
   } else if( err.code == 2) {
      alert("Error: Position is unavailable!");
   }
}

//function to start the watch, includes timeout
function getLocationUpdate(){
   
   if(navigator.geolocation){
      
      // timeout at 60000 milliseconds (60 seconds)
      var options = {timeout:60000};
      geoLoc = navigator.geolocation;
      watchID = geoLoc.watchPosition(showLocation, errorHandler, options);
   } else {
      alert("Sorry, browser does not support geolocation!");
   }
}
//setting basic buttons for testing
$('#main').append($('<button>',{id: "start","class": 'start'}));
$('#main').append($('<button>',{id: "stop","class": 'stop'}));

//giving the testing buttons functions
//starting the watch
$('#start').click(function(){
    getLocationUpdate();
})
//ending the watch
$('#start').click(function(){
    stopWatch();
    console.log(showPosition)
})