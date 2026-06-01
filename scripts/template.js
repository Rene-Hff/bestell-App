
function getMenuTemplate(index, btnAmount){
    return`
    <div class="singleDishMainMenu">
        <img class="img_menu" src="${menuImgs[index]}">
        <div class="content_menu_description"> <h3 class="content_menu">${myDishes[index].name}</h3> ${myDishes[index].ingredients}</div>
        <div class="content_menu_price_btn">${myDishes[index].price.toFixed(2)}€ <button class="addButtons" id="addBtn${index}" onclick="addToCart(${index})"> Add to Basket </button>
        </div>
    </div>`
}

function getBasketTemplate(indexBasket, index){
    return`
        <div id="bas_dish_nme">${basketDishes[indexBasket].name}</div>
        <div id="bas_dish_prce">${dishPrices(indexBasket)}€</div>
        <div id="bas_dish_btns">
            <Button id="minusBtn" onclick="decreaseBasketButton(${indexBasket})"> - </button>
                <span id="bas_dish_amnt">${basketDishes[indexBasket].amount}</span>
            <button id="plusBtn" onclick="increaseBasketButton(${index, indexBasket})"> + </button>
            <button id="delBtn" onclick="deleteBtn(${indexBasket})"><img class="trash_icon" src="./imagesIcons/delete.svg" alt="trash_icon"></button>
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

function getMobileCheckOutTemplate(){
    return`
    <div class="mobileCheckOutBox">
        <div class="subtotal">Subtotal ${basketSum} €</div>
        <div class="delFee">Delivery fee +5€</div>
        <div class="total">Total ${totalPrice()}€</div>
        <button id="payBtn" onclick="openDialog()">Buy now (${totalPrice()}€)</button>
    </div>
    `
}