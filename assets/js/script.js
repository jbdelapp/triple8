var searchCity = function(cityInput) {
    fetch(
        "http://api.openweathermap.org/data/2.5/weather?q="
        + cityInput + "&appid=d3247a9e8b9789c09ccfc53d466289d4"
      )
        .then(function(response) {
          return response.json();
        }) .then(function(response) {
            var iconCode = response.weather[0].icon;
    
            var iconurl = "http://openweathermap.org/img/w/" + iconCode + ".png";
            $(".city").html("<h1> " + response.name + " </h1>");
            $(".temp").text("Temperature: " + ((response.main.temp - 273.15) * 1.8 + 32).toFixed(0) + " °F");
            $(".humidity").text("Humidity: " + response.main.humidity + " %");
            $(".wind").text("Wind Speed: " + response.wind.speed + " MPH");
            $("#wicon").attr("src", iconurl);
        })
  }
  
  document.getElementById("run-search").addEventListener("click", function(){
  var userSearch = document.getElementById("get-weather").value
    searchCity(userSearch);
  });

// 5 day weather forecast

function fiveDayForecast() {
    var fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?q=San+Diego&appid=" + apiKey;

    $.ajax({
        url: fiveDayURL,
        method: "GET"
    }).then(function(responseTwo) {
        var icon1 = responseTwo.list[4].weather[0].icon;
        var icon1url = "http://openweathermap.org/img/w/" + icon1 + ".png";

        var icon2 = responseTwo.list[4].weather[0].icon;
        var icon2url = "http://openweathermap.org/img/w/" + icon2 + ".png";

        var icon3 = responseTwo.list[4].weather[0].icon;
        var icon3url = "http://openweathermap.org/img/w/" + icon3 + ".png";

        var icon4 = responseTwo.list[4].weather[0].icon;
        var icon4url = "http://openweathermap.org/img/w/" + icon4 + ".png";

        var icon5 = responseTwo.list[4].weather[0].icon;
        var icon5url = "http://openweathermap.org/img/w/" + icon5 + ".png";

        var tempOneF = (responseTwo.list[4].main.temp - 273.15) * 1.8 + 32;
        var tempOne = tempOneF.toFixed(1);
        var tempTwoF = (responseTwo.list[12].main.temp - 273.15) * 1.8 + 32;
        var tempTwo = tempTwoF.toFixed(1);
        var tempThreeF = (responseTwo.list[20].main.temp - 273.15) * 1.8 + 32;
        var tempThree = tempThreeF.toFixed(1);
        var tempFourF = (responseTwo.list[28].main.temp - 273.15) * 1.8 + 32;
        var tempFour = tempFourF.toFixed(1);
        var tempFiveF = (responseTwo.list[36].main.temp - 273.15) * 1.8 + 32;
        var tempFive = tempFiveF.toFixed(1);

        var day1 = responseTwo.list[4].dt_txt;
        var day2 = responseTwo.list[12].dt_txt;
        var day3 = responseTwo.list[20].dt_txt;
        var day4 = responseTwo.list[28].dt_txt;
        var day5 = responseTwo.list[36].dt_txt;
    })
}