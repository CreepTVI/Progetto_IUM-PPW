$(document).ready(function () {
    const typedChar = $("#new-post-textarea").val().length;
    $("#counter").text(typedChar);

    $("#new-post-textarea").on("keyup", function (e) {
        const typedChar = $(this).val().length;
        $("#counter").text(typedChar);
    });
});
