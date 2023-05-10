const addressbtn = document.querySelector('#address-form')
const addressclose = document.querySelector('#address-close')

let index = 0
console.log (addressbtn)
console.log (addressclose)

addressbtn.addEventListener("click" , function() {
    document.querySelector('.address-form').style.display="flex" 
   

})
addressclose.addEventListener("click" , function() {
    document.querySelector('.address-form').style.display="none" 


})

//slider
const rightbtn = document.querySelector('.fa-chevron-right')
const leftbtn = document.querySelector('.fa-chevron-left')
const imgnumber = document.querySelectorAll('.slider-content-left-top img')
console.log(imgnumber.length)
rightbtn.addEventListener ("click" , function(){
    index = index+1
    if(index>imgnumber.length-1){
        index = 0
    }
    document.querySelector(".slider-content-left-top").style.right=index *100+"%"
})
leftbtn.addEventListener ("click" , function(){
    index= index-1
    if(index<=0){
        index=imgnumber.length-1
    }
    document.querySelector(".slider-content-left-top").style.right=index *100+"%"
})
//slider1
const imgnumberli = document.querySelectorAll('.slider-content-left-bottom li')
imgnumberli.forEach(function(image, index){
    image.addEventListener("click", function(){
        removeactive()
        document.querySelector(".slider-content-left-top").style.right=index *100+"%" 
        image.classList.add("active")
    })
})
function removeactive(){
    let imageactive = document.querySelector('.active')
    imageactive.classList.remove("active")
}
//slider gia dung

/*slider2*/
function imgauto(){
    index=index+1
    if(index>imgnumber.length-1){
        index = 0
    }
    removeactive()
    document.querySelector(".slider-content-left-top").style.right=index *100+"%" 
   imgnumberli[index].classList.add("active")
}
setInterval(imgauto, 2500)
//------------------slider product111111111111111111--------------------------//
const rightbtntwo = document.querySelector('.fa-chervon-right-two')
const leftbtntwo = document.querySelector('.fa-chervon-left-two')
const imgnumbertwo = document.querySelectorAll('.slider-product-one-content-items')
console.log(imgnumbertwo)
rightbtntwo.addEventListener ("click" , function(){
    index = index+1
    if(index>imgnumbertwo.length-1){
        index = 0
    }
    document.querySelector(".slider-product-one-content-items-content").style.right=index *100+"%"
})
leftbtntwo.addEventListener ("click" , function(){
    index= index-1
    if(index<=0){
        index=imgnumbertwo.length-1
    }
    document.querySelector(".slider-product-one-content-items-content").style.right=index *100+"%"
})
// slider three//
const rightbtnthree = document.querySelector('.fa-chervon-right-three')
const leftbtnthree = document.querySelector('.fa-chervon-left-three')
const imgnumberthree = document.querySelectorAll('.slider-product-two-content-items')
console.log(imgnumberthree)
rightbtnthree.addEventListener ("click" , function(){
    index = index+1
    if(index>imgnumberthree.length-1){
        index = 0
    }
    document.querySelector(".slider-product-two-content-items-content").style.right=index *100+"%"
})
leftbtnthree.addEventListener ("click" , function(){
    index= index-1
    if(index<=0){
        index=imgnumberthree.length-1
    }
    document.querySelector(".slider-product-two-content-items-content").style.right=index *100+"%"
})

