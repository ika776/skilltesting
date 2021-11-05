const reserveWord = (str) => {
    let a = str.split(" ")
    let reversed = a.map(el => {
        return el.split("").reverse().join("")
    })
    return reversed.join(" ")
};
 console.log(reserveWord("I am A Great human"));