//CAPTURAR DOM
let divProductos=document.getElementById("productos")
let selectOrder=document.getElementById("selectOrden")


//OBJETOS
const bonObon={
    nombre: "Bon o Bon",
    precio: 100,
    descripcion: "Bombón de chocolate con leche y oblea rellenos con crema de maní.",
    img:"bonObon.jpg",
    id:1
}

const chicleBubbaloo={
    nombre: "Chicle Bubbaloo",
    precio: 20,
    descripcion: "Chicle de fresa relleno de jugoso caramelo líquido de tuttifruti.",
    img:"chicleBubbaloo.webp",
    id:2
}

const chocolateAguila={
    nombre: "Chocolate Aguila",
    precio: 240,
    descripcion: "Barrita de chocolate amargo",
    img:"chocolateAguila.png",
    id:3

}

const chupetinPop={
    nombre:"Chupetin Pop",
    precio: 50,
    descripcion: "Chupetin Arcor Mr POPs Sabor blueberry con chicle tutti frutti.",
    img:"chupetinPop.jpg",
    id:4
}

const gaseosaCocaCola={
    nombre: "Gaseosa Coca Cola",
    precio:100,
    descripcion: "Bebida azucarada gaseosa. 500ml",
    img:"gaseosaCocaCola.png",
    id:5

}

const productos=[bonObon,chicleBubbaloo,chocolateAguila,gaseosaCocaCola,chupetinPop]

const productosEnCarrito=[]


const paqueteFamiliar={
    nombre: "Paquete Familiar",
    precio:100,
    descripcion: "Incluye canasta, empapelado color verde y una carta personalizada."
}

const paqueteAmigos={
    nombre: "Paquete Amigos",
    precio:120,
    descripcion: "Incluye caja cuadrada, empapelado color azul y un regalo sorpresa."
}

const paquetePareja={
    nombre: "Paquete Pareja",
    precio:150,
    descripcion: "Incluye caja en forma de corazon, empapelado color rojo y una carta personalizada con fotos opcionales."
}

const paquetePropio={
    nombre: "Paquete Auto-regalo",
    precio:50,
    descripcion: "Incluye bolsa, empapelado color violeta."
}


//FUNCTIONS
function agregarAlCarrito(producto){
    let productoAgregado = productosEnCarrito.find((elem)=>elem.id == producto.id) 
    if(productoAgregado == undefined){
       productosEnCarrito.push(producto)
       localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
       console.log(productosEnCarrito)
 
       //alert para agregar libro
       Swal.fire({
          title: `Ha agregado un producto al carrito`,
          text:`${producto.nombre} ha sido agregado`,
          confirmButtonColor: "green",
          confirmButtonText : "Gracias :D",
          imageUrl: `assets/${libro.imagen}`,
          imageHeight: 200
 
       })
    }else{
        Swal.fire({
           title: `El producto ya existe en el carrito`,
           icon: "info",
           //tiempo de aparición: en milisegundos
           timer: 3000,
           showConfirmButton: false
  
        })
     }
  }

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
        let libroAgregado = productosEnCarrito.find((elem)=>elem.id == elemento.id) 
        //me devuelve sino encuentra undefined, si encuenta el elemento
        if(libroAgregado == undefined){
           //código para sumar al array carrito
           productosEnCarrito.push(elemento)
           localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
           console.log(productosEnCarrito)
     
           //alert para agregar libro
           alert(
     `Ha agregado un producto al carrito`,
  
   
         )

           
        }else{
           //sumar uno a cantidad
           // console.log(`El libro ${libro.titulo} ya existe en el carrito `)
     
           //Sweetalert 
           Swal.fire({
              title: `El libro ya existe en el carrito`,
              icon: "info",
              //tiempo de aparición: en milisegundos
              timer: 2000,
              showConfirmButton: false
     
           })
        }
     }



function agregarProducto(){


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