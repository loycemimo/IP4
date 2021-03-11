var sizeValue
function pizzaSize(){
    sizeValue= document.getElementById("size").value
    var x=document.getElementById("size").innerHTML
    return parseInt(sizeValue) 
}

function crustType(){
    var crustValue= document.getElementById("crust").value
    return parseInt(crustValue)
}

function toppingChoice0(){
    var mushrooms= 0
    var toppingValue=document.getElementById("toppingone")
    if (toppingValue.checked === true){
      mushrooms= 150
    }
    return parseInt(mushrooms)
}

function toppingChoice1(){
    var sausage= 0
    var toppingValue=document.getElementById("toppingone")
    if (toppingValue.checked === true){
      sausage= 150
    }
    return parseInt(sausage)
}    

function toppingChoice2(){
    var onions= 0
    var toppingValue=document.getElementById("toppingtwo")
    if (toppingValue.checked === true){
      oninons= 150
    }
    return parseInt(onions)
}

function toppingChoice3(){
    var tikkaSauce= 0
    var toppingValue=document.getElementById("toppingthree")
    if (toppingValue.checked === true){
      tikkaSauce= 150
    }
    return parseInt(tikkaSauce)
}

function toppingChoice4(){
    var mozarellaCheese= 0
    var toppingValue=document.getElementById("toppingfour")
    if (toppingValue.checked === true){
      mozarellaCheese= 150
    }
    return parseInt(mozarellaCheese)
}


function toppingChoice(){
        event.preventDefault()
        var toppingsTotal=(toppingChoice0() + toppingChoice1() + toppingChoice2()
         + toppingChoice3() + toppingChoice4())
         return parseInt(toppingsTotal)
        
}

function pizzaQuantity(){
    var pizzaNo= document.getElementById("numberofpizza").value
    return parseInt(pizzaNo) 
}

function collectResults(){
    event.preventDefault()
    var total=(pizzaSize() + crustType() + toppingChoice()) * (pizzaQuantity())
    alert("your total amount is " + total)
}

function display(){
    document.getElementById('pizzainfo').style.display = "block";
}
