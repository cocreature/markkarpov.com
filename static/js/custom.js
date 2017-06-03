document.addEventListener("DOMContentLoaded", function(event) {
    anchors.options = {
        placement: 'left',
        visible: 'always',
        class: 'anchor'
    };
    anchors.add('h2, h3, h4');
});

$(document).ready(function () {
    $("table").addClass("table table-striped");
    $("thead").addClass("thead-default");
});