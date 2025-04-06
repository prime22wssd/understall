// Datos de ejemplo (puedes cambiar o añadir más usuarios)
const usuarios = {
    "admin": "Admin1234!",
    "user1": "User1234!"
};

// Seleccionar elementos del DOM
const loginForm = document.getElementById('loginForm');
const welcomeMessage = document.getElementById('welcome-message');
const userNameSpan = document.getElementById('user-name');
const loginFormContainer = document.getElementById('login-form');
const logoutButton = document.getElementById('logout-button');

// Verificar si el usuario ya está logueado en localStorage
window.onload = () => {
    const usuarioLogueado = localStorage.getItem('usuarioLogueado');
    
    if (usuarioLogueado) {
        loginFormContainer.style.display = 'none';
        welcomeMessage.style.display = 'block';
        userNameSpan.textContent = usuarioLogueado;
    }
};

// Función para manejar el login
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la página se recargue

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validación de contraseña (letras, números, y símbolos)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
        alert('La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un símbolo.');
        return;
    }

    // Verificar las credenciales
    if (usuarios[username] && usuarios[username] === password) {
        // Si las credenciales son correctas
        localStorage.setItem('usuarioLogueado', username);  // Guardar el usuario en localStorage
        loginFormContainer.style.display = 'none';  // Ocultar formulario
        welcomeMessage.style.display = 'block';  // Mostrar mensaje de bienvenida
        userNameSpan.textContent = username;  // Mostrar nombre de usuario
    } else {
        // Si las credenciales son incorrectas
        alert('¡Usuario o contraseña incorrectos!');
    }
});

// Función para cerrar sesión
logoutButton.addEventListener('click', () => {
    localStorage.removeItem('usuarioLogueado'); // Eliminar usuario logueado de localStorage
    loginFormContainer.style.display = 'block';  // Mostrar formulario
    welcomeMessage.style.display = 'none';  // Ocultar mensaje de bienvenida
});

