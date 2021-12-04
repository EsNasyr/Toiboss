const accordion = document.getElementsByClassName('contentBx')

for(i = 0;i < accordion.length; i++){
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}

$('#demoDefaultSelection').ddslick({

    onSelected: function(selectedData){
        //callback function: do something with selectedData;
    }
});


$('.pepperoni-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive:{
        0:{
            items:1
        },
        1000:{
            items: 1
        },
    }
})
$('.awards-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:3
        },
        1000:{
            items:3
        }
    }
})






