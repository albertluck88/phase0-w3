function balikKata(kata){
  var pisahKata = kata.split("")
  var jmlhHuruf = pisahKata.length
  var tampungHuruf = []
  for(angka = jmlhHuruf - 1 ; 0 <= angka; angka--){
    tampungHuruf.push(pisahKata[angka])
  }

    return tampungHuruf.join("")
}

console.log(balikKata("Hello World!"))
