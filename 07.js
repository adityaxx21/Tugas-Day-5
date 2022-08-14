// 50 Bilangan Ganjil

// Buatlah script untuk mencetak bilangan ganjil antara 1 hingga 100.

function odd() {
    for (let index = 0; index <= 100; index++) {
        if (index%2 != 0) {
            console.log(index);
        }
    }
}

odd()