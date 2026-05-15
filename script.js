let dishPriceVar;
let basketSum;
let total;
let delPrice = "5";

function init(){
renderBurger();
renderPizza();
renderSalad();
}

function renderBurger(index){
    let contentRef = document.getElementById("burger_sandwiches_wrapper")
        contentRef.innerHTML = "";
    for(let index = 0; index < myDishes.length; index++){          
        if(myDishes[index].category == "Burger&Sandwiches"){
        contentRef.innerHTML += getMenuTemplate(index);
        }
    }
    renderEmptyBasket();
}
function renderPizza(index){
    let contentRef = document.getElementById("pizza_wrapper")
        contentRef.innerHTML = "";
    for(let index = 0; index < myDishes.length; index++){          
        if(myDishes[index].category == "Pizza"){
        contentRef.innerHTML += getMenuTemplate(index);
        }
    }
    renderEmptyBasket();
}
function renderSalad(index){
    let contentRef = document.getElementById("salad_wrapper")
        contentRef.innerHTML = "";
    for(let index = 0; index < myDishes.length; index++){          
        if(myDishes[index].category == "Salad"){
        contentRef.innerHTML += getMenuTemplate(index);
        }
    }
    renderEmptyBasket();
}

function renderEmptyBasket(){
    let emBasket = document.getElementById("basket_standard")
        emBasket.innerHTML =` <h3>Your Basket</h3>
        <p>Nothing here yet.Go ahead and choose something delicious!</p>
        <img class="cart_icon" src="/imagesIcons/shopping_cart.svg" alt="cart_icon">`
}

function renderBasketMenu(indexBasket){
    let basketRef = document.getElementById("basket_standard");
        basketRef.innerHTML = "";
    for(let indexBasket = 0; indexBasket < basketDishes.length; indexBasket++){
        basketRef.innerHTML += getBasketTemplate(indexBasket);
    }
    if(basketDishes.length != 0){
        document.getElementById("checkOutContainer").style.display = "block";
    } else{
        document.getElementById("checkOutContainer").style.display = "none";
        renderEmptyBasket();
    }
        renderCheckOut();
        renderPrice();
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

function increaseBasketButton(indexBasket){
    if(basketDishes) basketDishes[indexBasket].amount++;
        renderPrice();
        renderBasketMenu();
}

function decreaseBasketButton(indexBasket){
    if(basketDishes[indexBasket].amount ==1 && decreaseBasketButton) {
        deleteBtn(indexBasket);
    }
    else if(basketDishes) basketDishes[indexBasket].amount--;
        renderPrice();
        renderBasketMenu();
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

function dishPrices(indexBasket){
    dishPriceVar = basketDishes[indexBasket].price * basketDishes[indexBasket].amount;
    return dishPriceVar.toFixed(2);
}

function totalPrice(){
    if(basketDishes == 0){
        total = Number(basketSum);
    } else{
        total = Number(basketSum) + Number(delPrice);
    } return total.toFixed(2);
}

function openDialog(){
    let dialogRef = document.getElementById("dialogMessage");
        dialogRef.showModal();
    renderEmptyBasket();
        basketDishes = [];
    renderBasketMenu();
}

function openMobileBasket(index, indexBasket){
        let mobDiaRef = document.getElementById("mobileBasketDialog");
        mobDiaRef.showModal();
        let mobileBskt = document.getElementById("mobileBasketContent");
            mobileBskt = renderBasketMenu(indexBasket);
            return mobileBskt
}

function deleteBtn(indexBasket){
    basketDishes.splice(indexBasket, 1);
    renderBasketMenu();
}

function closeDialog(){
    document.getElementById("dialogMessage").close();
}
function closeMobileBasketDialog(){
    document.getElementById("mobileBasketDialog").close();
}