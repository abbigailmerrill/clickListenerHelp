// Correlates to Option 2

var jsButton = document.body.querySelector(".jsClicker");

jsButton.addEventListener("click", function(){
    console.log("You clicked this button");

    // Or you can alert when clicked, uncomment next line to test out

    // alert("You clicked the button!");
});

var jQButton = jQuery(".jQClicker");

jQButton.on("click", function(){
    console.log("You clicked this button");

    // Or you can alert when clicked, uncomment next line to test out

    // alert("You clicked the button!");
});