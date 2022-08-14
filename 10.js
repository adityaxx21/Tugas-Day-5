// Add to Array

// Buatlah script untuk menambahkan kata "Handuk" ke awal array, dan "Celana" ke akhir array.


function add(arr) {
    arr.splice(0, 0, "Handuk");
    arr.splice(arr.length, 0, "Celana");
    return arr
}


const stuff = ['Meja', 'Buku', 'Topi', 'Baju', 'Kayu']
console.log(add(stuff))