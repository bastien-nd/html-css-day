console.log('bonjour depuis le navigateur')

let toto = document.getElementById('email-contact-form')

toto.addEventListener("input", function (e) {

  let articles = document.getElementsByTagName('article')

  for (const article of articles) {
    article.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16)
  }

  document.getElementsByTagName('h1')[0].innerHTML = e.target.value

})
