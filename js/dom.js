const searchQuery = document.querySelector(".value_search");
const searchBtn = document.querySelector(".submit_search");
const frame = document.querySelector(".iframe");
const cityName = document.querySelector(".info_area-state");
const tempertureData = document.querySelector(".info_area_weather-temperture-data");
const weatherDescriptionData = document.querySelector(".info_area_weather-description-data");
const weatherImage = document.querySelector(".info_area_weather-icon-image");
const containerImgs = document.querySelector(".container_imgs");
const mainImgTop = document.querySelector(".main_img_top");
const photoText = document.querySelector(".photo-text");
const menuLust = document.querySelector(".menu_lust svg");
const infoArea = document.querySelector(".info_area");
const search = document.querySelector(".search");

searchBtn.addEventListener("click", () => {
  let query = searchQuery.value;
  searchQuery.value = ''
  search.classList.remove('error')
  if (!query){
  search.classList.add('error')
  } 
    infoArea.classList.remove('show')
  let url = `https://nominatim.openstreetmap.org/search.php?q=${query}&format=jsonv2`;
  getRequest(url, (data) => {
    let lat = data[0].lat;
    let lon = data[0].lon;
    let cityAndCountry = data[0].display_name.split(" ");
    sendMap(lat, lon);
    getImg(query);
    getWeather(lat, lon);
    if (cityAndCountry.length >= 3) {
      cityName.textContent = `${cityAndCountry[0]} ${cityAndCountry[1]} ${cityAndCountry[2]}`;
    } else {
      cityName.textContent = cityAndCountry[0];
    }
    photoText.textContent = `Photos from ${query}`;
  });
});

menuLust.addEventListener('click',()=>{
  infoArea.classList.toggle('show')
})
