let carritoBoton = document.getElementsByClassName("carrito__boton");
let carritoLista= document.getElementsByClassName("carrito__lista")
let comprarBoton= document.getElementsByClassName("comprar__boton")
let articulo= document.getElementsByClassName("articulo")
let carritoConteiner= document.getElementsByClassName("carrito__conteiner")

const productos=[
    {nombre: "My melody",
    precio: parseFloat(2035)},
    {nombre: "My melody 2",
    precio: parseFloat(2036)},
    {nombre: "My melody 3",
    precio: parseFloat(2037)},
]

let carrito=[];

productos.forEach((articulo) =>{
    let  content = document.createElement("li");
    content.innerHTML= 
        `<h3>$(articulo.nombre)</h3>
        <p>$(articulo.precio)</p>`

        
})

comprarBoton.addEventListener
carritoBoton.addEventListener("click", () => {
    const visualCarrito = document.createelement("div");
        visualCarrito.classname ="carrito__header"
        visualCarrito.innerHTML = `<h2 class="carrito__header--titulo">Mis compras:</h2>`;
        carritoConteiner.append(visualCarrito);

    carrito.forEach((articulo)=>{
        let carritoContent=document.createElement ("div");
        carritoContent.innerHTML=
        `<img src= $(product.img)>
        <h3>$(product.nombre)</h3>
        <p>$(product.precio)</p>`

        carritoConteiner.append(carritoContent)
    
    const total= carrito.reduce((acc,el) => acc+ el.precio,0)
        const totalBuying= document.createelement(div)
        totalBuying.classname="total__contenido"
        totalBuying.innerHTML`total a pagar: $(total) $`
        carritoConteiner.append(totalBuying)

    })
});


// console.log (carritoBoton)
// agregarBoton.addeventlistener("click", function()){
// }