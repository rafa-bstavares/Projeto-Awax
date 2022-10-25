document.querySelectorAll(".banner .slider-pointer").forEach(function(item, index){
    item.addEventListener("click", function(){
        let newMargin = index*(document.querySelector(".slide").clientWidth)
        document.querySelector(".banner .sliders").style.marginLeft = `-${newMargin}px`
        document.querySelector(".banner .slider-pointer.selected").classList.remove("selected")
        item.classList.add("selected")
    })
})

document.querySelectorAll(".mascara-bg .slider-pointer").forEach(function(item, index){
    item.addEventListener("click", function(){
        let newMargin = index*((document.querySelector(".mascara-bg .slide").clientWidth) + 15)
        document.querySelector(".mascara-bg .sliders").style.marginLeft = `-${newMargin}px`
        document.querySelector(".mascara-bg .slider-pointer.selected").classList.remove("selected")
        item.classList.add("selected")
    })
})



