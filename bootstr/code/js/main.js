/*
 * @Author: andrew.yang
 * @Date:   2016-10-31 20:12:38
 * @Last Modified  :   andrew.yang
 * @Last Modified time: 2016-11-02 13:41:27
 */
$(function() {
    var resize = function function_name() {
        // body...
        var windowWidth = $(window).width();
        var isSmallScreen = windowWidth < 768;
        $('#main-ad > .carousel-inner > .item').each(function(i, item) {
            var $item = $(item);
            $item.css('backgroundImage', 'url("' + $item.data(isSmallScreen ? 'image-xs' : 'image-lg') + '")');
            if (isSmallScreen) {
                $item.html('<img src="'+$item.data('image-xs')+'" alt=""/>')
            }else{
                $item.empty();
            }
        });
    }
    $(window).on('resize', resize).trigger('resize') ;
})