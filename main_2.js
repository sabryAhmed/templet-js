
let container=document.querySelector('.cardet')
let containerShowProdect=document.querySelector('.pox .sass')

let prodects=[
    {
         id:1,
        name:"Food",
        price:"190$",
        img:"imgs/coffee.jpg",
        couter:'0'
    },
    {
         id:2,
        name:"Food",
        price:"11$",
        img:'imgs/(130).jpg',
        couter:'0'
    },
    {
         id:3,
        name:"Food",
        price:"102$",
        img:"imgs/(16).jpg",
        couter:'0'
    },
    {
         id:4,
        name:"Food",
        price:"12$",
        img:"imgs/donut.jpg",
        couter:'0'
    },
    {
         id:5,
        name:"Food",
        price:"22$",
        img:"imgs/(157).jpg",
        couter:'0'
    },
    {
         id:6,
        name:"Food",
        price:"20$",
        img:"imgs/(7).png",
        couter:'0'
    },
    {
         id:7,
        name:"Food",
        price:"10$",
        img:"imgs/(16).png",
        couter:'0'
    },
]




function showProdects(){
    let items='';
    for(let i=0; i<prodects.length;i++){
        items+=`
         <div class="box">
            <div class="card-img">
                <img src="${prodects[i].img}" alt="">
            </div>
            <div class="details">
                <p>name:${prodects[i].name}</p>
                <b>price:${prodects[i].price}</b>
                
                <button onclick="PushBrodect(${i})">Add to card</button>
            </div>
        </div>
        
        
        `

    }container.innerHTML=items

}
showProdects()

let cart
if(localStorage.getItem('prodct') == null){
    cart=[]
}
else{
    cart=JSON.parse(localStorage.getItem('prodct'))
}
function PushBrodect(p){
    cart.push(prodects[p]);

    ProdectsManue();
    

    localStorage.setItem('prodct',JSON.stringify(cart))
}

function ProdectsManue(){
    let mars=''
    cart.map((pramiter,index)=>{
        return mars+=`
        <div class="prodec">
                   <div>
                       <img src="${pramiter.img}" alt="">
                   </div>
                   <div>
                       <b>name:${pramiter.name}</b>
                       <samp>price:${pramiter.price}</samp>
                   </div>

                   <div>
                       <i class="fa-solid fa-plus"></i>
                       <span>0</span>
                       <i class="fa-solid fa-minus"></i>
                       <i onclick="deletProdect(${index})" class="fa-regular fa-trash-can"></i>
                   </div>
                   
               </div>

       
       `
     
})


containerShowProdect.innerHTML=mars
}



function deletProdect(count){
    cart.splice(count,1);
    ProdectsManue()
}




$('.close').click(function(){
    $('.menu').hide(500)
})

$('.addShop').click(function(){
    $('.menu').toggle(400)
})