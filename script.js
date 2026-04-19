let basketSum;
let total;

function renderMenu(){
    let contentRef = document.getElementById("content_category")
        contentRef.innerHTML = "";
    for(let index = 0; index < myDishes.length; index++){        
        contentRef.innerHTML += getMenuTemplate(index);
    }
    renderEmptyBasket();
}
function renderEmptyBasket(){
    let emBasket = document.getElementById("basket_standard")
        emBasket.innerHTML =` <h3>Your Basket</h3>
        <p>Add somthing delicious!</p>`
}
function renderBasketMenu(){
    let basketRef = document.getElementById("basket_standard");
        basketRef.innerHTML = "";
    for(let indexBasket = 0; indexBasket < basketDishes.length; indexBasket++){
        basketRef.innerHTML += getBasketTemplate(indexBasket);
    }
    renderPrice()
    renderCheckOut();
}
function renderCheckOut(indexBasket){
    let checkOut = document.getElementById("checkOutContainer")
        checkOut.innerHTML = getCheckOutTemplate();
}
    
function renderPrice(){
   basketSum = 0;
    for(let basketIndex = 0; basketIndex < basketDishes.length; basketIndex++){
        let singleBasketDish = basketDishes[basketIndex];
        basketSum += singleBasketDish.price*singleBasketDish.amount;
    }
    basketSum = basketSum.toFixed(2);
}

function totalPrice(){
    let delPrice = "5";
        total = Number(basketSum) + Number(delPrice);
    return total.toFixed(2);
}

function addToCart(index){
    let foundDish = basketDishes.find((dish) => dish.name == myDishes[index].name);
    if(foundDish){
       foundDish.amount++;
    renderPrice();
    renderBasketMenu();
    } else{
        basketDishes.push({
        "name" : myDishes[index].name,
        "price": myDishes[index].price.toFixed(2),
        "amount": 1,
    })} 
    renderPrice();
    renderBasketMenu();
}

function deleteBtn(indexBasket){
    basketDishes.splice(indexBasket, 1);
    renderBasketMenu();
}