console.log('bonjour depuis le navigateur')

let toto = document.getElementById('sidebar')

toto.addEventListener("click", function () {

  let articles = document.getElementsByTagName('article')

  for (const article of articles) {
    article.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16)
  }
})