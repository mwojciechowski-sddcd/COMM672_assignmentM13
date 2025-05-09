$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('#topBtn').fadeIn();
        } else {
            $('#topBtn').fadeOut();
        }
    })

    $('#about-block').click(function() {
        $('#modal')
    })
})