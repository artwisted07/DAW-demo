var jQuery = require('jquery');


jQuery(function(){
  
  jQuery('#modules .row .col-md-4').each(function(){
    
    var tallestModule = 0;
    
    jQuery(this).find('.module').each(function(){
      if(jQuery(this).height() > tallestModule){
        tallestModule = jQuery(this).height();
      }
    })
    
    jQuery('.module').height(tallestModule);//set heigh to the module
    
  })
  
  
  
  //Mobile Navigation
  var navState= "hidden";

  jQuery('.mobile-nav span').on('click', function(){
    if(navState == "hidden"){
      navState = "showing"
      jQuery('#main-nav').slideDown('fast');
      jQuery(this).removeClass('glyphicon-menu-hamburger').addClass('glyphicon-remove');
      
    }else{
      jQuery('#main-nav').slideUp('fast');
       jQuery(this).removeClass('glyphicon-remove').addClass('glyphicon-menu-hamburger');
      navState = "hidden";
    }
    
  })
  

});