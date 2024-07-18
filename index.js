function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Exemple d'utilisation
const year = 2024
if (isLeapYear(year)) {
    console.log(`${year} est une année bissextile.`);
} else {
    console.log(`${year} n'est pas une année bissextile.`);
}

