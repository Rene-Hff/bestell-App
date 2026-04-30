function getMenuTemplate(index){
    return`
    <div id="addBtn" class="singleDishMainMenu">
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
        <div id="bas_dish_btns">
            <Button id="minusBtn" onclick="decreaseBasketButton(${indexBasket})"> - </button>
                <span id="bas_dish_amnt">${basketDishes[indexBasket].amount}</span>
            <button id="plusBtn" onclick="increaseBasketButton(${indexBasket})"> + </button>
            <button id="delBtn" onclick="deleteBtn(${indexBasket})">X</button>
        </div>`
}
function getCheckOutTemplate(){
    return`
    <div class="checkOutBox">
        <div>${basketSum} €</div>
        <div>+5€ Delivery</div>
        <div>${totalPrice()}€</div>
        <hr>
        <button onclick="openDialog()">Buy now (${totalPrice()}€)</button>
    </div>
    `
}
