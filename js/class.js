//class constructora
class producto{
    constructor(id, nombre, descripcion, precio, img){
       this.id = id,
       this.nombre = nombre,
       this.descripcion = descripcion,
       this.precio = precio,
       this.img = img
       this.cantidad= 1
    }
 }
 
 


 //CREAR UN ARRAY DE OBJETOS
let stock = []
const cargarStock = async () =>{
   const res = await fetch("productos.json")
   const data = await res.json()

   for(let producto of data){
       let productoData = new producto(producto.id, producto.nombre, producto.descripcion, producto.precio, producto.img, producto.cantidad)
       stock.push(productoData)
   }
   localStorage.setItem("stock", JSON.stringify(stock))
}

if (localStorage.getItem("stock")){
   stock=JSON.parse(localStorage.getItem("stock"))
}
else{
   localStorage.setItem("stock",JSON.stringify(stock))
}

