document.getElementById('submit').addEventListener('click', ages)

let age = 0

let day = 0

function ages () {
  age = document.getElementById('age').value
  age = parseInt(age)
  day = document.getElementById('day').value
  if (age >= 12 && age <= 14 && (day === 'Tuesday' || day === 'Thursday')) {
    document.getElementById('reveal').innerHTML = 'Congrats! You get 50% off your admission because of student pricing.'
  } else {
    document.getElementById('reveal').innerHTML = 'Sorry, you are not eligible for student pricing. You must pay the regular admission fee.'
  }
}
