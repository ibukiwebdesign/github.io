
  $('.tab-button').on('click', function() {
    const target = $(this).data('tab');

    $('.tab-button').removeClass('active');
    $('.tab-content').removeClass('active');

    $(this).addClass('active');
    $('#' + target).addClass('active');
  });

