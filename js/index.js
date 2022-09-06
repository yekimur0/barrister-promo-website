// const tabs1 = new meTabs('tab', {
//     isChaged: () => {}
// })

/* фокус на таб */
// tabs1.switchTabs(document.querySelector('#tab2'))


// owl carousel plugins

$('.owl-carousel').owlCarousel({
 loop:true,
 margin:40,
 responsive:{
     0:{
         items:2,
        //  autoplay:true,
         autoplayTimeout:2000,
        //  autoplayHoverPause:true,
     },
     600:{
         items:3,
        //  autoplay:true,
         autoplayTimeout:2000,
        //  autoplayHoverPause:true,
     },
     1000:{
         items:4,
        //  autoplay:true,
         autoplayTimeout:2000,
        //  autoplayHoverPause:true,
     }
 }
})

new WOW().init
