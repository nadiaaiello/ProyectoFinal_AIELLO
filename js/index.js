function menu() {
    let opcionMenu=parseInt(prompt(`Menu Kiosco Juancho
    1.Agregar productos al carrito
    2.Ver carrito
    3.Eliminar productos
    4.Elegir paquete
    5.Pagar`))

    switch(opcionMenu){
        case 1:
            elegirProducto()
        
        case 2:
            mostrarOrden()  

        case 3:
            eliminarProductos()

        case 4:
            elegirPaquete()

        case 5:
            pagar() 
            break   
        default:
            alert("Ingrese una opcion existente")    
            menu()

    } 
}

function elegirPaquete() {
    let paqueteIngresado=(prompt(`A quien le vas a regalar hoy?
    1.${paqueteFamiliar.nombre}: ${paqueteFamiliar.descripcion} - $${paqueteFamiliar.precio}
    2.${paqueteAmigos.nombre}: ${paqueteAmigos.descripcion} - $${paqueteAmigos.precio}
    3.${paquetePareja.nombre}: ${paquetePareja.descripcion} - $${paquetePareja.precio}
    4.${paquetePropio.nombre}: ${paquetePropio.descripcion} - $${paquetePropio.precio}
     `))

     switch(paqueteIngresado){
        case "1":
            paquete=paqueteFamiliar
            precio=precio+ paqueteFamiliar.precio
            break

        case "2":
            paquete=paqueteAmigos
            precio=precio+ paqueteAmigos.precio
            break

        case "3":
            paquete=paquetePareja
            precio=precio+ paquetePareja.precio
            break
        
        case "4":
            paquete=paquetePropio
            precio=precio+ paquetePropio.precio
            break


        default: 
            alert("La opcion ingresada es innexistente")
            elegirPaquete()
            break
     }
     menu()
}

function elegirProducto() {
    let productoIngresado=upperCase(prompt(`Para agregar un producto ingrese el numero que lo precede o escribe "ESC" regresar al menu.
     1.  ${BonoBon.nombre}: ${BonoBon.descripcion} - $${BonoBon.precio}
     2. ${chicleBubbaloo.nombre}: ${chicleBubbaloo.descripcion} - $${chicleBubbaloo.precio}
     3. ${chocolateAguila.nombre}: ${chocolateAguila.descripcion} - $${chocolateAguila.precio}
     4. ${chupetinPop.nombre}: ${chupetinPop.descripcion} - $${chupetinPop.precio}
     5. ${gaseosaCocaCola.nombre}: ${gaseosaCocaCola.descripcion} - $${gaseosaCocaCola.precio}`))

     while(productoIngresado!="ESC"){
        switch(productoIngresado){
            case "1":
                carrito.push(BonoBon)
                precio=precio+ BonoBon.precio
                break

            case "2":
                carrito.push(chicleBubbaloo)
                precio=precio+ chicleBubbaloo.precio
               break

            case "3":
                carrito.push(chocolateAguila)
                precio=precio+ chocolateAguila.precio
                break
            
            case "4":
                carrito.push(chupetinPop)
                precio=precio+ chupetinPop.precio
                break

            case "5":
                carrito.push(gaseosaCocaCola)
                precio=precio+ gaseosaCocaCola.precio
                break

            default: 
                alert("La opcion ingresada es innexistente")
                break
        }

        productoIngresado=upperCase(prompt(`Para agregar un producto ingrese el numero que lo precede o escribe "ESC" regresar al menu.
        1.  ${BonoBon.nombre}: ${BonoBon.descripcion} - $${BonoBon.precio}
        2. ${chicleBubbaloo.nombre}: ${chicleBubbaloo.descripcion} - $${chicleBubbaloo.precio}
        3. ${chocolateAguila.nombre}: ${chocolateAguila.descripcion} - $${chocolateAguila.precio}
        4. ${chupetinPop.nombre}: ${chupetinPop.descripcion} - $${chupetinPop.precio}
        5. ${gaseosaCocaCola.nombre}: ${gaseosaCocaCola.descripcion} - $${gaseosaCocaCola.precio}`))
   
    }
    menu()
}

function crearOrden(){
    orden=[]
    for (const x of carrito){
        orden.push(x.nombre)
    }
}

function mostrarOrden(){
    crearOrden()
    alert(`${orden}`)
    menu()
}

function eliminarProductos(){
    for (const x of carrito){
        alert(x.nombre + x.descripcion + x.precio)
        let productoEliminar=upperCase(prompt("Desea eliminar este producto? Responde SI o NO"))
        console.log(carrito.indexOf(x))
        if (productoEliminar=="SI"){
            let posicion=carrito.indexOf(x)
            carrito.splice(posicion, 1)
            precio=precio-x.precio
        }
    }
    menu()
}

function pagar(){
    crearOrden()
    alert(`Tu orden es ${orden}. Sera preparada como parte del ${paquete.nombre}. 
    Se cobrara $${precio}
    Gracias por confiar en Kiosco Juancho. Esperamos que lo disfrute!`)
}

const BonoBon={
    nombre: "Bon o Bon",
    precio: 100,
    descripcion: "Bombón de chocolate con leche y oblea rellenos con crema de maní."
}

const chicleBubbaloo={
    nombre: "Chicle Bubbaloo",
    precio: 20,
    descripcion: "Chicle de fresa relleno de jugoso caramelo líquido de tuttifruti,"
}

const chocolateAguila={
    nombre: "Chocolate Aguila",
    precio: 240,
    descripcion: "Barrita de chocolate amargo"

}

const chupetinPop={
    nombre:"Chupetin Pop",
    precio: 50,
    descripcion: "Chupetin Arcor Mr POPs Sabor blueberry con chicle tutti frutti."
}

const gaseosaCocaCola={
    nombre: "Gaseosa Coca Cola",
    precio:100,
    descripcion: "Bebida azucarada gaseosa. 500ml"
}

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


let carrito=[]
let orden=[]
let paquete=Object
let precio=0


alert("Bienvenido/a a Kiosco Juancho!");
menu()

