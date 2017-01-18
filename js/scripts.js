$(function() {
    console.log( "ready!" );
    $( ".datepicker" ).datepicker();
    var object = {
      obj: 'object',
      boolean: true,
      seven: 7
    }
    var json = JSON.stringify(object, null, 2);
    console.log($('.tab__content').text())
    console.log('json:', json)
    $('.tab__content').empty().append(json);
});
