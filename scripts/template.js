function getMenuTemplate(index){
    return`
    <div id="addBtn" class="addBtnClass">
        <div class="content_menu">${myDishes[index].name}</div>
        <div class="content_menu">${myDishes[index].price.toFixed(2)}€</div>
        <div class="content_menu">${myDishes[index].ingredients}</div>
    <button onclick="addToCart(${index})">Add to cart</button>
    </div>
    <hr>`
}
function getBasketTemplate(indexBasket){
    return`
        <div id="bas_dish_nme">${basketDishes[indexBasket].name}</div>
        <div id="bas_dish_prce">${dishPrices(indexBasket)}€</div>
        <Button onclick="decreaseBasketButton(${indexBasket})"> - </button><span id="bas_dish_amnt">${basketDishes[indexBasket].amount}x</span><button onclick="increaseBasketButton(${indexBasket})"> + </button>
    <button onclick="deleteBtn(${indexBasket})">X</button>
    <hr>`
}
function getCheckOutTemplate(){
    return`
    <div class="checkOutBox">
        <div>${basketSum} €</div>
        <div>+5€ Delivery</div>
        <div>${totalPrice()}€</div>
        <hr>
        <button onclick="openDialog()">Pay${totalPrice()}€</button>
    </div>
    `
}
