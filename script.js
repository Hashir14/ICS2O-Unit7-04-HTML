// Connects button to its function.
document.getElementById('submit').addEventListener('click', ages)
// Variables store the info that the user inputs.
let age = 0

let day = 0
// This function will be carried out when the button is clicked.
function ages () {
  age = document.getElementById('age').value
  age = parseInt(age)
  day = document.getElementById('day').value
  // The statement below means that only if both the day and age correspond with what the computer has been told to look for in the and/or statement, then the note below will be displayed.
  if (age >= 12 && age <= 14 && (day === 'Tuesday' || day === 'Thursday')) {
    document.getElementById('reveal').innerHTML = 'Congrats! You get 50% off your admission because of student pricing.'
  } else {
    // If the overall statement above is false, then the message below will be displayed.
    document.getElementById('reveal').innerHTML = 'Sorry, you are not eligible for student pricing. You must pay the regular admission fee.'
  }
}
