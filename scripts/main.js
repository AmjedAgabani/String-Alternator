function mixWords(stringOne, stringTwo) {
    var output = "";
    for (var i = 0; i < Math.max(stringOne.length, stringTwo.length); i++) {
        if (stringOne.length > i) {
            output += stringOne[i];
        }
        if (stringTwo.length > i) {
            output += stringTwo[i];
        }
    }
    return output;
}

$("#my-form").submit(function(event) {
    event.preventDefault();
    var stringOne = $('#first-word').val();
    var stringTwo = $('#second-word').val();
    var output = mixWords(stringOne, stringTwo);
    $("#combined-string").text(output);
});