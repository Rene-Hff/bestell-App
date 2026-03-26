function renderMenu(){
    let contentRef = document.getElementById("content_category")
        contentRef.innerHTML = "";
    for(let index = 0; index < myDishes.length; index++){
        
        contentRef.innerHTML += getMenuTemplate(index);
    }
}