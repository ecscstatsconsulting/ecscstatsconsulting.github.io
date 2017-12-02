$(document).ready(function () {

    function createProjectSectionHTML(p) {
        var arr = [];

        arr.push("<div class=\"project-logo\">");
        if (p.logo.image) {
            arr.push("<img width=\"100px\" src=\"images/" + p.logo.image + "\" alt=\"" + p.name + "\" />");
        } else if (p.logo.markup) {
            arr.push(p.logo.markup);
        }
        arr.push("</div>");
        arr.push("<div class=\"project-text\">" + p.description + "</div>");

        return arr.join("");
    };

    function createProjectsSectionHTML(projects) {
        var arr = [];

        for (var i = 0; i < projects.length; i++) {
            if (i > 0) arr.push("<div class=\"project-spacer\"></div>")
            arr.push(createProjectSectionHTML(projects[i]));
        }

        return arr.join("");
    };

    function postLoad() {
        //add post ajax load stuff here.
    };

    $.ajax({
        dataType: "json",
        url: "data/projects.json",
        crossDomain: true,
        success: function (d) {
            var projectsContainer = $("#projects_section");
            var html = "";

            if ((d) && (d.projects) && (d.projects.length)) {
                html = createProjectsSectionHTML(d.projects);
            }

            projectsContainer.html(html);
            postLoad();
        }
    });

});