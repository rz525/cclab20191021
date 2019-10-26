// Giphy variables---------------------giphy api url
let giphySearch = 'sad';
let giphyapi = 'https://api.giphy.com/v1/gifs/search?api_key=rMXuwMjUUGR9Zdv2mmtdGWqAE0NOLUb0&q=';
let giphyLimit = '&limit=25&offset=0&rating=G&lang=en';//limit=25
let giphyLink;
let input;
let weatherlink;

// Weather variables---------------------
let city = 'seattle';
let weatherKey = '&APPID=5f7315f331181aa4ac6571d7f18b543a';
let weatherapi = 'http://api.openweathermap.org/data/2.5/weather?q=';
let weatherData;

function setup(){
input = createInput('manhattan'); 
let button = createButton('submit');

//button.position(100,100);
//event is button pressed

button.mousePressed(updateCity);//inside()is what shall i do when its pressed
}

function updateCity(){
  console.log(input.value());
  city = input.value();//reading the value of input
  let weatherlink = weatherapi + city +weatherKey ;//plug city in
  loadJSON(weatherlink,gotWeatherData);
}

function gotWeatherData(data){//data is a parameter we need, function()bec it is a builtin function
  console.log(data.weather[0].main);
  weatherData = data.weather[0].main//not print out
  //console.log(giphy.data[0].images.original.url);
  giphysearch = weatherData;
  giphyLink = giphyapi+giphysearch+giphyLimit;//also can replace giphysearch with weatherData
  loadJSON(giphyLink,gotGiphyData);
}

function gotGiphyData(giphy){//this is local function, so (data) can be used again regardless
  giphydata = giphy.data[0].images.original.url;
  console.log(giphy.data[0].images.original.url);
  createImg(giphy.data[0].images.original.url);
}
