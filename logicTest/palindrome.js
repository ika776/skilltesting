// Radar                 # --> palindrome
// Malam                 # --> palindrome
// Kasur ini rusak       # --> palindrome
// Ibu Ratna antar ubi   # --> palindrome
// Malas                 # --> not palindrome
// Makan nasi goreng     # --> not palindrome
// Balonku ada lima      # --> not palindrome

const palindrome = (str) => {
    let a = str.split('').reverse().join('').toLowerCase();
    if(a == str.toLowerCase()){
        return "palindrome"
    }else{
        return "not palindrome"
    }
};
 console.log(palindrome("Radar"));
 console.log(palindrome("Malam"));
 console.log(palindrome("Kasur ini rusak"));
 console.log(palindrome("Ibu Ratna antar ubi"));
 console.log(palindrome("Malas"));
 console.log(palindrome("Makan nasi goreng"));
 console.log(palindrome("Balonku ada lima"));

