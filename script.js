let dishPriceVar;
let basketSum;
let total;
let delPrice = "5";
let contentRef;

function init(){
renderBasketMenu();
renderAllDishes();
}

function renderAllDishes(){
    contentBurgerRef = document.getElementById("burger_sandwiches_wrapper");
    contentPizzaRef = document.getElementById("pizza_wrapper");
    contentSaladRef = document.getElementById("salad_wrapper");
    contentBurgerRef.innerHTML = "";
    contentPizzaRef.innerHTML  = "";
    contentSaladRef.innerHTML  = "";
    for(let index = 0; index < myDishes.length; index++){
        if(myDishes[index].category == "Burger&Sandwiches"){ 
            contentBurgerRef.innerHTML += getMenuTemplate(index);
        }
        if(myDishes[index].category == "Pizza"){
            contentPizzaRef.innerHTML += getMenuTemplate(index);
        }
        if(myDishes[index].category == "Salad"){
            contentSaladRef.innerHTML += getMenuTemplate(index);
        }
    }
}

function renderBasketMenu(indexBasket){
    let basketRef = document.getElementById("basket_standard");
        basketRef.innerHTML = "";
        basketRef.innerHTML = `<h3>Your Basket</h3>`;
    for(let indexBasket = 0; indexBasket < basketDishes.length; indexBasket++){
        basketRef.innerHTML += getBasketTemplate(indexBasket);
    }
    if (basketDishes.length != 0){
        document.getElementById("checkOutContainer").style.display = "block";
    }  else{
        document.getElementById("checkOutContainer").style.display = "none";
        basketRef.innerHTML =`<h3>Your Basket</h3>
        <p>Nothing here yet.Go ahead and choose something delicious!</p>
        <img class="cart_icon" src="./imagesIcons/shopping_cart.svg" alt="cart_icon">`
    }
        renderCheckOut();
        renderPrice();
}

function renderCheckOut(indexBasket){ 
    let checkOut = document.getElementById("checkOutContainer")
        checkOut.innerHTML = getCheckOutTemplate();
}

function renderMobileBasketMenu(indexBasket){
    let mobileBskt = document.getElementById("mobileBasketContent");
        mobileBskt.innerHTML = "";
        mobileBskt.innerHTML = `<h3>Your Basket</h3>`;
    for (let indexBasket = 0; indexBasket < basketDishes.length; indexBasket++){
        mobileBskt.innerHTML += getBasketTemplate(indexBasket);
    }
    if (basketDishes.length != 0){
        document.getElementById("mobileCheckOut").style.display = "block";
    } else{
        document.getElementById("mobileCheckOut").style.display = "none";
        mobileBskt.innerHTML =`<h3>Your Basket</h3>
        <p>Nothing here yet.Go ahead and choose something delicious!</p>
        <img class="cart_icon" src="./imagesIcons/shopping_cart.svg" alt="cart_icon">`
    }
    renderMobileCheckOut();
    renderPrice();
}

function renderMobileCheckOut(indexBasket){
    let mobCheck = document.getElementById("mobileCheckOut");
        mobCheck.innerHTML = getMobileCheckOutTemplate();
}

function renderPrice(){
   basketSum = 0;
    for(let basketIndex = 0; basketIndex < basketDishes.length; basketIndex++){
        let singleBasketDish = basketDishes[basketIndex];
    basketSum += singleBasketDish.price*singleBasketDish.amount;
    }
    basketSum = basketSum.toFixed(2);
}

function increaseBasketButton(indexBasket, index, btnAmount){
    let foundMenuDish = myDishes.find((dish) => dish.name == basketDishes[indexBasket].name);
    if(basketDishes) basketDishes[indexBasket].amount++;
    if(foundMenuDish) btnAmount = basketDishes[indexBasket].amount;
        index = myDishes.indexOf(foundMenuDish);
        renderPrice();
        renderBasketMenu();
        renderMobileBasketMenu();
        renderMenuBtns(index, btnAmount);
}

function decreaseBasketButton(indexBasket){
    if(basketDishes[indexBasket].amount ==1 && decreaseBasketButton) {
        deleteBtn(indexBasket);
    }
    else if(basketDishes) basketDishes[indexBasket].amount--;
        renderPrice();
        renderBasketMenu();
        renderMobileBasketMenu();

}

function addToCart(index){
    let foundDish = basketDishes.find((dish) => dish.name == myDishes[index].name);
    if(foundDish){
       foundDish.amount++;
        renderPrice();
        renderBasketMenu();
        renderMenuBtns(index, checkBasketAmount(index));
    } else{
        basketDishes.push({
        "name" : myDishes[index].name,
        "price": myDishes[index].price.toFixed(2),
        "amount": 1,
    })} 
        renderPrice();
        renderBasketMenu();
        renderMenuBtns(index, checkBasketAmount(index));
        checkCartBadge();
}

function checkBasketAmount(index, btnAmount){
    let foundDish = basketDishes.find((dish) => dish.name == myDishes[index].name);
    if(foundDish){
        btnAmount = foundDish.amount;
        return btnAmount;
    } else {
        return ``;
    }
}

function checkCartBadge(){
    if(basketDishes){    
        document.getElementById('active_basket_icon').style.display = "flex";
        document.getElementById('standard_basket_icon').style.display = "none";
    } else{
        document.getElementById('standard_basket_icon').style.display = "flex";
        document.getElementById('active_basket_icon').style.display = "none";    
    }
    renderCountCartAmount(basketDishes.length);
}

function renderCountCartAmount(iconAmount){
    let iconAmountRef = document.getElementById('active_ellipse');
        iconAmountRef.innerHTML = iconAmount;
}


function renderMenuBtns(index, btnAmount){
    let addButton = document.getElementById('addBtn'+index);
        addButton.innerHTML = ` Added ${btnAmount} `
    return addButton
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
        basketDishes = [];
        closeMobileBasketDialog();
        renderBasketMenu();
}

function openMobileBasket(indexBasket){
        let mobDiaRef = document.getElementById("mobileBasketDialog");
        mobDiaRef.showModal();
        renderMobileBasketMenu(indexBasket);
}

function deleteBtn(indexBasket, index){
        basketDishes.splice(indexBasket, 1);
        renderPrice();
        renderBasketMenu();
        renderMobileBasketMenu();
}

function closeDialog(){
        document.getElementById("dialogMessage").close();
        init();
}
function closeMobileBasketDialog(){
        document.getElementById("mobileBasketDialog").close();
        document.getElementById('standard_basket_icon').style.display = "flex";
        document.getElementById('active_basket_icon').style.display = "none";   
        init();
}
