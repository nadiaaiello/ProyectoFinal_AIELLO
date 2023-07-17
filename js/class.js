//class constructora
class producto{
    constructor(id, nombre, descripcion, precio, img){
       this.id = id,
       this.nombre = nombre,
       this.descripcion = descripcion,
       this.precio = precio,
       this.img = img
    }
 }
 
 

 //Instanciación de objetos: 
 const producto1=new producto(1, "Bon o Bon", "Bombón de chocolate con leche y oblea rellenos con crema de maní.", 100, "bonObon.jpg")

 const producto2= new producto(2, "Chicle Bubbaloo","Chicle de fresa relleno de jugoso caramelo líquido de tuttifruti.",20,"chicleBubbaloo.webp")

 const producto3= new producto(3, "Chocolate Aguila", "Barrita de chocolate amargo", 240, "chocolateAguila.png" )
 
 const producto4= new producto(4, "Chupetin POP", "Chupetin Arcor Mr POPs. Sabor blueberry con chicle tutti frutti", 50, "chupetinPop.jpg")

 const producto5= new producto(5, "Gaseosa Coca Cola", "Bebida azucarada gaseosa. 500ml", 300, "gaseosaCocaCola.png" )


 //CREAR UN ARRAY DE OBJETOS
let productos = [] 

if(localStorage.getItem("productos")){
    
    //ATENCIÓN TAMBIEN TENEMOS QUE HACERLO EN ESTANTERIA lo de tomar cada objeto y pasarlo por la class constructora
    for(let producto of JSON.parse(localStorage.getItem("productos"))){
        let productoStock = new producto(producto.id, producto.nombre, producto.descripcion, producto.precio, producto.img)
        productos.push(productoStock)
     }
}else{
    console.log(`ENTRA POR PRIMERA VEZ. SETEAMOS ARRAY`)
    productos.push(producto1, producto2, producto3, producto4, producto5)
    localStorage.setItem("productos", JSON.stringify(productos))
}