$(document).ready(function() {
      $('#tiles .thumbnail').click(function(){
        $(".thumbnail .details").addClass("hidden");  
        $(this).find('.details').toggleClass('hidden');
      });
});