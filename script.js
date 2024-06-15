const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        nav.classList.toggle('show-menu')
        toggle.classList.toggle('show-icon')
    })
 }
 function weather_default(){
    getcityname()
 }
showMenu('nav_toggle','nav_menu')
function getcityname(){
    var user_city=document.getElementById('user_city').value;
    if(user_city==''){
        user_city='London';
    }
    getweather(user_city);
}
async function getweather(user_city){
    const api_key="0457fdf89bd563123cc92ab1ad3f963b";
    const api_url=`https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${user_city}`;
    const response = await fetch(api_url+`&appid=${api_key}`)
    var data = await response.json();
    console.log(data);
    let display_name=document.getElementById('city_name');
    if(data.name!==undefined){
        if(data.name.length>=10){
            display_name.style.fontSize="34px";
        }
        else if(data.name.length>=8){
            display_name.style.fontSize="38px";
        }
        display_name.innerHTML=data.name;
    }
    else{
            alert("Invalid City name Try Again")
            window.location.reload();
    }
    let display_temp=document.getElementById('city_temp');
    display_temp.innerHTML = Math.round(data.main.temp) + " °C";
    let display_humidity=document.getElementById('hum_val');
    display_humidity.innerHTML=data.main.humidity+"%";
    let display_wind_speed=document.getElementById('wind_val');
    display_wind_speed.innerHTML=data.wind.speed+" km/h";
    pic_data=data.weather[0].main;
    document.querySelector(".weather").style.display="block";
    display_pic=document.getElementById('icon_display');
    if(pic_data=='Clear'){
        display_pic.src='assets/images/clear.png';
    }
    else if(pic_data=='Clouds'){
        display_pic.src='assets/images/clouds.png';
    }
    else if(pic_data=='Drizzle'){
        display_pic.src='assets/images/drizzle.png';
    }
    else if(pic_data=='Humidity'){
        display_pic.src='assets/images/humidity.png';
    }
    else if(pic_data=='Mist'){
        display_pic.src='assets/images/mist.png';
    }
    else if(pic_data=='Rain'){
        display_pic.src='assets/images/rain.png';
    }
}

