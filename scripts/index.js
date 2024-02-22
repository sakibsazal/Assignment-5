


const allBtn = document.getElementsByClassName("sit");


for(const sit of allBtn){
    sit.addEventListener("click", function(event){
        const seat = event.target.innerText;
        const clas = "Economoy"; 
const price = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[5].childNodes[3].childNodes[3].childNodes[3].childNodes[1].childNodes[0].innerText;

const selectedContainer = document.getElementById("seat-price");





const seatCount = getConvertedValue("seat-booked");
if(seatCount+1>4){
    alert("Your limit is over");
    return;
}


event.target.setAttribute("disabled", false);
event.target.style.backgroundColor ="#1DD100"



const seatLeft = getConvertedValue("seat-left");
document.getElementById("seat-left").innerText = seatLeft -1;

const seatBooked = getConvertedValue("seat-booked");
document.getElementById("seat-booked").innerText = seatBooked +1;






const div = document.createElement("div");
div.classList.add("flex");
div.classList.add("justify-between");
div.classList.add("mx-8");
div.classList.add("my-4");
div.classList.add("text-[16px]");
div.classList.add("font-normal");
div.classList.add("text-[#03071299]");


const p1 = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");

p1.innerText = seat;
p2.innerText = clas;
p3.innerText = price;

div.appendChild(p1);
div.appendChild(p2);
div.appendChild(p3);

selectedContainer.appendChild(div);


updateTotalPrice(price);
updateGrandTotal();
    })
}

function updateGrandTotal(status){
    const totalPrice = getConvertedValue("total-price");  
    if(status == undefined){
         
        document.getElementById("grand-total").innerText = totalPrice;
    }else {
       const couponCode = document.getElementById("coupon-code").value;
    if(couponCode == "NEW15"){
        const discounded = totalPrice * 0.15;
        document.getElementById("grand-total").innerText = totalPrice - discounded;
               }
              else if(couponCode == "Couple 20"){
                const discounded = totalPrice * 0.2;
               document.getElementById("grand-total").innerText = totalPrice - discounded;
                    }
               else{
                alert("Please inter a valid coupon code")
               }
    
            }
   
}


function updateTotalPrice(price){
    const totalPrice = getConvertedValue("total-price");
    const sum = totalPrice + parseInt(price);
    document.getElementById("total-price").innerText = sum;
}



    const seatLeft = getConvertedValue('seat-left');
    const seatBooked= getConvertedValue('seat-booked');

   function getConvertedValue(id) {
    const seat = document.getElementById(id).innerText;
    const convertSeat = parseInt(seat);
   return convertSeat;
    
   }

document.getElementById("coupon-code").addEventListener('keyup', function(event){
const text = event.target.value;
const applyBtb = document.getElementById("apply");

if(text === text){
    applyBtb.removeAttribute("disabled")
}


})
document.getElementById("apply").addEventListener("click", function(){
   
    const applyed = document.getElementById("coupon");
  

   if(applyed === 'NEW15' || 'Couple 20'){
    applyed.style.display = 'none';
   }
   else{
    applyed.style.display = 'show';
   }

})

document.getElementById("phone-number").addEventListener('keyup', function(event){
    const number = event.target.value;
    const nextBtb = document.getElementById("next");
    
    if(number === number){
        nextBtb.removeAttribute("disabled")
    }
    
    
    })
