const url = "https://api.spacexdata.com/v3/launches/upcoming";
const course = "https://noroffcors.herokuapp.com/" + url;

async function launchFetch() {
  try {
    const response = await fetch(course);
    rocketDisplay(await response.json());
  } catch (error) {
    console.error(error);
  }
}

launchFetch();

function rocketDisplay(rockets) {
  const allRockets = document.querySelector(".launch-container");
  let html = "";
  for (let i = 0; i < 6; i++) {
    html += `<div class="launch-container-details">
    <div class="image"></div>
    <h2> ${rockets[i].mission_name}</h2>
    <p><span>Rocket name:</span> ${rockets[i].rocket.rocket_name}</p>
    <p><span>Launch date:</span> ${new Intl.DateTimeFormat("no").format(new Date(rockets[i].launch_date_local))}</p>                    
    <p><span>Nationality:</span> ${rockets[i].rocket.second_stage.payloads[0].nationality}</p>
    </div>`;
  }

  allRockets.innerHTML = html;
}
