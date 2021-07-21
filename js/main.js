$(document).ready(function () {
  $("button").click(function () {
    let addToList = $("input").val();
    $("ul").append("<li>" + addToList + "</li>");
  });
});

$(document).on("click", "li", function () {
  $(this).remove();
});
