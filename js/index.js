const listaProductos= document.getElementById("productos__lista");
const verCarrito = document.getElementById("ver__carrito");
const productos= document.getElementById("productos");
const articulo= document.getElementsByClassName("articulo");
const carritoConteiner= document.getElementById("carrito__conteiner");



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
            toast.info('Producto agregado', {
                position: "bottom-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            carrito.push({
                id:product.id,
                nombre:product.nombre,
                precio: product.precio,
                img: product.img,
            });
            console.log(carrito);
        });
});

const guardarCompra= () => {
    localStorage.setItem ("guardarCompra", JSON.stringify(carrito))
};

const construirCarrito=()=>{
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
    // let eliminar= document.createElement("button")
    //     eliminar.innerText="x"
    //     carritoIndividual.append(eliminar)
    //     eliminar.addEventListener("click", eliminarProducto)

    })
    
    
    const total= carrito.reduce((acc,el) => acc + el.precio,0)
    const totalBuying= document.createElement("div");
    totalBuying.className= "total__contenido";
    totalBuying.innerHTML= `total a pagar: ${total} $`;
    carritoConteiner.append(totalBuying)
    
    
    
}

verCarrito.addEventListener("click", construirCarrito());

