$(".sectionHeader").hover(function(){
    $(this).css("background-color", "gray");
    }, function(){
    $(this).css("background-color", "white");
});


$(function() {
    $('.menuParent1' ).click(function(){
      $('.subMenu1').slideToggle();
    });
});

$(function() {
    $('.menuParent2' ).click(function(){
      $('.subMenu2').slideToggle();
    });
});

$(function() {
    $('.menuParent3' ).click(function(){
      $('.subMenu3').slideToggle();
    });
});

$(function() {
    $('.menuParent4' ).click(function(){
      $('.subMenu4').slideToggle();
    });
});
