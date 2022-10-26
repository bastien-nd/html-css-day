console.log("ça fonctionne")

let x = 5
const t = "tutut"

let notes_leo = [4, 3, 20]
let notes_maudelin = [1.5, 5, 4.5]

function average(tableau) {
  let total = 0

  for (const note of tableau) {
    total += note
  }

  return total / tableau.length
}


function pass(avg) {
  if (avg > 6) {
    console.log('tricheur')
    return
  }
  if (avg < 4) {
    console.log('raté')
  } else {
    console.log('réussi');
  }
}

pass(average(notes_maudelin))
pass(average(notes_leo))
