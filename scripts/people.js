$(document).ready(function () {

    function createPersonSectionHTML(p) {
        var arr = [];

        var name = p.first_name + " " + p.last_name;
        arr.push("<div num=\"" + p.id + "\" class=\"thumbnail\" tabindex=\"0\">");
        arr.push("<div class=\"item-content\">");
        arr.push("<div class=\"pic\">");
        arr.push("<img src=\"./images/" + p.image + "\" alt=\"" + p.first_name + "\" />");
        arr.push("</div>");
        arr.push("<span class=\"name\">" + name + "</span>");
        arr.push("<div class=\"details\"><b>" + p.title + "</b></div>");
        arr.push("<div class=\"ppl-text hidden\">");
        arr.push("about");
        if (p.resume) {
            arr.push("<div class=\"resume\"><a href=\"resumes/ " + p.resume + "\">Resume</a></div>");
        }
        arr.push("</div>");
        arr.push("</div>");
        arr.push("</div>");

        return arr.join("");
    };

    function createPeopleSectionHTML(ppl) {
        var arr = [];

        for (var i = 0; i < ppl.length; i++) {
            arr.push(createPersonSectionHTML(ppl[i]));
        }

        return arr.join("");
    };

    function postLoad() {
        $detail_section = $("#about-details");
        $tiles = $(".thumbnail");
        $tiles.click(function (evt) {
            var $this = $(this);
            $tiles.removeClass("selected");
            $this.addClass("selected");
            $detail_section.find(".ppl-name").html($this.find(".name").html());
            $detail_section.find(".ppl-content").html($this.find(".ppl-text").html());
        });
    };

    $.ajax({
        dataType: "json",
        url: "data/people.json",
        crossDomain: true,
        success: function (d) {
            var peopleContainer = $("#people");
            var html = "";

            if ((d) && (d.people) && (d.people.length)) {
                html = createPeopleSectionHTML(d.people);
            }

            peopleContainer.html(html);
            postLoad();
        }
    });

});