// Array Remover

// Buatlah script yang dapat menghilangkan "Jambu" yang terdapat pada array berikut

function pull(arr,index) {
    arr.splice(index,1)
    return arr
}

const fruits = ['Jeruk', 'Pepaya', 'Jambu', 'Anggur', 'Melon']
console.log(pull(fruits,2))