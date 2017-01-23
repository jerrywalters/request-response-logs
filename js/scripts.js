$(function() {
    console.log( "ready!" );

    // toggle Filters
    $('.filter__toggle').click(function() {
      $('.filter-content').toggleClass('filter-content--hidden');
    })

    $('.filter-options__single').click(function() {
      $(this).toggleClass('filter-options__single--selected');
    })

    $('.log-info__toggle').click(function() {
      $(this).parent().siblings('.log-body').toggleClass('log-body--hidden');
    })

    $('.log-tabs').each(function() {
      var $active, $content, $links = $(this).find('a');

      // If the location.hash matches one of the links, use that as the active tab.
      // If no match is found, use the first link as the initial active tab.
      $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
      $active.addClass('active');
      console.log($($active[0].hash))
      $content = $($active[0].hash);

      // Hide the remaining content
      $links.not($active).each(function () {
        $(this.hash).hide();
      });

      // Bind the click event handler
      $(this).on('click', 'a', function(e){
        // Make the old tab inactive.
        $active.removeClass('active');
        $content.hide();

        // Update the variables with the new link and content
        $active = $(this);
        $content = $(this.hash);

        // Make the tab active.
        $active.addClass('active');
        $content.show();

        // Prevent the anchor's default click action
        e.preventDefault();
      });
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
