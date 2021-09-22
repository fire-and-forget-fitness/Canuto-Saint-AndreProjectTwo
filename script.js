//This is a fitness app. The app will take two user inputs. The inputs will dictate an exercise. The first input will target a muscle group. The second input involves your workout space.

//FIRST INPUT: The user will choose a body area they wish to exercise, and this will create an array for related exercises from the API.

//SECOND INPUT: The user will then choose a second option, these options involve the physical space available to the user, and will draw an optoin from the array created by the first input.

//The final option is then drawn from the array and printed to the screen via SR accessible text, and an accompanying image.




// Idea: User input provides value for ID for Muscle group and eqipment. Based off that value we get the API link Use the code below as an example

// const endpointUrl = new URL('https://api.datamuse.com/words%27)

//   console.log(endpointUrl)

//   endpointUrl.search = new URLSearchParams({
//     ml: "sandwich"
//   })

//   fetch(endpointUrl)
//   .then( response =>  response.json()
//   )
//   .then((jsonResult) => {
//     console.log(jsonResult)
//   });


// endpointUrl.search = new URLSearchParams({
//     muscles: bodyGroup.value,
//     equipment: equipGroup.value
// });

// fetch (endpointUrl)
//   .then ( response => response.json())
//   .then((jsonResult) => {
//       console.log(jsonResult)
// });

// let userInput1 = undefined;
// let userInput2 = undefined;

// const form = document.getElementById("userInput");

// const bodyGroup = document.getElementById("bodyGroup");
// const equipGroup = document.getElementById("equipGroup");

// bodyGroup.addEventListener('change', (event) => {
//   let bodyGroup = form.elements['bodyGroup'];
//   userInput1 = bodyGroup.value;

//   console.log(userInput1);
// })

// equipGroup.addEventListener('change', (event) => {
//   let equipGroup = form.elements['equipGroup'];
//   userInput2 = equipGroup.value;
//   console.log(userInput2);
// })

// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   console.log(userInput1, userInput2)

//   const endpointUrl = new URL(`https://wger.de/api/v2/exerciseinfo/?format=json`)

//   console.log(endpointUrl);
// })

const app = {};

app.getExercises = () => {

    const endpointUrl = new URL(`https://wger.de/api/v2/exercise`)
    endpointUrl.search = new URLSearchParams({
      language: [2],
      category: app.bodyForm,
      equipment: app.equipForm
    }); 
    fetch (endpointUrl)
      .then ( response => response.json())
      .then((jsonResult) => {
          console.log(jsonResult);
    });
};

app.bodyForm = document.getElementById("bodyGroup").value;
app.equipForm = document.getElementById("equipGroup").value;
console.log(app.bodyForm, app.equipForm)

app.init = () => {
app.getExercises();
};

app.init();
    // fetch('https://wger.de/api/v2/exercise/?results.category/')
    // .then( (response) => {
    // return response.json();
    // })
    // .then( (jsonResult) => {
    // const exercise = jsonResult.results[0].name;
    // console.log(exercise)
    // const paragraphEl = document.querySelector('p.nextDeparture')
    // paragraphEl.innerHTML = `Work on your ${exercise}.`
    // });
