document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    // Obtiene los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const apodo = document.getElementById('apodo').value;
    const sexo = document.querySelector('input[name="sexo"]:checked').value;

    // Almacena los valores en localStorage
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('apodo', apodo);
    localStorage.setItem('sexo', sexo);

    // Redirige a la página de bienvenida
    window.location.href = 'index_2.html';
});