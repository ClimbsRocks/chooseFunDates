$(function() {

  // TODO: memoize the results once we've calculated the results for a given energy level

  $('.submit').on('click', function() {
    // grab the string value from the text box and turn it into an int
    var energyLevel = parseInt($('#energyLevel').val(), 10);

    var relevantDates = [];
    for(var i = -2; i <=2; i++) {

      var energyLevelToAdd = energyLevel + i;
      if(energyLevelToAdd >= 0 && energyLevelToAdd <= 10) {
  
        datesToAdd = dateIdeas[energyLevel + i];
        for(var j = 0; j < datesToAdd.length; j++) {
          relevantDates.push(datesToAdd[j]);
        }
      }
    }

    var randomDateIndex = Math.round(Math.random() * relevantDates.length);
    var randomDate = relevantDates[randomDateIndex];
    $('#dateEnergyLevel').text('picking a date for energyLevel ' + energyLevel)
    $('#dateName').text(randomDate.name);
    $('#dateDescription').text(randomDate.description);

  });

  // updates the text box with the value from the slider
  $('input').filter( function(){return this.type == 'range' } ).each(function(){  
    var $slider = $(this),
    $text_box = $('#'+$(this).attr('link-to'));

    $text_box.val(this.value);

    $slider.change(function(){
      $text_box.val(this.value);
    });

    $text_box.change(function(){
      // TODO: add in some flirty input validation
      // console.log("ohhh, if you're really that tired I'll just bring over some pho and massage all the tired out of your muscles aftewards. Or, try picking a value inside the range of 0-10");
      // console.log("ooh, if you're really that energetic, let's bike to a bluff overlooking the ocean and host our own all-night dance party 'til we greet the morning with sun salutations! Or, try picking a value inside the range of 0-10")
      $slider.val($text_box.val());
    });

  });
});
