import re
import hashlib

# Check password strength with advanced checks
def check_password_strength(password):
    strength = 0

    if len(password) >= 12:
        strength += 1
    if re.search(r'[A-Z]', password):
        strength += 1
    if re.search(r'[a-z]', password):
        strength += 1
    if re.search(r'[0-9]', password):
        strength += 1
    if re.search(r'[@$!%*?&]', password):
        strength += 1
    if not re.search(r'(password|1234|qwerty)', password, re.IGNORECASE):
        strength += 1

    hash_object = hashlib.sha256(password.encode())
    hashed_password = hash_object.hexdigest()

    if strength <= 2:
        return 'Weak Password', hashed_password
    elif strength <= 4:
        return 'Moderate Password', hashed_password
    else:
        return 'Strong Password', hashed_password

password = input("Enter a password to check: ")
result, hashed = check_password_strength(password)
print(f"{result}\nHashed Password: {hashed}")