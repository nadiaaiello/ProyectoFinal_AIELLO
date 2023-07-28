//CAPTURAR DOM
let divProductos=document.getElementById("productos")
let selectOrder=document.getElementById("selectOrden")
let botonCarrito=document.getElementById("botonCarrito")
let modalCarrito=document.getElementById("modal-bodyCarrito")
let botonFinalizarCompra=document.getElementById("botonFinalizarCompra")


//FUNCTIONS
function printProductos(array){
    for(let elemento of array){
        let nuevoProducto=document.createElement("div")
        nuevoProducto.className="col-9 col-lg-4"
    
        nuevoProducto.innerHTML=`<div class="card m-2" id="${elemento.id}">
                                <img src="./img/productos/${elemento.img}" style="max-height: 427px">
                                <div class="card-body">
                                <h4>${elemento.nombre}</h4>
                                <p>${elemento.descripcion}<p/>
                                <b class="d-inline me-3">$${elemento.precio}</b>
                                <button id='agregarBtn${elemento.id}'><i class="bi bi-cart4"></i>Agregar al carrito</button>
                                </div>
                            </div>`
    
    divProductos.appendChild(nuevoProducto)  
    let agregarBtn = document.getElementById(`agregarBtn${elemento.id}`)

    agregarBtn.addEventListener("click", () => {
       agregarAlCarrito(elemento)
    })
    } 
}                    

function agregarAlCarrito(elemento) {
        //si la cantidad es igual a 0, agregar al carrito
        let productoAgregado = productosEnCarrito.find((elem)=>elem.id == elemento.id) 
        //me devuelve sino encuentra undefined, si encuenta el elemento
        if(productoAgregado == undefined){
           //código para sumar al array carrito
           productosEnCarrito.push(elemento)
           localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito))
           console.log(productosEnCarrito)
           
        
           
        }else{
            
        }
     }


function printCarrito(array){
   modalCarrito.innerHTML = ``
   if (array.length>0){
    botonFinalizarCompra.className="d-block btn btn-success"
    for(let elemento of array){
        let producto=document.createElement("div")
        producto.className="d-flex"
        producto.innerHTML=`<div id="${elemento.id}" style="display:flex; align-items:center; border-style:solid; border-width:0.5px; border-color:grey">
                                <img src="./img/productos/${elemento.img}" style="width:150px; display:inline; margin:5px">
                                <div style="margin:5px">
                                <h4>${elemento.nombre}</h4>
                                <p>Cantidad:${elemento.cantidad}</p>
                                <b class="d-inline me-3">$${elemento.precio}</b>
                                <b class="d-inline me-3">$${elemento.precio * elemento.cantidad}</b>
                                </div>
                            </div>`
    
    modalCarrito.appendChild(producto)}
   }
   else{
    modalCarrito.innerHTML='<p>El carrito esta vacio</p>'
    botonFinalizarCompra.className="d-none"
   }

}

function ordenarMenorMayor(array) {
    const menorMayor= [].concat(array)
    menorMayor.sort((a,b) => a.precio-b.precio)
    printProductos(menorMayor)
}

function ordenarMayorMenor(array){
    const mayorMenor= [].concat(array)
    mayorMenor.sort((a,b) => b.precio-a.precio)
    printProductos(mayorMenor)
}

function resetDivProductos(){
    divProductos.innerHTML=``
}

function ordenarAlfabeticamente(array){
    const arrayAlfabetico = [].concat(array)
    arrayAlfabetico.sort( (a,b) =>{
       if (a.nombre > b.nombre) {
          return 1
        }
        if (a.nombre < b.nombre) {
          return -1
        }
        return 0
    }
    )
    printProductos(arrayAlfabetico)}



function calcularPrecio(elemento){
    precioTotal+=(elemento.precio * elemento.cantidad)
}

//EVENTOS
selectOrden.addEventListener("change",()=>{
    switch (selectOrden.value) {
        case "1":
            resetDivProductos()
            ordenarMayorMenor(stock)
            break;
        
        case "2":
            resetDivProductos()
            ordenarMenorMayor(stock)  
        break     
        
        case "3":
            resetDivProductos()
            ordenarAlfabeticamente(stock) 

        break 
        default:
            resetDivProductos()
            printProductos(stock)
            break;
    }
}

)

botonCarrito.addEventListener("click",()=>{
printCarrito(productosEnCarrito)})

botonFinalizarCompra.addEventListener("click",()=>{
    for (let elem of productosEnCarrito){
        calcularPrecio(elem)
        elem.cantidad=1
    };
    localStorage.removeItem("productosEnCarrito")
    productosEnCarrito=[]
    Swal.fire({
        text:`Su compra tiene un total de $${precioTotal}. Gracias por confiar en Kiosco Juancho`},
        '',
        'success'
      )
    precioTotal=0

})


//INICIO DE LA APLICACION

let productosEnCarrito = []
let precioTotal =0

if (localStorage.getItem("productosEnCarrito")){
    productosEnCarrito=JSON.parse(localStorage.getItem("productosEnCarrito"))
}
else{
    localStorage.setItem("productosEnCarrito",JSON.stringify(productosEnCarrito))
}

console.log(stock)
printProductos(stock)