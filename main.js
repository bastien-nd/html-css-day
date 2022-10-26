console.log('bonjour depuis le navigateur')

let toto = document.getElementById('email-contact-form')

toto.addEventListener("input", function (e) {

  let articles = document.getElementsByTagName('article')

  for (const article of articles) {
    article.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16)
  }

  document.getElementsByTagName('h1')[0].innerHTML = e.target.value

})



// Grades average computing

// Display average

// Compute average

// Retrieve grades
function retrieveGrades(gradesID) {
  let grades = []
  for (const gradesIDElement of gradesID) {
    grades.push(document.getElementById(gradesIDElement).value)
  }
  return grades
}

// Register listeners
let inputs = document.getElementsByTagName('input')
for (const input of inputs) {
  input.addEventListener('input', function () {
    console.log(retrieveGrades(['grade-1', 'grade-2']))
  })
}