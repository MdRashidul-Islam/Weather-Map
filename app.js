const searchTemp=()=>{
    const search = document.getElementById('input')
    const searchText = search.value
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=41eabc278cd5d2824f228330edd07270&units=metric`
    
    fetch(url)
    .then(res => res.json())
    .then(data =>displayTemp(data))
}
const setInnerText =(id, text)=>{
    document.getElementById(id).innerText=text
}
const displayTemp =(temp)=>{
    console.log(temp)
   setInnerText('place-name', temp.name)
   setInnerText('temp', temp.main.temp)
   setInnerText('weather', temp.weather[0].main)
   const url=`http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`
   const image = document.getElementById('icon')
   image.setAttribute('src', url);
}
