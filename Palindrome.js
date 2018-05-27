function palindrome(kata) {
var pisahKata = kata.split("")
var balikKata = pisahKata.reverse("").join("")

return Boolean(kata === balikKata)

}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
