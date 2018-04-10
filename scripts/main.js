$("#my-form").submit(function (event) {
    event.preventDefault();
    var stringOne = document.getElementById('first-word').value;
    var stringTwo = document.getElementById('second-word').value;
    var combinedString = stringOne + stringTwo;
    $("#combined-string").text(combinedString);    
});



