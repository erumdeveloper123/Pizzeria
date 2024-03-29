$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 5,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true
    });
});

$(document).ready(function() {
    $('#exampleModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) 
        var recipient = button.data('whatever') 
        var modal = $(this)
        modal.find('.modal-title').text('You are going to be very happy🍔🍕')
        modal.find('.modal-body input').val(recipient)
    });

    $('#dish-type').change(function() {
        var selectedDish = $(this).val();
        $('#pizza-options, #burger-options, #cake-options').hide(); 

        $('#' + selectedDish + '-options').show();
    });

    $('#sendMessageBtn').click(function() {
        var selectedOption = $('#dish-type').val(); 
        var selectedDish = $('#' + selectedOption + '-options').find(':selected').text();
        $('#modalContent').html('<p>Thank you for ordering ' + selectedDish + '! Your order will reach you in 20 minutes&#128522;</p>');
        $('#sendMessageBtn').hide(); 
        $('#cancelBtn').text('OK');
        $('#cancelBtn').attr('data-dismiss', 'modal');
    });
});