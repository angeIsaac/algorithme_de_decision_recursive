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


function determineTicketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else if (age >= 18) {
        return 20;
    } else {
        return "Âge invalide";
    }
}

// Demande de l'âge à l'utilisateur
const age = 12

// Vérification si l'âge est un nombre valide
if (isNaN(age) || age < 0) {
    console.log("Veuillez entrer un âge valide.");
} else {
    // Détermination du prix du billet
    const ticketPrice = determineTicketPrice(age);
    if (typeof ticketPrice === "number") {
        console.log(`Le prix du billet est de ${ticketPrice} $.`);
    } else {
        console.log(ticketPrice);
    }
}


function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Exemple d'utilisation
const n = parseInt(23);
if (isNaN(n) || n < 0) {
    console.log("Veuillez entrer une position valide (un nombre entier non négatif).");
} else {
    const result = fibonacci(n);
    console.log(`Le ${n}-ième nombre de Fibonacci est : ${result}`);
}


