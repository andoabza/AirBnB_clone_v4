$(document).ready(function() {
    let amenities = {};
    $('input[type=checkbox]').change(function() {
      if (this.checked) {
        amenities[$(this).data('id')] = $(this).data('name');
      } else {
        delete amenities[$(this).data('id')];
      }
      let amenityNames = Object.values(amenities);
      $('.amenities h4').text(amenityNames.join(', '));
    });
  });