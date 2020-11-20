

let atraparDatos = () => {
    let email = document.getElementById('txtEmail').value
    let contraseña = document.getElementById('txtContraseña').value

    return { email: email, contraseña: contraseña }
}

let validarInicioSesion = () => {
    let body = atraparDatos();
    let mensaje = document.getElementById("mensaje")
    let data = ""
    axios.post("http://localhost:3000/api/v1/login", body).then(respuesta => {
        if (respuesta.data.mensaje === "inicio de sesion correcto") {
            document.location.href = 'http://127.0.0.1:5500/index2.html'
        } else {
            data = `<div class="alert alert-danger" role="alert">
            ${respuesta.data.mensaje} <a href="#" class="alert-link"></a>
            </div>`
            mensaje.innerHTML = data
        }
    }).catch(error => {
        console.log(error)
    })
}

let listarExcursiones = () => {
    let data = ""
    axios.get("http://localhost:3000/api/v1/excursiones").then(respuesta => {
        console.log(respuesta.data)
        let lista = document.getElementById("listaExcursiones")
        for (let i = 0; i < respuesta.data.length; i++) {
            let excursion = respuesta.data[i]
            data += `<div class="col-md-4 col-sm-4">`
            data += `<div class="item">`
            data += `<div class="courses-thumb">`
            data += `<div class="courses-top">`
            data += `<div class="courses-image">`
            data += `<div class="video-responsive">`
            data += `<iframe src="${excursion.url}" frameborder="0" allowfullscreen></iframe>`
            data += `</div>`
            data += `</div>`
            data += `<div class="courses-date">`
            data += `<span><i class="fa fa-calendar"></i> ${excursion.fecha}</span>`
            data += `<span><i class="fa fa-map"></i> ${excursion.nombre}</span>`
            data += `</div>`
            data += `</div>`
            data += `<div class="courses-detail">`
            data += `<p>${excursion.descripcion}</p>`
            data += `</div>`
            data += `<div class="courses-info">`
            data += `<div class="courses-author">`
            data += `<i class="fa fa-users" alt="" style="padding:1em"></i>`
            data += `<span>${excursion.nombres} ${excursion.apellidos}</span>`
            data += `</div>`
            data += `</div>`
            data += `</div>`
            data += `</div>`
            data += `</div>`
        }
        lista.innerHTML = data;
    }).catch(error => {
        console.log(error)
    })
}

listarExcursiones();