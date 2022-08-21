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

app.goBack = () => {
  $('.goBack img').on("click", function () {
    window.location.href = './index.html';
  });
}

// Create initialization code:
app.init = () => {
    app.displayImage();
    app.goBack();
}


// Create document.ready function:
$(() => {
    app.init();
})
