// Loop with Range

// Buatlah script untuk mencetak dengan rentang angka tertentu.
// Contoh

// Input pertama: 4
// Input kedua: 8
// Output di browser: 4, 5, 6, 7, 8

function range(a,b) {
    text = '';
    for (let index = a; index <= b; index++) {
        if (index < b) {
            text += index + ", "
        } else {
            text += index 
        }
    }  
    return text
}
console.log(range(4,8));

