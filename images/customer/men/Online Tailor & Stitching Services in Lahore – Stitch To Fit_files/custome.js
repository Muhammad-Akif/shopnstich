
/***************************************************************
                   custom js
***************************************************************/

 jQuery(document).ready(function(){
	 
	 jQuery(window).scroll(function(){
  if (jQuery(this).scrollTop() > 1) {
   jQuery('.site-header').addClass('fix-header');
  } else {
   jQuery('.site-header').removeClass('fix-header');
  }
 });
	 
			jQuery('.icon-back').click(function(){
				parent.history.back();
				return false;
			});	 
	 
	 jQuery(".login-menu-trigger").click(function(){
		 jQuery(this).toggleClass('active');
		 jQuery('.login-user-menu-outer').fadeToggle( "slow", "linear" );
		 
		 });
	 
	        var winwidth = jQuery(window).width();
		if (winwidth <= 800){
			
			jQuery('.login-user-menu-outer').hide();
		}
		else{
			jQuery('.login-user-menu-outer').show();
		}
	  
		jQuery(window).resize(function(){
			var winwidth = jQuery(window).width();
		
			if (winwidth <= 800){
				jQuery('.login-user-menu-outer').hide();
			}
			else{
				jQuery('.login-user-menu-outer').show();
			}
		});
	 
	 
	        jQuery(".dropit-btn").click(function(){
			jQuery(this).toggleClass('active');
		           jQuery('.main-nav-bar').fadeToggle( "slow", "linear" );
				    });
		    jQuery(".navbar > li > a").click(function(){
			jQuery(".navbar > li > a").removeClass('active');
			jQuery(this).addClass('active');
			      });  
		  
	          var winwidth = jQuery(window).width();
		if (winwidth <= 767){
			
			jQuery('.main-nav-bar').hide();
		}
		else{
			jQuery('.main-nav-bar').show();
		}
	  
		jQuery(window).resize(function(){
			var winwidth = jQuery(window).width();
		
			if (winwidth <= 767){
				jQuery('.main-nav-bar').hide();
			}
			else{
				jQuery('.main-nav-bar').show();
			}
		});             
	 



/*jQuery(".owl-locations-slider").owlCarousel({
		   
				navigation :false, // Show next and prev buttons
				slideSpeed : 400,
				paginationSpeed : 500,
				singleItem:true,
				pagination:true,
				autoPlay :true
		   
				// "singleItem:true" is a shortcut for:
				// items : 1, 
				// itemsDesktop : false,
				// itemsDesktopSmall : false,
				// itemsTablet: false,
				// itemsMobile : false
		   
			  });


jQuery(".owl-hosp-banner-slider").owlCarousel({
		   
				navigation :true, // Show next and prev buttons
				slideSpeed : 400,
				paginationSpeed : 500,
				singleItem:true,
				pagination:false,
				autoPlay :true
		   
				// "singleItem:true" is a shortcut for:
				// items : 1, 
				// itemsDesktop : false,
				// itemsDesktopSmall : false,
				// itemsTablet: false,
				// itemsMobile : false
		   
			  });


jQuery(".slider-ftr").owlCarousel({
		   
				navigation :true, // Show next and prev buttons
				slideSpeed : 400,
				paginationSpeed : 3000,
				singleItem:false,
				pagination:false,
				autoPlay :true
		   
				// "singleItem:true" is a shortcut for:
				// items : 1, 
				// itemsDesktop : false,
				// itemsDesktopSmall : false,
				// itemsTablet: false,
				// itemsMobile : false
		   
			  });*/



jQuery('.back-to-top').click(function(){
  jQuery('html, body').animate({scrollTop : 0},1000);
  return false;
 });
jQuery(window).scroll(function(){
  if (jQuery(this).scrollTop() > 400) {
   jQuery('.back-to-top').css("display","block");
  } else {
   jQuery('.back-to-top').css("display","none");
  }
 });

 
/* end of document.ready function*/					   
  });	
