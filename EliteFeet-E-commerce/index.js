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

// =====search-bar========

var searchBar = document.querySelector('.search-bar');
var search = document.querySelector('.search-bar-input');

search.addEventListener('click', function(){
    searchBar.style.backgroundColor = 'white';
})

// // ==========filter-prize==================

// window.onload = function(){
//     slideOne();
//     slideTwo();
// }

// let sliderOne = document.getElementById("slider-1");
// let sliderTwo = document.getElementById("slider-2");
// let displayValOne = document.getElementById("range1");
// let displayValTwo = document.getElementById("range2");

// let minGap = 0;

// let sliderTrack = document.querySelector(".slider-track");
// let sliderMaxValue = document.getElementById("slider-1").max;

// function slideOne(){
//     if(parseInt(sliderTwo.value)-parseInt(sliderOne.value) <= minGap){
//         sliderOne.value = parseInt(sliderTwo.value) - minGap;
//         }

//     displayValOne.textContent = sliderOne.value;
//     fillColor();
// }

// function slideTwo(){
//     if(parseInt(sliderTwo.value)-parseInt(sliderOne.value) <= minGap){
//         sliderTwo.value = parseInt(sliderOne.value) + minGap;
//         }
//         displayValTwo.textContent = sliderTwo.value;
//         fillColor();
// }

// function fillColor(){
//     let percent1 = (sliderOne.value/ sliderMaxValue)*100;
//     let percent2 = (sliderTwo.value/ sliderMaxValue)*100;
//     // console.log(percent1,percent2);
//     sliderTrack.style.background =`linear-gradient(to right, #dadae5 ${percent1}% ,#000000 ${percent1}%, #000000 ${percent2}%,#dadae5 ${percent2}%`;
// }

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
