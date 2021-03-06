$(document).ready(function(){
  let darkSkyKey;

  // create code for input working

  $.ajax({
    url:'config.json', //API key
    type: 'GET',
    dataType: 'json',
    success: function(keys){
      darkSkyKey = keys['darkSkyKey'];
      getWeatherData();
    },
    error: function(){
      console.log('cannot find config.json file, cannot run application');
    }
  });


  getWeatherData = () => {
    $.ajax({
      url:`https://api.darksky.net/forecast/${darkSkyKey}/41.2865,174.7762`,
      type: 'GET',
      dataType:'jsonp',
      success: function(dataFromDarkSky){
        console.log(dataFromDarkSky);
      },
      error: function(){
        console.log('error - something went wrong with request');
      }
    });
  }

  getLocation = () => {
    $.ajax({
      url:`https://maps.googleapis.com/maps/api/place/autocomplete/output?parameters`,
      type: 'GET',
      dataType:'json',
      success: function()
    })
  }



});
