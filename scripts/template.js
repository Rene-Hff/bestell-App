function getMenuTemplate(index){
    return`
    <div class="singleDishMainMenu">
        <div class="content_menu">${myDishes[index].category.name}</div>
        <div class="content_menu">${myDishes[index].category.price.toFixed(2)}€</div>
        <div class="content_menu">${myDishes[index].category.ingredients}</div>
    <button id="addBtn" onclick="addToCart(${index})">Add to cart</button>
    </div>`
}
function getBasketTemplate(indexBasket){
    return`
        <div id="bas_dish_nme">${basketDishes[indexBasket].name}</div>
        <div id="bas_dish_prce">${dishPrices(indexBasket)}€</div>
        <div id="bas_dish_btns">
            <Button id="minusBtn" onclick="decreaseBasketButton(${indexBasket})"> - </button>
                <span id="bas_dish_amnt">${basketDishes[indexBasket].amount}</span>
            <button id="plusBtn" onclick="increaseBasketButton(${indexBasket})"> + </button>
            <button id="delBtn" onclick="deleteBtn(${indexBasket})"><img class="trash_icon" src="/icons+imgs/delete.svg" alt="trash_icon"></button>
        </div>`
}
function getCheckOutTemplate(){
    return`
    <div class="checkOutBox">
        <div class="subtotal">Subtotal ${basketSum} €</div>
        <div class="delFee">Delivery fee +5€</div>
        <div class="total">Total ${totalPrice()}€</div>
        <button id="payBtn" onclick="openDialog()">Buy now (${totalPrice()}€)</button>
    </div>
    `
}
