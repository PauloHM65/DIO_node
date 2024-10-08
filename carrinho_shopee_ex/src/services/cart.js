//quais  alies meu carrinho pode fazer

//adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}
// calcular o total
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item)=>total+item.subtotal(),0)
    console.log(`\nTotal: ${result}`)
}
// deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item)=> item.name == name)
    if(index !== -1){
        userCart.splice(index, 1);
    }
}
// remover um item -> diminui um item
async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((p)=>p.name == item.name)
    //caso nao encontre o item
    if(indexFound == -1){
        console.log("Intem nao encontrado")
        return;
    }
    //caso seja mais de uam unidade
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1
        return;
    }
    //caso tenha apenas 1 und, a deleta
    if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound,1);
        return;
    }
}

async function displayCart(userCart) {
    console.log("Shopee cart list:")
    userCart.forEach((item, index) => {
        console.log(`${index+1}. ${item.name} | ${item.price} | ${item.quantity}x | subtotal ${item.subtotal()}`)
    });
}


export {
    addItem,
    calculateTotal,
    removeItem,
    deleteItem,
    displayCart
}