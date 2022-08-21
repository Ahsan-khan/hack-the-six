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

// Create initialization code:
app.init = () => {
    app.displayImage();
}


// Create document.ready function:
$(() => {
    app.init();
})
