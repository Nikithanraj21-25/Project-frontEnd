var profile = document.querySelector(".profile");
var profileContainer = document.querySelector(".profile_container")

var categoryLists = document.querySelector(".category_lists");
var category = document.querySelector(".category");

profile.addEventListener("click", function(event){
    event.preventDefault();
    profileContainer.style.right = '0%';
})

profileContainer.addEventListener("dblclick", function(){
    // event.preventDefault();
    profileContainer.style.right = '-30%';
})

category.addEventListener('mouseover', function(){
    categoryLists.style.display = 'block'
});

category.addEventListener('mouseout', function(){
    categoryLists.style.display = 'none';
})

var loginSignup = document.querySelector(".login-signup");
var loginContainer = document.querySelector(".login_container");
var filter = document.querySelector(".filter");
var header = document.querySelector(".header");
var body = document.querySelector("body");

loginSignup.addEventListener('click', function(event){
    event.preventDefault();
    body.style.display = 'flex';
    body.style.position = 'static';
    body.style.justifyContent = 'center';
    body.style.alignItems = 'center';
    body.style.height = '100vh';
    body.style.background = 'url(./images/shoe_image4.jpeg) no-repeat';
    body.style.backgroundSize = 'cover';
    filter.style.display = 'none';
    header.style.display = 'none';
    loginContainer.style.display = 'block';
})
