function getMenuTemplate(index){
    return`
    <button id="addBtn" class="addBtnClass" onclick="addToCart(${index})">
        <div class="content_menu">${myDishes[index].name}</div>
        <div class="content_menu">${myDishes[index].price}</div>
        <div class="content_menu">${myDishes[index].ingredients}</div>
    </button>
    <hr>`
}
function getBasketTemplate(indexBasket){
    return`
        <div id="bas_dish_nme">${basketDishes[indexBasket].name}</div>
        <div id="bas_dish_prce">${basketDishes[indexBasket].price}</div>
        <div id="bas_dish_amnt">${basketDishes[indexBasket].amount}</div>
    <button onclick="deleteBtn(${indexBasket})">X</button>
    <hr>`
}
function getCheckOutTemplate(){
    return`
        <div>${basketSum} €</div>
        <div>delivery-price</div>
        <hr>
        <button>Pay ${basketSum} €</button>
        `
}
