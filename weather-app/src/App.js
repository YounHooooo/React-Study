import {useEffect, useState} from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";


// 1. 앱이 실행되자마자 현재 위치기반의 날씨가 보임
// 2. 날씨 정보에는 도시 , 섭씨 화씨 날씨상태
// 3. 버튼이 5개 있음 (1개는 현재위치, 4개는 다른 도시)
// 4. 도시버튼을 클릭할 때 마다 도시별 날씨가 나옴
// 5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나옴
// 6. 데이터를 들고오는 동안 로딩 스피너가 돈다

function App() {

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      getWeatherByCurrentLocition(lat,lon)
    });
  };

  const getWeatherByCurrentLocition = async(lat,lon) => {
    let url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0df70ff78916c0d65ea074154257de4f`;
    let response = await fetch(url)
    let data = await response.json();
    console.log("data", data);
  };

  useEffect(() => {
    getCurrentLocation()
  },[])
  

  return (
    <div>
      <div className="container">
        <WeatherBox />
        <WeatherButton />
      </div>
    </div>
  );
}

export default App;
