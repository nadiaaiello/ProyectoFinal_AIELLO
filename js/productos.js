//CAPTURAR DOM
let divProductos=document.getElementById("productos")
let selectOrder=document.getElementById("selectOrden")
let botonCarrito=document.getElementById("botonCarrito")
let modalCarrito=document.getElementById("modal-bodyCarrito")


let productosEnCarrito = []
if(localStorage.getItem("carrito")){
   for(let producto of JSON.parse(localStorage.getItem("carrito"))){
      let productoStorage = new producto(producto.id, producto.nombre,producto.descripcion, producto.precio, producto.img)
      productosEnCarrito.push(productoStorage)
   }
   console.log(productosEnCarrito)
}else{
   productosEnCarrito = []
   localStorage.setItem("carrito", productosEnCarrito)
}


//FUNCTIONS
function ordenarAlfabeticamente() {   
}

function printProductos(array){
    for(let elemento of array){
        let nuevoProducto=document.createElement("div")
        nuevoProducto.className="col-9 col-lg-4"
    
        nuevoProducto.innerHTML=`<div class="card" id="${elemento.id}">
                                <img src="../img/productos/${elemento.img}">
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
        //preguntar si existe ese libro en el array
        let productoAgregado = productosEnCarrito.find((elem)=>elem.id == elemento.id) 
        //me devuelve sino encuentra undefined, si encuenta el elemento
        if(productoAgregado == undefined){
           //código para sumar al array carrito
           productosEnCarrito.push(elemento)
           localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
           console.log(productosEnCarrito)
     
           //alert para agregar libro
           alert(
     `Ha agregado un producto al carrito`,
  
   
         )

           
        }else{
           alert("El producto ya existe en el carrito")
        }
     }


function verCarrito(array){
   modalCarrito.innerHTML = ``
   for(let elemento of array){
    let nuevoProducto=document.createElement("div")
    nuevoProducto.className="col-9 col-lg-4"
    nuevoProducto.innerHTML=`<div class="card" id="${elemento.id}">
                            <img src="../img/productos/${elemento.img}">
                            <div class="card-body">
                            <h4>${elemento.nombre}</h4>
                            <p>${elemento.descripcion}<p/>
                            <b class="d-inline me-3">$${elemento.precio}</b>
                            <button id='agregarBtn${elemento.id}'><i class="bi bi-cart4"></i>Agregar al carrito</button>
                            </div>
                        </div>`

modalCarrito.appendChild(nuevoProducto)}}

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

printProductos(productos)


//EVENTOS
selectOrden.addEventListener("change",()=>{
    switch (selectOrden.value) {
        case "1":
            resetDivProductos()
            ordenarMayorMenor(productos)
            break;
        
        case "2":
            resetDivProductos()
            ordenarMenorMayor(productos)  
        break     
        
        case "3":
            resetDivProductos()
            ordenarAlfabeticamente(productos) 

        break 
        default:
            resetDivProductos()
            printProductos(productos)
            break;
    }
}

)

botonCarrito.addEventListener("click",()=>{
verCarrito(productosEnCarrito)})