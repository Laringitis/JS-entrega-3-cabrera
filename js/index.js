const listaProductos= document.getElementById("productos__lista");
const verCarrito = document.getElementById("ver__carrito");
const productos= document.getElementById("productos");
const articulo= document.getElementsByClassName("articulo");
const carritoConteiner= document.getElementById("carrito__conteiner");
const titulo= document.getElementsByClassName("titulo")


let carrito= JSON.parse(localStorage.getItem("guardarCompra")) || [];

producto.forEach((product) => {
    let  content = document.createElement("li");
    content.innerHTML= `
        <img class="img" src= "${product.img}">
        <h3> ${product.nombre}</h3>
        <p> ${product.precio}</p>
        `;
        listaProductos.append(content);

        let comprar= document.createElement("button")
        comprar.className="pointer";
        comprar.innerText = "comprar";
        content.append(comprar);

        comprar.addEventListener("click", () =>{
        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
            carrito.push({
                id:product.id,
                nombre:product.nombre,
                precio: product.precio,
                img: product.img,
            });
            guardarCompra();
            alertaAgregado();
            console.log(carrito);
        });
});

const guardarCompra= () => {
    localStorage.setItem ("guardarCompra", JSON.stringify(carrito))
};

const construirCarrito= () => {
carritoConteiner.innerHTML="";
carritoConteiner.style.display= "flex";
const visualCarrito = document.createElement("div");
    visualCarrito.className ="carrito__header";
    visualCarrito.innerHTML = `<h2 class="carrito__header--titulo">Mis compras:</h2>`
        carritoConteiner.append(visualCarrito);

        const cerrarCarrito=document.createElement("h1");
        cerrarCarrito.className="pointer";
        cerrarCarrito.innerText="❌";
        cerrarCarrito.addEventListener("click", ()=>{
            carritoConteiner.style.display= "none";
        })
        visualCarrito.append(cerrarCarrito);

carrito.forEach((product)=>{
    const carritoIndividual = document.createElement ("div");
    carritoIndividual.className="carrito__lista";
    carritoIndividual.innerHTML=`
    <img class="img__producto" src= "${product.img}">
    <h3 class="lista titulo__producto">${product.nombre}</h3>
    <p class="lista">${product.precio}</p>
    <button class ="botonEliminarProducto">X</button>
    `;
    carritoConteiner.append(carritoIndividual)     

    const eliminarProducto = (id) =>{
        const foundId= carrito.find ((element) => element.id === id);
        console.log (foundId)
    
        carrito=  carrito.filter((carrtitoId) => {
            return carrtitoId !== foundId;
        })
        construirCarrito();
        guardarCompra();
    }

    let eliminar =carritoIndividual.querySelector(".botonEliminarProducto")

    eliminar.addEventListener("click", ()=>{
        eliminarProducto(product.id);
    })
    guardarCompra()
})
    
    const total= carrito.reduce((acc,el) => acc + el.precio,0)
    const totalBuying= document.createElement("div");
    totalBuying.className= "total__contenido";
    totalBuying.innerHTML= `total a pagar: ${total} $`;
    carritoConteiner.append(totalBuying)
}

verCarrito.addEventListener("click", () =>{
    construirCarrito();
})

//toastify//
function alertaAgregado () {
Toastify({

    text: "¡Producto agregado!",
    duration: 2000,
    gravity: "bottom",
    position: "left",
    style: {
        background: "rgb(255,201,0)",
        background: "radial-gradient(circle, rgba(255,201,0,1) 0%, rgba(253,45,196,1) 100%)",
    },
    }).showToast();
}

//ubicacion//
navigator.geolocation.getCurrentPosition(mostrarUbicacion);

function mostrarUbicacion (pos){
    const latitud= pos.coords.latitude;
    const long= pos.coords.longitude;
    console.log (latitud, long)
    //api clima//
    fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${long}&appid=4aedee8100501fd1c48a59e3da401501&upits=metric&lang=es`)
        .then (response=>response.json())
        .then (data=>{
            console.log(data)
            const clima= document.createElement("div");
            clima.innerHTML= `<p>¡${data.weather[0].description} el clima ideal para comprar! </p>
            `
            carritoConteiner.append(clima)
            })

//     //api maps//
//     function initMap() {
//         const bounds = new google.maps.LatLngBounds();
//         const markersArray = [];
//         const map = new google.maps.Map(document.getElementById("map"), {
//         center: { lat: 55.53, lng: 9.4 },
//         zoom: 10,
//         });
//         const geocoder = new google.maps.Geocoder();
//     const service = new google.maps.DistanceMatrixService();
//     const origin = { latitud, long };
//     const destination= { lat: -34.6037389, lng: -58.3815704 };

//     function callback(status) {
//         if (status == 'OK') {
//         let distance = element.distance.text;
//         console.log(distance)
//     }
//     }
//     service.getDistanceMatrix({
//         origins: [origin],
//         destinations: [destination],
//         travelMode: google.maps.TravelMode.DRIVING,
//         unitSystem: google.maps.UnitSystem.METRIC,
//         avoidHighways: false,
//         avoidTolls: false,
//     }, callback);
// }
}
