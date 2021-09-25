//This is a fitness app. The app will take two user inputs. The inputs will dictate an exercise. The first input will target a muscle group. The second input involves your workout space.

//FIRST INPUT: The user will choose a body area they wish to exercise, and this will create an array for related exercises from the API.

//SECOND INPUT: The user will then choose a second option, these options involve the physical space available to the user, and will draw an optoin from the array created by the first input.

//The final option is then drawn from the array and printed to the screen via SR accessible text, and an accompanying image.

// Idea: User input provides value for ID for Muscle group and eqipment. Based off that value we get the API link Use the code below as an example


// Build Our API Request
const app = {};

 // Make API call to get Name of Exercise
app.getExercises = () => {
  const endpointUrl = new URL(`https://wger.de/api/v2/exerciseinfo/`)
  endpointUrl.search = new URLSearchParams({
    limit: 99,
    offset: 0,
    language: app.langForm,
    category: app.bodyForm,
    equipment: app.equipForm
  }); 
  fetch (endpointUrl)
    .then ( response => {
      return response.json()})
    .then((jsonResult) => {
      document.querySelector('#exercise').innerHTML = '';
      app.displayExercises(jsonResult.results);
  });
};

//  Display Exercise on Page

app.displayExercises = function(exerciseName) {

// If exerciseImage === undefined, run/call API again; else run displayImage

  // Selects a random exercise name from the array of the object
  const exerciseId = Math.floor(Math.random() * exerciseName.length);
  const getRandomExerciseName = function() {
    const filteredName = exerciseName[exerciseId].name
    return filteredName 
    }
  const getRandomExerciseDesc = function() {
    const filteredDesc = exerciseName[exerciseId].description
    return filteredDesc 
    }
  // const exerciseImage = function() {
  //   const baseReturn = exerciseName[exerciseId].images[0]
    
  //   if ( baseReturn != undefined) {
  //     return baseReturn
  //   }else {
  //     app.getExercises()
  //   }
  // }
  // exerciseImage()
  
  // Appends chosen exercise on page
  const name = document.createElement("h2");
  name.innerText = getRandomExerciseName();
  const desc = document.createElement("p");
  desc.innerHTML = getRandomExerciseDesc();

  const exercise = document.createElement("div");
  exercise.classList.add("exerciseInfo");
  exercise.appendChild(name);
  exercise.appendChild(desc);
  document.querySelector("#exercise").appendChild(exercise);

  // console.log(exerciseName[exerciseId].images[0])
  // console.log(exerciseName[exerciseId].images[0].exercise_base)
  console.log(exerciseName);
  console.log(exerciseId)

}

// Event Listeners for Option

app.setUpEventListeners = function () {
  document.querySelector("#userInput").addEventListener("submit", function(event) {
    event.preventDefault();
    app.bodyForm = document.getElementById("bodyGroup").value;
    app.equipForm = document.getElementById("equipGroup").value;
    app.langForm = document.getElementById("langGroup").value;
    console.log(app.bodyForm, app.equipForm, app.langForm)
    app.getExercises(this.value)
  })
}



app.init = () => {
  app.setUpEventListeners()
};

app.init();