const app = {};

let selectedImage;

if ($("body").data("title") === "upload") {

  app.displayImage = () => {
      $('#photo').change(function(){
          const file = this.files[0];
          console.log(file);
          if (file){
            let reader = new FileReader();
            reader.onload = function(event){
              selectedImage = event.target.result;
              console.log(selectedImage);
              $('#imgPreview').attr('src', event.target.result);
            }
            reader.readAsDataURL(file);
          }
      });
  }

  app.goBack = () => {
    $('.goBack img').on("click", function () {
      window.location.href = './index.html';
    });
  }

  app.submit = () => {
    $('button').on("click", function () {
      window.location.href = './checklist.html';
    });
  }

  // Create initialization code:
  app.init = () => {
      app.displayImage();
      app.goBack();
      app.submit();
  }

  // Create document.ready function:
  $(() => {
      app.init();
  })
  
}

if ($("body").data("title") === "checklist") {

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

  app.displayImage = () => {
    console.log(selectedImage)
      $('#imgPreview2').attr('src', selectedImage);
  }

  app.inputIngredients = () => {
    $("#submit").on('click', function (){
      const addedIngredient = $("#ingredientInput").val();
        const htmlToAppend = ` 
          <div>
            <label for="ingredientName"> ${addedIngredient}</label>  
            <input type="checkbox" id="" name="ingredientName" value=${addedIngredient} checked>
          </div>
                      `;
        $("#ingredientList").append(htmlToAppend);
    });
  }

  app.submit = () => {
    $('#save').on("click", function () {
      window.location.href = './recipes.html';
    });
  }

  // Create initialization code:
  app.init = () => {
      app.showNav();
      app.hideNav();
      app.displayImage();
      app.inputIngredients();
      app.submit();
  }


  // Create document.ready function:
  $(() => {
      app.init();
  })

}

