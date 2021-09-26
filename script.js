//This is a fitness app. The app will take two user inputs. The inputs will dictate an exercise. The first input will target a muscle group. The second input involves your workout space.

// Build Namespacing and API Request
  // Make API Call to get exercise names and descriptions
// Create event listeners in order to get the value of the exercise and equipment
// Display exercises and description on page based on user input
  // Use math.floor and math.random in order to get a random number of the index
  // Use random number of index in order to get exercise name and description
  // Append selected exercise name and description on page
 
// Bonus/Stretch:
  // Achieved: Add another language as the API has some other languages available
  // Not achieved: Add a second API call in order to display pictures


// Build Our API Request
const app = {};

 // Make API call to get exercise name and exercise description
app.getExercises = () => {
  const endpointUrl = new URL(`https://wger.de/api/v2/exercise`)
  endpointUrl.search = new URLSearchParams({
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

  // Selects a random exercise name from the array of the object
  const exerciseId = Math.floor(Math.random() * exerciseName.length);
  const getRandomExerciseName = function() {
    const filteredName = exerciseName[exerciseId].name;
    return filteredName;
    }
  const getRandomExerciseDesc = function() {
    const filteredDesc = exerciseName[exerciseId].description;
    return filteredDesc;
    }
  
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
}  

// Event Listeners for Option

app.setUpEventListeners = function () {
  document.querySelector("#userInput").addEventListener("submit", function(event) {
    event.preventDefault();
    app.bodyForm = document.getElementById("bodyGroup").value;
    app.equipForm = document.getElementById("equipGroup").value;
    app.langForm = document.getElementById("langGroup").value;
    app.getExercises(this.value);
  })  
}  



app.init = () => {
  app.setUpEventListeners();
};  

app.init();


