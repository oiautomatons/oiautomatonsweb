$(document).ready(function(){
    
    $('.materialboxed').materialbox();
    $('.dropdown-button').dropdown({ hover: true });
    $('.button-collapse').sideNav();
    $('.pin-wrapper').pushpin({ top: $('nav').height() });
    
});

$('#maincontent').bind('DOMSubtreeModified', function(){
    
    $('#welcome').fadeTo("slow", 1);
    $('#teamBanner').delay(500).fadeTo("slow", 1);
    $('#video').delay(1000).fadeTo("slow", 1);
    $('#contactInfo').delay(1500).fadeTo("slow", 1);
    
});