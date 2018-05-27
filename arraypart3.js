var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(array){

 var tasSplice = array.splice(1, 4,  "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro")
 var tampungHuruf = array[3].split("/")
 var gabungTampung = tampungHuruf.join("-")
 tampungHuruf.sort(function(a, b) { return b - a});
 var bulan = tampungHuruf[2]
 var tampungNama = array[1].slice(0,15)
 switch(bulan){
   case "01" : {
      var namaBulan = "Januari"
      break
   }
   case "02" : {
     var namaBulan = "Februari"
     break
   }
   case "03" : {
     var namaBulan = "Maret"
     break
   }
   case "04" : {
     var namaBulan = "April"
     break
   }
   case "05" : {
     var namaBulan = "Mei"
     break
   }
   case "06" : {
     var namaBulan = "Juni"
     break
   }
   case "07" : {
     var namaBulan = "Juli"
     break
   }
   case "08" : {
     var namaBulan = "Agustus"
     break
   }
   case "09" : {
     var namaBulan = "September"
     break
   }
   case "10"  : {
     var namaBulan = "Oktober"
     break
   }
   case "11"  : {
     var namaBulan = "November"
     break
   }
   case "12"  : {
     var namaBulan = "Desember"
     break
   }
   default: {
     return "tidak ada"
   }
 }

return array + "\n" + namaBulan + "\n" + tampungHuruf + "\n" + gabungTampung + "\n" + tampungNama


}


console.log(dataHandling2(input))
