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

app.inputIngredients = () => {
  $("#submit").on('click', function (){
    const addedIngredient = $("#ingredientInput").val();
      const htmlToAppend = `
        <input type="checkbox" id="" name="ingredientName" value=${addedIngredient} checked>
        <label for="ingredientName"> ${addedIngredient}</label><br>
                    `;
      $("#ingredientList").append(htmlToAppend);
  });
}


// Create initialization code:
app.init = () => {
    app.showNav();
    app.hideNav();
    app.inputIngredients();
}


// Create document.ready function:
$(() => {
    app.init();
})