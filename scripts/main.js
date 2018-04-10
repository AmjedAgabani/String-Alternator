$("#my-form").submit(function (event) {
    event.preventDefault();
    var stringOne = $('#first-word').value;
    var stringTwo = $('#second-word').value;
    var combinedString = stringOne + stringTwo;
    $("#combined-string").text(combinedString);    
});