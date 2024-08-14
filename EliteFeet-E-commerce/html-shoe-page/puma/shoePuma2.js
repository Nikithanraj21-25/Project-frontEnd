var products = document.querySelector('.products');
var productsContainer = document.querySelector('.products-container');

products.addEventListener('mouseover', function(){
    productsContainer.style.display = 'flex';
} )

productsContainer.addEventListener('mouseover', function(){
    productsContainer.style.display = 'flex';
})

productsContainer.addEventListener('mouseleave', function(){
    productsContainer.style.display = 'none';
})

//================Images======================

let ArrProducts = [
    {
        id: 1,
        brand: "puma",
        name: "Football Shoe 1",
        price: "700",
        type: "Good Looking Shoes"
    },
    {
        id: 2,
        brand: "puma",
        name: "Football Shoe 2",
        price: "1000",
        type: "Good Looking Shoes"
    },
    {
        id: 3,
        brand: "puma",
        name: "Football Shoe 3",
        price: "600",
        type: "Good Looking Shoes"
    },
    {
        id: 4,
        brand: "puma",
        name: "Football Shoe 4",
        price: "1700",
        type: "Funky Shoes"
    },
    {
        id: 5,
        brand: "puma",
        name: "Football Shoe 5",
        price: "1500",
        type: "Funky Shoes"
    },
    {
        id: 6,
        brand: "puma",
        name: "Football Shoe 6",
        price: "1900",
        type: "Good Looking Shoes"
    }
]

// =============Add to Cart====================

let checkOutList = [];
let checkOutList1 = [];

const body = document.querySelector("body");
var footballImgs = document.querySelector(".football-imgs");
const productListCart = document.querySelector(".productListCart");
const shoppingBasket = document.querySelector(".shoppingBasket");
const shoppingBasket1 = document.querySelector(".shoppingBasket1");
const closeCart = document.querySelector(".close");
const quantity = document.querySelector(".quantity");
const quantity1 = document.querySelector(".quantity1");
const total = document.querySelector(".total");

shoppingBasket.addEventListener("click",function(){
    body.classList.add("active");
});

// ================
shoppingBasket1.addEventListener("click",function(){
    body.classList.add("active");
});
// ==================

closeCart.addEventListener("click", function(){
    body.classList.remove("active");
})

function onInIt(ArrProductsNew){

    footballImgs.innerHTML = '';

    ArrProductsNew.forEach((item,key)=>{
        let div = document.createElement("div");
        div.classList.add("football-img");

      div.innerHTML = ` <img src="./images/pumaFootballShoes/pumaFootballShoe${item.id}.avif"
            class="football-img-4"/>
            <div class="info-whist-cart">
                <div class="puma-football-info">
                    <h3>${item.brand}</h3>
                    <p>${item.name}</p>
                    <h5>Rs. ${item.price}</h5>
                </div>
                <div class="whist-cart">
                    <button>
                        <p>WHISTLIST</p>
                        <i class="fa-solid fa-heart"></i>
                    </button>
                    <button onClick="addToCart(${key})">
                        <p>ADD CART</p>
                        <i class="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>
            </div>`

            footballImgs.appendChild(div);
    });

}

onInIt(ArrProducts);

function addToCart(Id){
    console.log("item clicked");
    if(checkOutList[Id]==null){
        checkOutList[Id] = ArrProducts[Id];
        checkOutList[Id].quantity = 1;
    }else{
        checkOutList[Id].quantity += 1;
    }
    if (checkOutList1[Id] == null) {
        checkOutList1[Id] = ArrProducts[Id];
        checkOutList1[Id].quantity1 = 1;
    } else {
        checkOutList1[Id].quantity1 += 1;
    }
    reloadCart();
}

function reloadCart(){
    productListCart.innerHTML = "";
    let count = 0;
    let count1 = 0;
    let totalPrice = 0;

    checkOutList.forEach((item,key)=>{
        // console.log(item);
        totalPrice += parseInt(item.price*item.quantity);
        count += item.quantity;
        count1 += item.quantity;
        let li = document.createElement("li");
        li.innerHTML = `
        <img src="./images/pumaFootballShoes/pumaFootballShoe${item.id}.avif">
        <div>${item.name}</div>
        <div>${item.price}</div>
        <div>
        <button onclick="changeQuantity(${key},${item.quantity-1})">-</button>
        <div  class="count">${item.quantity}</div>
        <button onclick="changeQuantity(${key},${item.quantity+1})">+</button>
        </div>
        `;
        productListCart.appendChild(li);
    });
    total.innerHTML = `<small>Subtotal (${count} items)&nbsp;&nbsp;₹</small>` + totalPrice;
    quantity.innerHTML = count;
    quantity1.innerHTML = count1;
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete checkOutList[key];
        delete checkOutList1[key];
    }
    else{
        checkOutList[key].quantity = quantity;
        checkOutList1[key].quantity1 = quantity;
    }
    reloadCart();
}

// =============media-query===================
// ==============Bar-items==================

const barItems = document.querySelector(".bar-items");
const bar = document.querySelector(".bar");
const closeSymbol = document.querySelector(".close-symbol");

bar.addEventListener("click", function(){
    barItems.style.display = 'flex';
    barItems.style.right = '0%';
    bar.style.display = 'none';
})

closeSymbol.addEventListener("click", function(){
    bar.style.display = "block";
    barItems.style.display = 'none';
})

barItems.addEventListener("mouseout", function() {
    setTimeout(function() {
        if (!barItems.matches(':hover')) {
            barItems.style.display = "none";
        }
    }, 200);
    bar.style.display = "block";
});

// ==================filter-items====================

const filterIcon = document.querySelector(".filter-icon");
const filter = document.querySelector(".filter");

filterIcon.addEventListener("click", function(){
    filter.style.marginLeft = '0%';
})

const closeSymbolFilter = document.querySelector(".close-symbol-filter");

closeSymbolFilter.addEventListener("click", function(){
    filter.style.marginLeft = "-100%";
})

// =====search-bar========

var searchBar = document.querySelector('.search-bar');
var search = document.querySelector('.search-bar-input');

search.addEventListener('click', function(){
    searchBar.style.backgroundColor = 'white';
})

// ========Search-Event===========

var pumaFootball = document.querySelector('.puma-football');
// var search = document.querySelector('.search-bar-input');
var productList = pumaFootball.querySelectorAll('.football-img');
// var footballImgs = document.querySelector('.football-imgs');
let enteredValue = "";

search.addEventListener("keyup", function(event){
    enteredValue = event.target.value.toLowerCase().trim(); // Trimmed value to remove leading/trailing spaces
    filterProducts();

//     if(enteredValue === '') {
//         // If the search bar is empty, display all products and set justify-content to space-around
//         for(var count = 0; count < productList.length; count++) {
//             productList[count].style.display = 'block';
//         }
//         footballImgs.style.justifyContent = 'space-around';
//     }
//    else{
//     for(count = 0; count < productList.length; count++){
//         productName = productList[count].querySelector('p').textContent

//         if(productName.toUpperCase().indexOf(enteredValue)<0){
//             productList[count].style.display = 'none';
//         }
//         else{
//             productList[count].style.display = 'block';
//             footballImgs.style.justifyContent = 'flex-start';
//         }
//     }
//    }

})

// ================filter-design==========================

window.onload = function(){
    slideOne();
    slideTwo();
}

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");

let minGap = 0;

let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

function slideOne(){
    if(parseInt(sliderTwo.value)-parseInt(sliderOne.value) <= minGap){
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
        }

    displayValOne.textContent = sliderOne.value;
    fillColor();
}

function slideTwo(){
    if(parseInt(sliderTwo.value)-parseInt(sliderOne.value) <= minGap){
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
        }
        displayValTwo.textContent = sliderTwo.value;
        fillColor();
}

function fillColor(){
    let percent1 = (sliderOne.value/ sliderMaxValue)*100;
    let percent2 = (sliderTwo.value/ sliderMaxValue)*100;
    // console.log(percent1,percent2);
    sliderTrack.style.background =`linear-gradient(to right, #dadae5 ${percent1}% ,#000000 ${percent1}%, #000000 ${percent2}%,#dadae5 ${percent2}%`;
}

// ===============function to filter products==============

function filterProducts(){
    let filteredProducts = ArrProducts;
    
    //Filter by category
    if(selectedCategories.length > 0 && !selectedCategories.includes("All")){
        filteredProducts = filteredProducts.filter(product => selectedCategories.includes(product.type));
    }

    //Filter by price
    filteredProducts = filteredProducts.filter((product) => (Number(product.price) >= selectedPrice1 && Number(product.price) <= selectedPrice2));

    //Filter by search text
    if(enteredValue){
        filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().includes(enteredValue));
    }

    onInIt(filteredProducts);

}

// ===============filter-functions-basedOn(price)===================

// Initialize filter state
let selectedCategory = "All";
let selectedPrice1 = Math.max(...ArrProducts.map(product => Number(product.price)));
let selectedPrice2 = Math.max(...ArrProducts.map(product => Number(product.price)));
// enteredValue = ""; -->declared near serach event

// let sliderOne = document.getElementById("slider-1"); --> price Range
// let sliderTwo = document.getElementById("slider-2"); --> price Range

// let displayValOne = document.getElementById("range1"); -->price value
// let displayValTwo = document.getElementById("range2"); -->price value

function setPrices(){
    const priceList = ArrProducts.map((product)=> product.price);
    // console.log(priceList);
    minPrice = Math.min(...priceList);
    maxPrice = Math.max(...priceList);
    // console.log(minPrice);
    // console.log(maxPrice);

    // Set initial slider positions to the min and max prices
    sliderOne.value = minPrice;
    sliderTwo.value = maxPrice;

    // Update selectedPrice variables to reflect initial slider positions
    selectedPrice1 = minPrice; // Corrected line
    selectedPrice2 = maxPrice; // Corrected line

    sliderOne.addEventListener("input",(e)=>{
        selectedPrice1 = Number(e.target.value);
        displayValOne.textContent = e.target.value;
        filterProducts();
    })

    sliderTwo.addEventListener("input",(e)=>{
        selectedPrice2 = Number(e.target.value);
        displayValTwo.textContent = e.target.value;
        filterProducts();
    })
    
}

// =================filter-function-basedOn(categories)===========================
const filterCollections = document.querySelector(".filter-collections")
let selectedCategories = [];

function setCategories(){
    const allCategories = ArrProducts.map((product)=> product.type)
    console.log(allCategories);

    const categories = ["All",...allCategories.filter((product,index)=>{
        return(allCategories.indexOf(product)===index);
    })];
    console.log(categories);

    filterCollections.innerHTML = categories.map((category)=>{
        return(
            `<input type="checkbox" name="brand" value="${category}" />
            <p>${category}</p>
            <br />`
        )
    }).join("");

    // Add change event listener for all checkboxes
    document.querySelectorAll('input[name="brand"]').forEach((checkbox)=>{
        checkbox.addEventListener("change", (e)=>{
            const categValue = e.target.value;
            if(e.target.checked){
                if(!selectedCategories.includes(categValue)){
                    selectedCategories.push(categValue);
                }
            }else{
                selectedCategories = selectedCategories.filter(category => category!==categValue)
            }
            filterProducts();
        })
    })
}

setCategories();
setPrices();

// ===================placeholder-updation================================

function updatePlaceholder() {
    if(window.matchMedia('(min-width: 1401px)').matches){
        bar.style.display = "none"
    }

    if (window.matchMedia('(max-width: 1400px)').matches) {
        search.placeholder = 'Search for products...';
        bar.style.display = "block";
    } else if (window.matchMedia('(max-width: 650px)').matches) {
        search.placeholder = 'Search for products...';
    } else {
        search.placeholder = 'Search for products,brands and more';
    }
}

// Initial check
updatePlaceholder();

// Listen for window resize
window.addEventListener('resize', updatePlaceholder);

// ===================product-bar-items================================

const productsBarItems = document.querySelector(".products-bar-items");
const productsContainerScreen = document.querySelector(".products-container-screen")

productsBarItems.addEventListener("click", function(event){
    event.preventDefault();
    productsContainerScreen.style.right = "0%";
    productsContainerScreen.style.display = "block";
    // barItems.style.right = '-30%';
    barItems.style.display = 'none';
})

const closeSymbolPCS = document.querySelector(".close-symbol-pcs");

closeSymbolPCS.addEventListener("click", function(){
    bar.style.display = "block";
    // productsContainerScreen.style.right = "-60%";
    productsContainerScreen.style.display = "none";
})

productsContainerScreen.addEventListener("mouseout", function() {
    setTimeout(function() {
        if (!productsContainerScreen.matches(':hover')) {
            productsContainerScreen.style.display = "none";
        }
    }, 200);
    bar.style.display = "block";
});

const nav = document.querySelector("nav");
const eliteFeet = document.querySelector(".nav-h1");
const searchIconSmall  = document.querySelector(".search-icon-small");
const caretRightIcon = document.querySelector(".caret-right-icon");

searchIconSmall.addEventListener("click", function(){
    searchIconSmall.style.display = "none";
    searchBar.style.display = "block";
    searchBar.style.width = "60%";
    searchBar.style.left = "10%";
    searchBar.style.transition = ".5s";
    eliteFeet.style.display = "none";
    nav.style.height = "27px";
    caretRightIcon.style.display = "block";
})

caretRightIcon.addEventListener("click",function(){
    searchBar.style.display ="none";
    caretRightIcon.style.display = "none";
    searchIconSmall.style.display = "block";
    eliteFeet.style.display = "block";
})
