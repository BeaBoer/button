var cardContainer = $('.card-container');
var submit = $('.submit-btn');

submit.on("click", getInfo)


function getInfo() {
var item = $('.to-do').val();
appendIt(item);
console.log(item);
clearInputs();
}

function appendIt(item) {
cardContainer.append(`
<div class= "item-card">
<p> ${item}</p>
<button class = "delete-btn"> completed </button>
</div>`);

$('.card-container').on("click", ".delete-btn", deleteItem);

function deleteItem(event) {
event.target.parentNode.remove()
}
}

function clearInputs() {

}
