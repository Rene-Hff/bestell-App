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
function addToCart(index){
    let foundDish = basketDishes.find((dish) => dish.name == myDishes[index].name);
    if(foundDish){
         foundDish.amount++;
        renderBasketMenu();
    } else{
        basketDishes.push({
        "name" : myDishes[index].name,
        "price": myDishes[index].price,
        "amount": 1,
        })
    } 
        renderBasketMenu();
}


function deleteBtn(indexBasket){
    basketDishes.splice(indexBasket, 1);
    renderBasketMenu();
}