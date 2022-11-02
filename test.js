let vectorsInstance = [
  [1, 2],
  [6, 7, 9],
  [10, 11],
  [1, 5, 8, 17]]


const festack = [
  ['windows10', 'macm1', 'ubuntu20'],
  ['reactjs', 'vuejs', 'angularjs'],
  ['recoil', 'jotai', 'redux', 'rematch', 'zustand', 'none'],
  // https://blog.openreplay.com/top-6-react-state-management-libraries-for-2022/
  ['typescript', 'js'],
  ['npm', 'yarn'],
  ['nextjs', 'nuxtjs', 'none'],
  ['webpack', 'gulp', 'none'],
  ['docker', 'none'],
  ['jest', 'none'],
  ['mui', 'getbootstrap', 'tailwindcss', 'skeleton', 'bulma', 'materializecss', 'materialize design lite', 'foundation', 'ant design', 'semantic ui', 'ui kit', 'none'],
  // https://dev.to/theme_selection/best-css-frameworks-in-2020-1jjh
  ['github', 'gitlab', 'bitbucket', 'awscodecommit'],
]

function getCombos(vectors) {
  function countComb(vectors) {
    let numComb = 1
    for (vector of vectors) {
      numComb *= vector.length
    }
    return numComb
  }
  let allComb = countComb(vectors)
  
  let combos = []
  for (let i = 0; i < allComb; i++) {
    let thisCombo = []
    for (j = 0; j < vectors.length; j++) {
      let vector = vectors[j]
      let prevComb = countComb(vectors.slice(0, j))
      thisCombo.push(vector[Math.floor(i / prevComb) % vector.length])
    }
    combos.push(thisCombo)
  }
  return combos
}

console.log(getCombos(festack))
