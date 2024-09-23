document.addEventListener('DOMContentLoaded', function () {
    cargarProductos();

    document.getElementById('formProducto').addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(this);

        fetch('insertar.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
            cargarProductos();
        });
    });
});

function cargarProductos() {
    fetch('obtener_productos.php')
    .then(response => response.json())
    .then(data => {
        let tablaProductos = document.getElementById('tablaProductos');
        tablaProductos.innerHTML = '';

        data.forEach(producto => {
            let fila = `
                <tr>
                    <td>${producto.idProd}</td>
                    <td>${producto.Nombre}</td>
                    <td>${producto.Precio}</td>
                    <td>${producto.Existencia}</td>
                    <td><button onclick="eliminarProducto(${producto.idProd})">Eliminar</button></td>
                </tr>
            `;
            tablaProductos.innerHTML += fila;
        });
    });
}

function eliminarProducto(idProd) {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
        fetch('eliminar.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `idProd=${idProd}`
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
            cargarProductos();
        });
    }
}