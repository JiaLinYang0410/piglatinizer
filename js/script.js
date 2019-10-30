$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.

    $("#button").click(function(){
        var input = $(".input").val();
        $(".output").html(input);
    });
function word = (pig){
let vowel = ["a" , "e" , "i" , "o" , "u"]
let firstLetter = pig[0]
let newWord = pig.substring(1, end)
vowel.forEach(function(vowels){
    if(firstLetter == vowel){
        $(".output").html(newWord + pig[0])
    }
}






});
