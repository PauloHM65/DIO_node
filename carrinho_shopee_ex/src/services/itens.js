//casos de uso dos itens

//criar item com subtotal certo
async function creatItem(name, price, quantity) {
    return{
        name,
        price,
        quantity,
        subtotal: () =>price* quantity
    }
}
export default creatItem;
