function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

document.getElementById("menuBtn").addEventListener("click", openNav);

// Nuevo: Mostrar el menú al pasar el ratón por la izquierda
document.addEventListener("mousemove", function (event) {
    // Ajusta la distancia desde el borde izquierdo para activar el menú
    if (event.clientX < 20) {
        openNav();
    }
});

// Cerrar el menú al salir del área del menú
document.getElementById("mySidenav").addEventListener("mouseleave", function () {
    closeNav();
});