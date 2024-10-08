import creatItem from "./services/itens.js"
import * as cartService from "./services/cart.js"

const Mycart = []
const MyWhishList = []

console.log("Welcome to yor cart!!\n")

const item1 = await creatItem("hotwheels Ferrari", 20.99, 1)
const item2 = await creatItem("hotwheels Lamborguini", 39.99, 3)

await cartService.addItem(Mycart, item1)
await cartService.addItem(Mycart, item2)

await cartService.displayCart(Mycart)


await cartService.removeItem(Mycart, item2)




await cartService.displayCart(Mycart)

//await cartService.deleteItem(Mycart,item2.name)
//await cartService.deleteItem(Mycart,item1.name)
await cartService.calculateTotal(Mycart)
