function cekBilanganPrima(n) {
    if (n <= 1) {
        return false;
    }
    if (n <= 3) {
        return true;
    }
    if (n % 2 === 0 || n % 3 === 0) {
        return false;
    }
    let i = 5;
    while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}

const deretBilanganPrima = (n) => {
    const bilanganPrima = [];
    for (let i = 2; i < n; i++) {
        if (cekBilanganPrima(i)) {
            bilanganPrima.push(i);
        }
    }
    return bilanganPrima;
}

module.exports = deretBilanganPrima