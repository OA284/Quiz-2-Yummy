let sideNavWidth = $(".sideNav .sideNavInfo").outerWidth();

$(".sideNav .sideNavPull span i.fa-bars").click(function(){
    $(".sideNav").animate({left: 0}, 500);
    $(".sideNav .sideNavPull span i.fa-bars").toggle(500);
    $(".sideNav .sideNavPull span i.fa-xmark").toggle(500);
});

$(".sideNav .sideNavPull span i.fa-xmark").click(function(){
    $(".sideNav").animate({left: -sideNavWidth}, 500);
    $(".sideNav .sideNavPull span i.fa-xmark").toggle(500);
    $(".sideNav .sideNavPull span i.fa-bars").toggle(500);
});

$(document).ready(function(){
    $(".loadPage").fadeOut(1000);
    $("body").css("overflow", "visible");
    reloadFood("");
});

async function relodeId(id){
    console.log(id);
    let apiKey = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
    let data = await fetch(apiKey + id);
    let response = await data.json();
    console.log("id", response);
    displayDetails(response.meals);
}

function displayDetails(response){
    document.querySelector(".foodImg").classList.replace("block", "hidden");
    document.querySelector(".contactUs").classList.replace("block", "hidden");
    document.querySelector(".cate").classList.replace("block", "hidden");
    document.querySelector(".Area").classList.replace("block", "hidden");
    document.querySelector(".ingre").classList.replace("block", "hidden");
    document.querySelector(".Search").classList.replace("block", "hidden");
    document.querySelector(".foodDetails").classList.replace("hidden", "block");

    let box = `
    <div class="container flex lg:flex-row sm:flex-col gap-x-7">
        <div class="img w-[32%]">
            <img src="${response[0].strMealThumb}" alt="food img" class="rounded-xl">
            <h1 class="text-3xl font-semibold text-white">${response[0].strMeal}</h1>
        </div>

        <div class="w-[68%]">
            <span>
                <h1 class="text-3xl font-semibold text-white mb-2">Instructions</h1>
                <p class="ms-4 text-white mb-3">${response[0].strInstructions}</p>
            </span>
            <h1 class="text-3xl text-white mb-3 font-bold">Area : <span class="font-semibold">${response[0].strArea}</span></h1>
            <h1 class="text-3xl text-white mb-3 font-bold">Category  : <span class="font-semibold">${response[0].strCategory}</span></h1>
            <h1 class="text-3xl text-white mb-3 font-bold">Recipes  : </br>
                <span class="text-black text-base font-normal">
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure1 + " " + response[0].strIngredient1}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure2 + " " + response[0].strIngredient2}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure3 + " " + response[0].strIngredient3}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure4 + " " + response[0].strIngredient4}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure5 + " " + response[0].strIngredient5}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure6 + " " + response[0].strIngredient6}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure7 + " " + response[0].strIngredient7}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure8 + " " + response[0].strIngredient8}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure9 + " " + response[0].strIngredient9}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure10 + " " + response[0].strIngredient10}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure11 + " " + response[0].strIngredient11}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure12 + " " + response[0].strIngredient12}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure13 + " " + response[0].strIngredient13}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure14 + " " + response[0].strIngredient14}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure15 + " " + response[0].strIngredient15}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure16 + " " + response[0].strIngredient16}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure17 + " " + response[0].strIngredient17}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure18 + " " + response[0].strIngredient18}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure19 + " " + response[0].strIngredient19}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure20 + " " + response[0].strIngredient20}</button>
                </span>
            </h1>
            <h1 class="text-3xl text-white mb-3 font-bold">Tags : </br>
                <span class="text-black text-base font-normal">
                    <button class="bg-[#f8d7da] cursor-text p-1 rounded-lg ms-4">${response[0].strTags}</button>
                </span>
            </h1>
            <a href="${response[0].strSource}" target="_blank"><button class="bg-[#198754] hover:bg-[#157347] ms-4 mt-2 px-4 py-2 rounded-lg text-white">Source</button></a>
            <a href="${response[0].strYoutube}" target="_blank"><button class="bg-[#dc3545] hover:bg-[#bb2d3b] ms-1 mt-2 px-4 py-2 rounded-lg text-white">Youtube</button></a>
        </div>
    </div>`;
    
    document.getElementById("demo2").innerHTML = (box);
}

//-------------------------Home--------------------------
let responseHome;
async function reloadFood(name){
    let apiKey = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
    let data = await fetch(apiKey + name);
    let response = await data.json();
    responseHome = response;
    display(response.meals);
    searchByName(response.meals);
    searchByLetter(response.meals);
    console.log(response);
}

function display(response){
    let box = "";
    for (let i = 0; i < response.length; i++){
        box += `
        <div class="cont flex justify-center items-center cursor-pointer"  onclick="displayDetailsHome('${i}')">
            <img src="${response[i].strMealThumb}" alt="food img">
            <span class="parent">
                <h1 class="child">${response[i].strMeal}</h1>
            </span>
        </div>`
    }
    document.getElementById("demo").innerHTML = (box);
}

function displayDetailsHome(index){
    document.querySelector(".foodImg").classList.replace("block", "hidden");
    document.querySelector(".contactUs").classList.replace("block", "hidden");
    document.querySelector(".cate").classList.replace("block", "hidden");
    document.querySelector(".Area").classList.replace("block", "hidden");
    document.querySelector(".ingre").classList.replace("block", "hidden");
    document.querySelector(".Search").classList.replace("block", "hidden");
    document.querySelector(".foodDetails").classList.replace("hidden", "block");
    
    let box = "";
    for (let i = index; i < index+1; i++){
        box = `
        <div class="container flex lg:flex-row sm:flex-col gap-x-7">
            <div class="img w-[32%]">
                <img src="${responseHome.meals[index].strMealThumb}" alt="food img" class="rounded-xl">
                <h1 class="text-3xl font-semibold text-white">${responseHome.meals[index].strMeal}</h1>
            </div>

                <div class="w-[68%]">
                <span>
                    <h1 class="text-3xl font-semibold text-white mb-2">Instructions</h1>
                    <p class="ms-4 text-white mb-3">${responseHome.meals[index].strInstructions}</p>
                </span>
                <h1 class="text-3xl text-white mb-3 font-bold">Area : <span class="font-semibold">${responseHome.meals[index].strArea}</span></h1>
                <h1 class="text-3xl text-white mb-3 font-bold">Category  : <span class="font-semibold">${responseHome.meals[index].strCategory}</span></h1>
                <h1 class="text-3xl text-white mb-3 font-bold">Recipes  : </br>
                    <span class="text-black text-base font-normal">
                        <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${responseHome.meals[index].strMeasure1 + " " + responseHome.meals[index].strIngredient1}</button>
                        <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${responseHome.meals[index].strMeasure2 + " " + responseHome.meals[index].strIngredient2}</button>
                        <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${responseHome.meals[index].strMeasure3 + " " + responseHome.meals[index].strIngredient3}</button>
                        <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${responseHome.meals[index].strMeasure4 + " " + responseHome.meals[index].strIngredient4}</button>
                        <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${responseHome.meals[index].strMeasure5 + " " + responseHome.meals[index].strIngredient5}</button>
                        <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${responseHome.meals[index].strMeasure6 + " " + responseHome.meals[index].strIngredient6}</button>
                        <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${responseHome.meals[index].strMeasure7 + " " + responseHome.meals[index].strIngredient7}</button>
                        <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${responseHome.meals[index].strMeasure8 + " " + responseHome.meals[index].strIngredient8}</button>
                        <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${responseHome.meals[index].strMeasure9 + " " + responseHome.meals[index].strIngredient9}</button>
                        <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${responseHome.meals[index].strMeasure10 + " " + responseHome.meals[index].strIngredient10}</button>
                        <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${responseHome.meals[index].strMeasure11 + " " + responseHome.meals[index].strIngredient11}</button>
                        <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${responseHome.meals[index].strMeasure12 + " " + responseHome.meals[index].strIngredient12}</button>
                        <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${responseHome.meals[index].strMeasure13 + " " + responseHome.meals[index].strIngredient13}</button>
                        <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${responseHome.meals[index].strMeasure14 + " " + responseHome.meals[index].strIngredient14}</button>
                        <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${responseHome.meals[index].strMeasure15 + " " + responseHome.meals[index].strIngredient15}</button>
                        <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${responseHome.meals[index].strMeasure16 + " " + responseHome.meals[index].strIngredient16}</button>
                        <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${responseHome.meals[index].strMeasure17 + " " + responseHome.meals[index].strIngredient17}</button>
                        <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${responseHome.meals[index].strMeasure18 + " " + responseHome.meals[index].strIngredient18}</button>
                        <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${responseHome.meals[index].strMeasure19 + " " + responseHome.meals[index].strIngredient19}</button>
                        <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${responseHome.meals[index].strMeasure20 + " " + responseHome.meals[index].strIngredient20}</button>
                    </span>
                </h1>
                <h1 class="text-3xl text-white mb-3 font-bold">Tags : </br>
                    <span class="text-black text-base font-normal">
                        <button class="bg-[#f8d7da] cursor-text p-1 rounded-lg ms-4">${responseHome.meals[index].strTags}</button>
                    </span>
                </h1>
                <a href="${responseHome.meals[index].strSource}" target="_blank"><button class="bg-[#198754] hover:bg-[#157347] ms-4 mt-2 px-4 py-2 rounded-lg text-white">Source</button></a>
                <a href="${responseHome.meals[index].strYoutube}" target="_blank"><button class="bg-[#dc3545] hover:bg-[#bb2d3b] ms-1 mt-2 px-4 py-2 rounded-lg text-white">Youtube</button></a>
            </div>
        </div>`;
    }
    document.getElementById("demo2").innerHTML = (box);
}

//---------------------Search----------------------

$(".sideNav .sideNavInfo span ul li#1").click(function(){
    $(document).ready(function(){
        $(".loadPage").fadeIn(0);
        $(".loadPage").fadeOut(1000);
        $("body").css("overflow", "visible");
    });
    document.querySelector("#demo2").classList.replace("block", "hidden");
    document.querySelector(".foodImg").classList.replace("block", "hidden");
    document.querySelector(".contactUs").classList.replace("block", "hidden");
    document.querySelector(".cate").classList.replace("block", "hidden");
    document.querySelector(".Area").classList.replace("block", "hidden");
    document.querySelector(".ingre").classList.replace("block", "hidden");
    document.querySelector(".Search").classList.replace("hidden", "block");
    reloadFood("");

    $(".sideNav").animate({left: -sideNavWidth}, 500);
    $(".sideNav .sideNavPull span i.fa-xmark").toggle(500);
    $(".sideNav .sideNavPull span i.fa-bars").toggle(500);
});

let searchName = document.querySelector(".Search .flex .partOne input");
searchName.addEventListener("input", function(){
    reloadFood(this.value);
});
function searchByName(response){
    let box = "";
    for(let i = 0; i < response.length; i++){
        box += `
        <div class="cont flex justify-center items-center cursor-pointer">
            <img src="${response[i].strMealThumb}" alt="food img">
            <span class="parent">
                <h1 class="child" onclick="displayDetails(${response, i})">${response[i].strMeal}</h1>
            </span>
        </div>`
    }
    document.getElementById("demo3").innerHTML = (box);
}

let searchletter = document.querySelector(".Search .flex .partTwo input");
searchletter.addEventListener("input", function(){
    reloadFood(this.value);
});
function searchByLetter(response){
    let box = "";
    for(let i = 0; i < response.length; i++){
        box += `
        <div class="cont flex justify-center items-center cursor-pointer">
            <img src="${response[i].strMealThumb}" alt="food img">
            <span class="parent">
                <h1 class="child" onclick="displayDetails(${response, i})">${response[i].strMeal}</h1>
            </span>
        </div>`
    }
    document.getElementById("demo3").innerHTML = (box);
}

//-------------------contact us------------------------

$(".sideNav .sideNavInfo span ul li#5").click(function(){
    $(document).ready(function(){
        $(".loadPage").fadeIn(0);
        $(".loadPage").fadeOut(1000);
        $("body").css("overflow", "visible");
    });
    document.querySelector(".foodImg").classList.replace("block", "hidden");
    document.querySelector(".Search").classList.replace("block", "hidden");
    document.querySelector(".cate").classList.replace("block", "hidden");
    document.querySelector(".Area").classList.replace("block", "hidden");
    document.querySelector(".ingre").classList.replace("block", "hidden");
    document.querySelector("#demo2").classList.replace("block", "hidden");
    document.querySelector(".contactUs").classList.replace("hidden", "block");

    $(".sideNav").animate({left: -sideNavWidth}, 500);
    $(".sideNav .sideNavPull span i.fa-xmark").toggle(500);
    $(".sideNav .sideNavPull span i.fa-bars").toggle(500);
});

$(".contactUs .flex button").click(function(){
    let inputOne = document.querySelector("input.one");
    inputOne.value = "";
    let inputTwo = document.querySelector("input.Two");
    inputTwo.value = "";
    let inputThree = document.querySelector("input.Three");
    inputThree.value = "";
    let inputfour = document.querySelector("input.four");
    inputfour.value = "";
    let inputFive = document.querySelector("input.Five");
    inputFive.value = "";
    let inputSix = document.querySelector("input.Six");
    inputSix.value = "";
});

//--------------------Categories------------------------

$(".sideNav .sideNavInfo span ul li#2").click(function(){
    $(document).ready(function(){
        $(".loadPage").fadeIn(0);
        $(".loadPage").fadeOut(1000);
        $("body").css("overflow", "visible");
    });
    document.querySelector(".foodImg").classList.replace("block", "hidden");
    document.querySelector(".Search").classList.replace("block", "hidden");
    document.querySelector(".contactUs").classList.replace("block", "hidden");
    document.querySelector(".Area").classList.replace("block", "hidden");
    document.querySelector(".ingre").classList.replace("block", "hidden");
    document.querySelector("#demo2").classList.replace("block", "hidden");
    document.querySelector(".cate").classList.replace("hidden", "block");
    reloadCate();

    $(".sideNav").animate({left: -sideNavWidth}, 500);
    $(".sideNav .sideNavPull span i.fa-xmark").toggle(500);
    $(".sideNav .sideNavPull span i.fa-bars").toggle(500);
});

async function reloadCate(){
    let apiKey = "https://www.themealdb.com/api/json/v1/1/categories.php";
    let data = await fetch(apiKey);
    let response = await data.json();
    displayCate(response.categories)
    console.log(response);
}

function displayCate(response){
    let box = "";
    for (let i = 0; i < response.length; i++){
        box += `
        <div class="cont flex justify-center items-center cursor-pointer" onclick="reloadCateIn('${response[i].strCategory}')">
            <img src="${response[i].strCategoryThumb}" alt="food img">
            <div class="parent">
                <div class="childCate">
                    <h1>${response[i].strCategory}</h1>
                    <p>${response[i].strCategoryDescription}</p>
                </div>
            </div>
        </div>`
    }
    document.getElementById("demo4").innerHTML = (box);
}

async function reloadCateIn(cate){
    let apiKey = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
    let data = await fetch(apiKey + cate);
    let response = await data.json();
    responseCate = response;
    displayCateIN(response.meals);
    console.log(response);
}

function displayCateIN(response){
    let box = "";
    for (let i = 0; i < response.length; i++){
        box += `
        <div class="cont flex justify-center items-center cursor-pointer" onclick="relodeId('${response[i].idMeal}')">
            <img src="${response[i].strMealThumb}" alt="food img">
            <span class="parent">
                <h1 class="child">${response[i].strMeal}</h1>
            </span>
        </div>`
    }
    document.getElementById("demo4").innerHTML = (box);
}



//-----------------------Area---------------------------

$(".sideNav .sideNavInfo span ul li#3").click(function(){
    $(document).ready(function(){
        $(".loadPage").fadeIn(0);
        $(".loadPage").fadeOut(1000);
        $("body").css("overflow", "visible");
    });
    document.querySelector(".foodImg").classList.replace("block", "hidden");
    document.querySelector(".Search").classList.replace("block", "hidden");
    document.querySelector(".contactUs").classList.replace("block", "hidden");
    document.querySelector(".cate").classList.replace("block", "hidden");
    document.querySelector(".ingre").classList.replace("block", "hidden");
    document.querySelector("#demo2").classList.replace("block", "hidden");
    document.querySelector(".Area").classList.replace("hidden", "block");
    reloadArea();

    $(".sideNav").animate({left: -sideNavWidth}, 500);
    $(".sideNav .sideNavPull span i.fa-xmark").toggle(500);
    $(".sideNav .sideNavPull span i.fa-bars").toggle(500);
});

async function reloadArea(){
    let apiKey = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";
    let data = await fetch(apiKey);
    let response = await data.json();
    displayArea(response.meals)
    console.log(response);
}

function displayArea(response){
    let box = "";
    for (let i = 0; i < response.length; i++){
        box += `
        <div class="flex flex-col justify-center items-center cursor-pointer" onclick="reloadAreaIn('${response[i].strArea}')">
            <i class="fa-solid fa-house-laptop fa-4x text-white"></i>
            <h1 class="text-3xl text-white font-semibold">${response[i].strArea}</h1>
        </div>`
    }
    document.getElementById("demo5").innerHTML = (box);
}

let responseArea;
async function reloadAreaIn(Area){
    console.log(Area);
    let apiKey = "https://www.themealdb.com/api/json/v1/1/filter.php?a=";
    let data = await fetch(apiKey + Area);
    let response = await data.json();
    responseArea = response;
    console.log("hi", response);
    displayAreaIN(response.meals)
}

function displayAreaIN(response){
    let box = "";
    for (let i = 0; i < response.length; i++){
        box += `
        <div class="cont flex justify-center items-center cursor-pointer" onclick="relodeId('${response[i].idMeal}')">
            <img src="${response[i].strMealThumb}" alt="food img">
            <span class="parent">
                <h1 class="child">${response[i].strMeal}</h1>
            </span>
        </div>`
    }
    document.getElementById("demo5").innerHTML = (box);
}

function displayDetailsArea(response){
    document.querySelector(".foodImg").classList.replace("block", "hidden");
    document.querySelector(".contactUs").classList.replace("block", "hidden");
    document.querySelector(".cate").classList.replace("block", "hidden");
    document.querySelector(".Area").classList.replace("block", "hidden");
    document.querySelector(".ingre").classList.replace("block", "hidden");
    document.querySelector(".Search").classList.replace("block", "hidden");
    document.querySelector(".foodDetails").classList.replace("hidden", "block");

    let box = `
    <div class="container flex sm:flex-col gap-x-7">
        <div class="img w-[32%]">
            <img src="${response[0].strMealThumb}" alt="food img" class="rounded-xl">
            <h1 class="text-3xl font-semibold text-white">${response[0].strMeal}</h1>
        </div>

        <div class="w-[68%]">
            <span>
                <h1 class="text-3xl font-semibold text-white mb-2">Instructions</h1>
                <p class="ms-4 text-white mb-3">${response[0].strInstructions}</p>
            </span>
            <h1 class="text-3xl text-white mb-3 font-bold">Area : <span class="font-semibold">${response[0].strArea}</span></h1>
            <h1 class="text-3xl text-white mb-3 font-bold">Category  : <span class="font-semibold">${response[0].strCategory}</span></h1>
            <h1 class="text-3xl text-white mb-3 font-bold">Recipes  : </br>
                <span class="text-black text-base font-normal">
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure1 + " " + response[0].strIngredient1}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure2 + " " + response[0].strIngredient2}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure3 + " " + response[0].strIngredient3}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure4 + " " + response[0].strIngredient4}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure5 + " " + response[0].strIngredient5}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure6 + " " + response[0].strIngredient6}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure7 + " " + response[0].strIngredient7}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure8 + " " + response[0].strIngredient8}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure9 + " " + response[0].strIngredient9}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure10 + " " + response[0].strIngredient10}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure11 + " " + response[0].strIngredient11}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure12 + " " + response[0].strIngredient12}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure13 + " " + response[0].strIngredient13}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure14 + " " + response[0].strIngredient14}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure15 + " " + response[0].strIngredient15}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure16 + " " + response[0].strIngredient16}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure17 + " " + response[0].strIngredient17}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure18 + " " + response[0].strIngredient18}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure19 + " " + response[0].strIngredient19}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure20 + " " + response[0].strIngredient20}</button>
                </span>
            </h1>
            <h1 class="text-3xl text-white mb-3 font-bold">Tags : </br>
                <span class="text-black text-base font-normal">
                    <button class="bg-[#f8d7da] cursor-text p-1 rounded-lg ms-4">${response[0].strTags}</button>
                </span>
            </h1>
            <a href="${response[0].strSource}" target="_blank"><button class="bg-[#198754] hover:bg-[#157347] ms-4 mt-2 px-4 py-2 rounded-lg text-white">Source</button></a>
            <a href="${response[0].strYoutube}" target="_blank"><button class="bg-[#dc3545] hover:bg-[#bb2d3b] ms-1 mt-2 px-4 py-2 rounded-lg text-white">Youtube</button></a>
        </div>
    </div>`;
    
    document.getElementById("demo2").innerHTML = (box);
}

//-------------------------ingrediant------------------------

$(".sideNav .sideNavInfo span ul li#4").click(function(){
    $(document).ready(function(){
        $(".loadPage").fadeIn(0);
        $(".loadPage").fadeOut(1000);
        $("body").css("overflow", "visible");
    });
    document.querySelector(".foodImg").classList.replace("block", "hidden");
    document.querySelector(".Search").classList.replace("block", "hidden");
    document.querySelector(".contactUs").classList.replace("block", "hidden");
    document.querySelector(".cate").classList.replace("block", "hidden");
    document.querySelector(".Area").classList.replace("block", "hidden");
    document.querySelector("#demo2").classList.replace("block", "hidden");
    document.querySelector(".ingre").classList.replace("hidden", "block");
    reloadingre();

    $(".sideNav").animate({left: -sideNavWidth}, 500);
    $(".sideNav .sideNavPull span i.fa-xmark").toggle(500);
    $(".sideNav .sideNavPull span i.fa-bars").toggle(500);
});

async function reloadingre(){
    let apiKey = "https://www.themealdb.com/api/json/v1/1/list.php?i=list";
    let data = await fetch(apiKey);
    let response = await data.json();
    displayingre(response.meals)
    console.log(response);
}

function displayingre(response){
    let box = "";
    for (let i = 0; i < 20; i++){
        box += `
        <div class="flex flex-col justify-center items-center cursor-pointer text-white" onclick="reloadIngreIn('${response[i].strIngredient}')">
            <i class="fa-solid fa-drumstick-bite fa-4x"></i>
            <h1 class="text-3xl text-white font-semibold text-center">${response[i].strIngredient}</h1>
            <p class="text-center">${response[i].strDescription.slice(0, 100)}</p>
        </div>`
    }
    document.getElementById("demo6").innerHTML = (box);
}

async function reloadIngreIn(Ingre){
    let apiKey = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";
    let data = await fetch(apiKey + Ingre);
    let response = await data.json();
    responseIngre = response;
    console.log(response);
    displayIngreIN(response.meals);
}

function displayIngreIN(response){
    let box = "";
    for (let i = 0; i < response.length; i++){
        box += `
        <div class="cont flex justify-center items-center cursor-pointer" onclick="relodeId('${response[i].idMeal}')">
            <img src="${response[i].strMealThumb}" alt="food img">
            <span class="parent">
                <h1 class="child">${response[i].strMeal}</h1>
            </span>
        </div>`
    }
    document.getElementById("demo6").innerHTML = (box);
}

function displayDetailsIngre(response){
    document.querySelector(".foodImg").classList.replace("block", "hidden");
    document.querySelector(".contactUs").classList.replace("block", "hidden");
    document.querySelector(".cate").classList.replace("block", "hidden");
    document.querySelector(".Area").classList.replace("block", "hidden");
    document.querySelector(".ingre").classList.replace("block", "hidden");
    document.querySelector(".Search").classList.replace("block", "hidden");
    document.querySelector(".foodDetails").classList.replace("hidden", "block");

    let box = `
    <div class="container flex sm:flex-col gap-x-7">
        <div class="img w-[32%]">
            <img src="${response[0].strMealThumb}" alt="food img" class="rounded-xl">
            <h1 class="text-3xl font-semibold text-white">${response[0].strMeal}</h1>
        </div>

        <div class="w-[68%]">
            <span>
                <h1 class="text-3xl font-semibold text-white mb-2">Instructions</h1>
                <p class="ms-4 text-white mb-3">${response[0].strInstructions}</p>
            </span>
            <h1 class="text-3xl text-white mb-3 font-bold">Area : <span class="font-semibold">${response[0].strArea}</span></h1>
            <h1 class="text-3xl text-white mb-3 font-bold">Category  : <span class="font-semibold">${response[0].strCategory}</span></h1>
            <h1 class="text-3xl text-white mb-3 font-bold">Recipes  : </br>
                <span class="text-black text-base font-normal">
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure1 + " " + response[0].strIngredient1}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure2 + " " + response[0].strIngredient2}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure3 + " " + response[0].strIngredient3}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure4 + " " + response[0].strIngredient4}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure5 + " " + response[0].strIngredient5}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure6 + " " + response[0].strIngredient6}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure7 + " " + response[0].strIngredient7}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure8 + " " + response[0].strIngredient8}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure9 + " " + response[0].strIngredient9}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure10 + " " + response[0].strIngredient10}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure11 + " " + response[0].strIngredient11}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure12 + " " + response[0].strIngredient12}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure13 + " " + response[0].strIngredient13}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure14 + " " + response[0].strIngredient14}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure15 + " " + response[0].strIngredient15}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure16 + " " + response[0].strIngredient16}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure17 + " " + response[0].strIngredient17}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure18 + " " + response[0].strIngredient18}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure19 + " " + response[0].strIngredient19}</button>
                    <button class="bg-[#cff4fc] cursor-text p-1 rounded-lg ms-4">${response[0].strMeasure20 + " " + response[0].strIngredient20}</button>
                </span>
            </h1>
            <h1 class="text-3xl text-white mb-3 font-bold">Tags : </br>
                <span class="text-black text-base font-normal">
                    <button class="bg-[#f8d7da] cursor-text p-1 rounded-lg ms-4">${response[0].strTags}</button>
                </span>
            </h1>
            <a href="${response[0].strSource}" target="_blank"><button class="bg-[#198754] hover:bg-[#157347] ms-4 mt-2 px-4 py-2 rounded-lg text-white">Source</button></a>
            <a href="${response[0].strYoutube}" target="_blank"><button class="bg-[#dc3545] hover:bg-[#bb2d3b] ms-1 mt-2 px-4 py-2 rounded-lg text-white">Youtube</button></a>
        </div>
    </div>`;
    
    document.getElementById("demo2").innerHTML = (box);
}