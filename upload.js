// Create namespace object:
const app = {};
const vision = require("@google-cloud/vision");
  

app.displayImage = () => {
    $('#photo').change(function(){
        const file = this.files[0];
        console.log(file);
        if (file){
          let reader = new FileReader();
          reader.onload = function(event){
            console.log(event.target.result);
            response = quickstart(event.target.result)
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

// vision api call
async function quickstart(require, image_data) {
    const objects = []
  // Performs label detection on the image file
    const [result] = await client.localizedObjectAnnotations(image_data);
     objects = result.objects.forEach(object => {
      console.log(`Name: ${object.name}`);
      console.log(`Confidence: ${object.score}`);
      const vertices = object.boundingPoly.normalizedVertices;
      vertices.forEach(v => console.log(`x: ${v.x}, y:${v.y}`));
  // return objects
  });
  console.log(objects)


  // Creates a client
  
}


// Create document.ready function:
$(() => {
    app.init();
})
