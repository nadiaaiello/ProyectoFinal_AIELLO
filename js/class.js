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
async function cargarStock(){
    const resp= await fetch("productos.json")
    const data= await resp.json()
    for(let a of data){
      let productoData = new producto(a.id, a.nombre, a.descripcion, a.precio, a.img, producto.cantidad)
      stock.push(productoData)
      console.log(stock)
  }
  localStorage.setItem("stock", JSON.stringify(stock))
}


//YA HABIA ENTRADO
if (localStorage.getItem("stock")){
   stock=JSON.parse(localStorage.getItem("stock"))

}
//ENTRA POR PRIMERA VEZ
else{
   cargarStock()
   console.log(stock)
}

