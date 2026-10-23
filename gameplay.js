function generateSecretCombination() {
    const secret = [];

    while (secret.length < 4) {
        const digit = Math.floor(Math.random() * 9) + 1;
        // Se digit non è già presente in secret, aggiungila
        if (!secret.includes(digit)) {
            secret.push(digit)
        }
    }

    return secret;
}

function checkAttemptCombination(secretCombination, attempt) {
    let strike = 0
    let ball = 0
    for (let i = 0; i < attempt.length; i++) {
        const digit = attempt[i];
        if (secretCombination[i] === digit) {
            strike++
        }
        else if (secretCombination.includes(digit)) {
            ball++
        }

    }

    return {
        strike: strike,
        ball: ball
    }
}
export { generateSecretCombination, checkAttemptCombination };
