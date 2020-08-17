function Allfun()
{
    document.getElementById("img1").src = "images/sweet1.jpg";
    document.getElementById("img2").src = "images/cupcake1.jpg";
    document.getElementById("img3").src = "images/cake1.jpg";
    document.getElementById("img4").src = "images/doughnut1.jpg";
    document.querySelector("#item1").innerHTML="Sweet "; 
    document.querySelector("#item2").innerHTML="Cupcake"; 
    document.querySelector("#item3").innerHTML="Cake";
    document.querySelector("#item4").innerHTML="Doughnut"; 

}

function Cakefun()
{
    document.getElementById("img1").src = "images/cake4.jpg";
    document.getElementById("img2").src = "images/cake1.jpg";
    document.getElementById("img3").src = "images/cake3.jpg";
    document.getElementById("img4").src = "images/cake2.jpg";
    var name=document.querySelectorAll(".itemName");  
    name.forEach((x) => x.innerHTML="Cake"); 
}

function CupCakefun()
{
    document.getElementById("img1").src = "images/cupcake4.jpg";
    document.getElementById("img2").src = "images/cupcake1.jpg";
    document.getElementById("img3").src = "images/cupcake2.jpg";
    document.getElementById("img4").src = "images/cupcake3.jpg";
    var name=document.querySelectorAll(".itemName");  
    name.forEach((x) => x.innerHTML="Cupcake"); 
}
function Sweetsfun()
{
    document.getElementById("img1").src = "images/sweet1.jpg";
    document.getElementById("img2").src = "images/sweet2.jpg";
    document.getElementById("img3").src = "images/sweet3.jpg";
    document.getElementById("img4").src = "images/sweet4.jpg";
    var name=document.querySelectorAll(".itemName");  
    name.forEach((x) => x.innerHTML="Sweet"); 
}

function Doughnutfun()
{
    document.getElementById("img1").src = "images/doughnut1.jpg";
    document.getElementById("img2").src = "images/doughnut2.jpg";
    document.getElementById("img3").src = "images/doughnut3.jpg";
    document.getElementById("img4").src = "images/doughnut4.jpg";
    var name=document.querySelectorAll(".itemName");  
    name.forEach((x) => x.innerHTML="Doughnut"); 
}

function Searchfn(){
    var val= document.getElementById("data").value;
    switch (val.toLowerCase()) {
        case 'all':
            Allfun();
            break;
        case 'cake':
            Cakefun();
            break;
        case 'cakes':
        Cakefun();
        break;
        case 'cupcake':
            CupCakefun();
            break;
        case 'cupcakes':
            CupCakefun();
            break;    
        case 'sweets':
            Sweetsfun();
            break;
        case 'doughnut':
            Doughnutfun();
            break;
        case 'doughnuts':
            Doughnutfun();
            break;
        default: 
           alert("Either Item Is Not Available or Incorrect Input");
           document.getElementById("data").value="";
            break;
    }
}