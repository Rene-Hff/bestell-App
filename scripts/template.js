function getMenuTemplate(index){
    return`
    <div class="content_menu">${myDishes[index].name}</div>
    <div class="content_menu">${myDishes[index].price}</div>
    <div class="content_menu">${myDishes[index].ingredients}</div>
`
}