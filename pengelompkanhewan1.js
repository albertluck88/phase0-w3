function groupAnimals(animals) {
  // CARI HURUF PERTAMA 
  let hurufPertama = []
  let duplikat = []
  for(let i = 0; i < animals.length; i++){
      hurufPertama.push(animals[i][0])
  } 
hurufPertama.sort(function (a, b){return a > b})
  for (let o = 0 ; o < hurufPertama.length; o++){
    if(hurufPertama[o] !== hurufPertama[o+1]){
      duplikat.push(hurufPertama[o])
    }
  }
  // BKIN GROUP 
  let groups = []
  for(let j = 0; j < duplikat.length; j++){
  let group = []
  for(let k = 0; k < animals.length; k++){
    if(animals[k][0] === duplikat[j]){
      group.push(animals[k])
    }
  }
  groups.push(group)
}
return groups

}


// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]

