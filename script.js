// Create namespace object:
const app = {};

app.displayImage = () => {
    $('#photo').change(function(){
        const file = this.files[0];
        console.log(file);
        if (file){
          let reader = new FileReader();
          reader.onload = function(event){
            console.log(event.target.result);
            $('#imgPreview').attr('src', event.target.result);
          }
          reader.readAsDataURL(file);
        }
      });
}

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
    app.displayImage();
    app.showNav();
    // app.hideNav();
}


// Create document.ready function:
$(() => {
    app.init();
})

