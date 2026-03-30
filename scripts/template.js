function getMenuTemplate(index){
    return`
    
    <button id="addBtn" class="addBtnClass" onclick="addToBasket(${index})">
        <div class="content_menu">${myDishes[index].name}</div>
        <div class="content_menu">${myDishes[index].price}</div>
        <div class="content_menu">${myDishes[index].ingredients}</div>
    </button>
    <hr>`
}

function getBasketTemplate(indexBasket){
return`
    <div class="content_menu">${basketDishes[indexBasket].name}</div>
    <div class="content_menu">${basketDishes[indexBasket].price}</div>
    <div class="content_menu">${basketDishes[indexBasket].amount}</div>
    <button id="trash_Btn" class="trash_Btn" onclick="deleteItem(${indexBasket})">X</button>
    <hr>`
}