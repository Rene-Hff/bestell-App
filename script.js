function renderMenu(){
    let contentRef = document.getElementById("content_category")
        contentRef.innerHTML = "";
    for(let index = 0; index < myDishes.length; index++){        
        contentRef.innerHTML += getMenuTemplate(index);
    }
}
function renderBasketMenu(){
    let basketRef = document.getElementById("basket_standard");
        basketRef.innerHTML = "";
    for(let indexBasket = 0; indexBasket < basketDishes.length; indexBasket++){
        basketRef.innerHTML += getBasketTemplate(indexBasket);
    }
}
function addToBasket(index){
    basketDishes.push(myDishes[index]);
    renderBasketMenu();
    return basketDishes;
}

function deleteItem(indexBasket){
    basketDishes.splice(indexBasket, 1);
    renderBasketMenu();
}
