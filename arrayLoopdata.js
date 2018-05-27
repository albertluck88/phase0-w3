var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]

function dataHandling(data){
var data = input
for (var a =  0; a < data.length; a = a + 1){
  for (var b = 0; b < data[a].length; b = b + 1){

      if( b === 0 ){
        return ("Nomor ID :" + input[a][b])
      }else if( b === 1){
        return ("Nama Lengkap :" + input[a][b])
      }else if( b === 2){
        return ("TTL : " + input[a][b] + " " + input[a][b + 1]);
      }else if( b === 4){
        return ("Hobi: " + input[a][b])
      }
  }
}

}

console.log(dataHandling(input))
