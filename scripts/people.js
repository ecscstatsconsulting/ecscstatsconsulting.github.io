$(document).ready(function() {
       var sh = function(evt) {
            var $this = $(this);
            if (!$this.attr("oWidth")) $this.attr("oWidth", $this.width());
            if (!$this.attr("oHeight")) $this.attr("oHeight", $this.height());
            $this.toggleClass("selected");

            if ($this.hasClass("selected")) {
                 $this.stop().animate({width: 400, height: 400}, function() {
                  $this.find(".ppl-text").fadeIn(1000);
                 });
            } else {
                 $this.find(".ppl-text").fadeOut(1000, function() {
                  $this.stop().animate({width: parseInt($this.attr("oWidth")) + 24, height: parseInt($this.attr("oHeight")) + 24})
                 }); 
            }
       };
       $('#tiles .thumbnail').click(sh).blur(sh);

});