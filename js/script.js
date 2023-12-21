$(function() {
    // add a callback on the scroll event that will cause our main logo to
    // shrink by adding the "smaller" css class if we have begun scrolling down
    window.addEventListener('scroll', function() {
        var scrollPosition = window.pageYOffset;
        if (scrollPosition < 10) {
            $('#navLogo').removeClass('smaller');
        } else {
            $('#navLogo').addClass('smaller');
        }
        
    });
})