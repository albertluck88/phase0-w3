var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]

function dataHandling(data){
return "Nomor ID:" + data[0][0] + "\n" + "Nama Lengkap:"  + data[0][1] + "\n" + "TTL:" + data[0][2] + " "  + data[0][3] + "\n" + "Hobi:" + data[0][4]
+ "\n\n" + "Nomor ID:" + data[1][0] + "\n" + "Nama Lengkap:"  + data[1][1] + "\n" + "TTL:" + data[1][2] + " "  + data[1][3] + "\n" + "Hobi:" + data[0][4]
+ "\n\n" + "Nomor ID:" + data[2][0] + "\n" + "Nama Lengkap:"  + data[2][1] + "\n" + "TTL:" + data[2][2] + " "  + data[2][3] + "\n" + "Hobi:" + data[2][4]
+ "\n\n" + "Nomor ID:" + data[3][0] + "\n" + "Nama Lengkap:"  + data[3][1] + "\n" + "TTL:" + data[3][2] + " "  + data[3][3] + "\n" + "Hobi:" + data[3][4]

}

console.log(dataHandling(input))
