
const boxcheck = document.querySelector("input");

const price = document.getElementById("price");

const monthlyprice = document.querySelector(".monthly-price");

const middlemonthly = document.querySelector(".middle-monthly-price");

const middleprice = document.querySelector(".middle-price");

const rightprice = document.querySelector(".right-price");

const pricee = document.querySelector(".pricee");

const check = document.getElementById("check");

boxcheck.onclick = function(){

    if(check.checked === true){
        monthlyprice.classList.toggle("active");

        middlemonthly.classList.toggle("active");
        
        rightprice.classList.toggle("active");

        price.style.display = "none";
        middleprice.style.display = "none";
        pricee.style.display = "none";

    } else{

        monthlyprice.classList.remove("active");

        middlemonthly.classList.remove("active");

        rightprice.classList.remove("active");

        price.style.display = "flex";
        middleprice.style.display = "flex";
        pricee.style.display = "flex";
    }
}
