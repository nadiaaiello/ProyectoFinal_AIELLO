function personaRegalo() {
    return (prompt("A quien le vas a regalar hoy? Tenemos paquetes para amigos, pareja, familiares y autoregalos"))
}
function agregarProductos() {
    let productoIngresado=prompt("Agrega un producto.")
    let carrito=[productoIngresado]
    while(productoIngresado!="ESC"){
     productoIngresado=prompt("Agrega un producto o ingresa ESC para finalizar la operacion.")
    carrito.push(productoIngresado)
    }
    carrito.pop()
    return(carrito)

}


alert("Bienvenido/a a Kiosco Juancho!");
let persona= personaRegalo()
console.log(persona)
let orden=agregarProductos()
console.log("Tu orden es " + orden + ". Sera enviada a " +  persona + ".")