$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('#topBtn').fadeIn();
        } else {
            $('#topBtn').fadeOut();
        }
    });

    $('.accordion-header').click(function() {
        $('.accordion-content').slideUp();
        $(this).next('.accordion-content').slideDown();
    });

    $('.open-modal-btn').click(function() {
        var targetModal = $(this).data("target");
        $(targetModal).show();
    })

    $('.close-btn').click(function() {
        $(this).closest('.modal').hide();
    })
});