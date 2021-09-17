//This is a fitness app. The app will take two user inputs. The inputs will dictate an exercise. The first input will target a muscle group. The second input involves your workout space.

//FIRST INPUT: The user will choose a body area they wish to exercise, and this will create an array for related exercises from the API.

//SECOND INPUT: The user will then choose a second option, these options involve the physical space available to the user, and will draw an optoin from the array created by the first input.

//The final option is then drawn from the array and printed to the screen via SR accessible text, and an accompanying image.

    fetch('https://wger.de/api/v2/exerciseinfo/?format=json')
    .then( (response) => {
    return response.json();
    })
    .then( (jsonResult) => {
    const exercise = jsonResult.results[0].name;
    console.log(exercise)
    const paragraphEl = document.querySelector('p.nextDeparture')
    paragraphEl.innerHTML = `Do some ${exercise}s.`
    });
