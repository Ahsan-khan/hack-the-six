const vision = require("@google-cloud/vision");
const fs = require('fs');

const cred = JSON.parse(JSON.stringify({
        "type": "service_account",
        "project_id": "hacthe6ix-vision-test",
        "private_key_id": "",
        "private_key": "-----BEGIN PRIVATE KEY-----\n\n-----END PRIVATE KEY-----\n",
        "client_email": "test-837@hacthe6ix-vision-test.iam.gserviceaccount.com",
        "client_id": "109973210781685047755",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/test-837%40hacthe6ix-vision-test.iam.gserviceaccount.com"
}));

const config = {
    credentials: {
        private_key:cred.private_key,
        client_email:cred.client_email
    }
}

const client = new vision.ImageAnnotatorClient(config);

async function quickstart(image_data) {
  // Performs label detection on the image file
    const request = {
        image: {content: fs.readFileSync(image_data)},
    };
    const [result] = await client.objectLocalization(image_data);
    const objects = result.localizedObjectAnnotations;
     objects.forEach(object => {
      console.log(`Name: ${object.name}`);
      console.log(`Confidence: ${object.score}`);
      const vertices = object.boundingPoly.normalizedVertices;
      vertices.forEach(v => console.log(`x: ${v.x}, y:${v.y}`));
  // return objects
  });
  
}
quickstart('test.jpeg')
