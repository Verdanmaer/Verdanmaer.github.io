$(function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      let lt = "lat=" + position.coords.latitude;
      let ln = "lon=" + position.coords.longitude;
      getWeather(lt, ln);
    });
  }
});

function getWeather(lt, ln) {
  let api = "https://fcc-weather-api.glitch.me/api/current?";
  let urlString = api + lt + "&" + ln;
  let imgIcon;

  $.ajax({
    url: urlString,
    success: function(result) {
      let roundedTemp = Math.round(result.main.temp);
      $("#temp").text(roundedTemp + " °C");

      $("#temp").on("click", function() {
        $("#temp").toggleClass("cel");
        $("#temp").toggleClass("fah");

        if ($(this).hasClass("cel")) {
          $("#temp").text(Math.round(roundedTemp * 1.8 + 32) + " °F");
          return;
        }

        $("#temp").text(roundedTemp + " °C");
      });

      $("#city").text(
        "City: " + result.name + "," + " Country: " + result.sys.country
      );
      $("#dsc").text(result.weather[0].main);
      imgIcon = result.weather[0].icon;
      document.getElementById("icon").src = imgIcon;
    }
  });
}
