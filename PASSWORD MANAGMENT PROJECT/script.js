function checkStrength() {
    const password = document.getElementById('password').value;
    const result = document.getElementById('result');
    let strength = 0;

    if (password.length >= 12) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[@$!%*?&]/.test(password)) strength++;

    if (strength <= 2) {
        result.textContent = 'Weak Password';
        result.style.color = 'red';
    } else if (strength === 3 || strength === 4) {
        result.textContent = 'Moderate Password';
        result.style.color = 'orange';
    } else {
        result.textContent = 'Strong Password';
        result.style.color = 'green';
    }
}

function generatePassword() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@$!%*?&";
    let password = "";
    for (let i = 0; i < 16; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('generated-password').textContent = 'Generated Password: ' + password;
    document.getElementById('generated-password').style.color = 'blue';
}