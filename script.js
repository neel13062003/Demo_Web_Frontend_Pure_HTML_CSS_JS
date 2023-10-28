let currentUrl = window.location.href;
const cartUrl = "cart.html";
const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');
var itemsCart = [];
currentUrl = currentUrl.split('/').pop();
var time;
var timer_value = document.getElementById("timer-value");

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

if(currentUrl == cartUrl){
    console.log("muskuraiyee, app cart me hai");
    viewCart();
}
function addToCart(element){
    if(!itemsCart.includes(element)){
        let image = element.getElementsByTagName("img")[0].getAttribute("src");
        let title = element.getElementsByTagName("h5")[0].textContent;
        let price = element.getElementsByTagName("h4")[0].textContent;
        itemsCart.push({img:`${image}`, title:`${title}`, price:`${price}`});
        alert("item added to cart");
    }
}

function openCart(){
    let section = document.getElementById("product1");
    let pagiationSymbol = document.getElementById("pagination");

    section.innerHTML = `
    <ul class="listCard">
    </ul>
    `;
    let listCard = document.getElementsByClassName('listCard')[0];
    pagiationSymbol.innerHTML = "";

    addElements();

    let total = calTotal();

    let newDiv = document.createElement("div");
    newDiv.classList.add("totalRow");
    newDiv.innerHTML = `
    <div class="cart-total">
    <h4>TOTAL</h4>
<div class="total-price">$ ${total}</div>
</div>
    `;
    section.appendChild(newDiv);
}

function addElements() {
    let listCard = document.getElementsByClassName('listCard')[0];

    itemsCart.forEach((value,key) => {
        let newDiv = document.createElement('li');
        newDiv.innerHTML = `
            <img src=${value.img}>
            <h5>${value.title}</h5>
            <p>${value.price}</p>
        `;
        newDiv.style.marginBottom = '5px';
        listCard.appendChild(newDiv);
    });

}

function calTotal() {
    let total = 0;
    console.log(itemsCart);

    itemsCart.forEach((value) =>{
        let price = parseInt(value.price.substring(1));
        console.log(price);
        total += price;//instead of 1 replace with qty
    });

    console.log(total);
    return total;
}


function changeTimer(){
    remainingTime();

    let count = 60;//number of seconds
    function remainingTime() {
    time = setInterval(function() {
        if(count < 0){
            clearInterval(time);
            console.log('time experied');
            alert("time ended");
            location.reload();
        }
        timer_value.innerHTML = count +'s';
        --count;
    },1000);
}

}

changeTimer();





