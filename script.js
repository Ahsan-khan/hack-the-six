// Create namespace object:
const app = {};

app.showNav = () => {
    $(".cross").hide();
    $(".menu").hide();
    $(".hamburger").click(function() {
        $(".menu").toggle("slow");
        $( ".cross" ).show();
        $( ".hamburger" ).hide();
    });
}

app.hideNav = () => {
    $(".cross").click(function() {
        $(".menu").slideToggle( "slow", function() {
            $( ".cross" ).hide();
            $( ".hamburger" ).show();
        });
    });
}



// Create initialization code:
app.init = () => {
    app.showNav();
    app.hideNav();
}


// Create document.ready function:
$(() => {
    app.init();
})

