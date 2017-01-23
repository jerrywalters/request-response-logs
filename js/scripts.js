$(function() {
    console.log( "ready!" );

    // toggle Filters
    $('.filter__toggle').click(function() {
      $('.filter-content').toggle();
    })

    $('.filter-options__single').click(function() {
      $(this).toggleClass('filter-options__single--selected');
    })

    // datepicker
    $( ".datepicker" ).datepicker();
    var object = {
      obj: 'object',
      boolean: true,
      seven: 7
    }

    // turn some json into a string -- need to prettify
    var json = JSON.stringify(object, null, 2);
    console.log($('.tab__content').text())
    console.log('json:', json)
    $('.tab__content').empty().append(json);
});
