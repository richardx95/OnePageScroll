(function ( $ ) {
 
    $.fn.greenify = function( options ) {
        $('a[href*=\\#]').stop().click(function()
        {
            var settings = $.extend({
            // This is the default setting.
            speed: 1000
        }, options );
            
            if(location.pathname.replace(/^\//,'') == this.pathname.replace (/^\//,'') && location.hostname === this.hostname)
            {
                var UD_HASH = this.hash;
                var UD_TARGET = $(this.hash);
                if (UD_TARGET.length)
                {
                    var UD_AFSTAND_TOP = UD_TARGET.offset().top;
                    $('html,body').animate({scrollTop: UD_AFSTAND_TOP},settings.speed,function(){
                        window.location.hahs = UD_HASH;
                    });
                    return false;
                }      
            }   
        });
    };
 
}( jQuery ));

// Here you can change the scrolling speed
$( "div" ).greenify({speed:1000});