const listaProductos= document.getElementById("productos__lista");
const verCarrito = document.getElementById("ver__carrito");
const productos= document.getElementById("productos");
const articulo= document.getElementsByClassName("articulo");
const carritoConteiner= document.getElementById("carrito__conteiner")


const guardarCompra= () =>{
    localStorage.setItem ("guardarCompra", JSON.stringify(carrito))};
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
            carrito.push({
                id:product.id,
                nombre:product.nombre,
                precio: product.precio,
                img: product.img,
            });
            guardarCompra();
        });
});



verCarrito.addEventListener("click", ()=>{
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
        let carritoContent=document.createElement ("div");
        carritoContent.className="carrito__lista";
        carritoContent.innerHTML=`
        <img class="img__producto" src= "${product.img}">
        <h3 class="lista titulo__producto">${product.nombre}</h3>
        <p class="lista">${product.precio}</p>`
            carritoConteiner.append(carritoContent)            
        })

    const total= carrito.reduce((acc,el) => acc + el.precio,0)
        const totalBuying= document.createElement("div");
        totalBuying.className= "total__contenido";
        totalBuying.innerHTML= `total a pagar: ${total} $`;
            carritoConteiner.append(totalBuying)
});

