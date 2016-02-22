$(function() {

  // TODO: memoize the results once we've calculated the results for a given energy level
  var energyLevel;
  var currentDate; 

  $('.submit').on('click', function() {
    // grab the string value from the text box and turn it into an int
    energyLevel = parseInt($('#energyLevel').val(), 10);

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

    var randomDateIndex = Math.round(Math.random() * (relevantDates.length - 1));
    currentDate = relevantDates[randomDateIndex];
    $('#dateEnergyLevel').text('Picking a date for energyLevel ' + energyLevel)
    $('#dateName').text(currentDate.name);
    $('#dateDescription').text(currentDate.description);

    // sets this date on a hidden node so that we can use that node for copying to the clipboard later
    $('#hiddenText').text('Energy Level: ' + energyLevel + ', Date: ' + currentDate.name +', Description: ' + currentDate.description);
  });

  
  // copy to clipboard:
  $('.copyToClipBoard').on('click', function() {

    // grab the checked add ons
    var checkedAddOns = [];
    $("input:checkbox:checked").each(function(){
        checkedAddOns.push($(this).val());
    });

    // add the add-ons to the hiddenText node that holds the text that will be copied to the clipboard
    $('#hiddenText').text($('#hiddenText').text() + ' Add-Ons: ' + checkedAddOns.join(', '));

    copyToClipboard('hiddenText');
  });

  function copyToClipboard(elementId) {
    // Create a "hidden" input
    var aux = document.createElement("input");
    // Assign it the value of the specified element
    aux.setAttribute("value", document.getElementById(elementId).innerHTML);
    // Append it to the body
    document.body.appendChild(aux);
    // Highlight its content
    aux.select();
    // Copy the highlighted text
    document.execCommand("copy");
    // Remove it from the body
    document.body.removeChild(aux);
  }

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
