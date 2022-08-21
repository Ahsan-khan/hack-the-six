const vision = require("@google-cloud/vision");
const fs = require('fs');

const cred = JSON.parse(JSON.stringify({
        "type": "service_account",
        "project_id": "hacthe6ix-vision-test",
        "private_key_id": "33d9734dbdb91d7b2d01427295614e91cb23e515",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC8QuzGO6ufSsys\nvPGTPCfwCxl5Kr4QtP+yWLLxzdAPEdq/jOgrTf+rOaFt0IIvleVoAhpYJd90Nr91\nff5b98ywk9PJsPExQZdN+0Mxuz272N4TBTnCBKbrNBJB4RtO5uqUp6Rm8ySHynWl\n5RxvaX1Ni9TzcJLDBY9IIyl1dGiCf716SiVN0QmDzOhTSjArGeqF/drdPe+Gk4Sq\njXN55Ufb9/Xe2GfA9HhPuPzHLRxXzaoZhSMsZg3By5pTw8rcuy5Po/dy21KawtUX\nnptbEFqA29OFxvpMboMSgwKV9cqxJfT003/R4124qsxxJlMNHfxBMBxVFrzJ2/xB\nkMgIY0NBAgMBAAECggEAB2FTmTp/R17YzZAYo6N7k1L0EYZwmK9nyLeRHZ6VC0ox\nZPSiqLPwPmejdu5yHr3FwQE4GYAz6taMmeVcYoGWh3jmwro03QVLvQBedCV5eD2P\nsyIvefYnDwMQZinAzCPhn/3pxClq+LHMpo9n68wwX9OyqkUdqRc03z3q+FJIbePV\nH4sUPrNoUbBPdWR1TAI1wjTxjLU/E6ca6O+PgovGoLaKLmSl3KushhgNxHDdXT2e\nvD21YffqeO9O7cqZlT355oV31Y/mEJBs4/dltiagX+EaVg66jzkkPIBlImMTxzHx\nHEvSC6TfVe3sgM5P7tpz2h23DmS58CDWEfkUNLK6eQKBgQDyNCuazF8luSB/ULyA\nxmhh7EqQlc9yA5EZMonWDkAQtDpMN5Lv4+bIYgPxlfVKH1gbBGZ32uzkP0nBawI1\nXjpsVFlMUuCYRpSWnVUAGIHuwhTPpnV7sPZO+PFFkMlx1gtMrnKIL0bG499AZVlR\nipd8DXizU8gDWd9Clszm/1+jPQKBgQDG/Cn0ZgLeYoAN5jaYPwcVeJDBPOgG0EO/\nDHxFioocnjdv7vcOisce1oQMuHy17Y/zPN3ORn/YGX0PuDohrLcED9kObtckgJsb\n2Im1i1yhRQhCjGzigSCJwx2ftq7hPYNaFMNp+rRW6ctBPbDMtzb/jkkSRYByToNS\nzfDiIwtQVQKBgFyx7sZN1VRgp7lSMvKt/KENh/QSAdTG3K9iEjKkPYynDXDCDDBX\nbqneKVg6Zig6GsQsSPMyDFvGhPnLdIrsRzvShGKbjW16BcAm8rMYrhGsob5fHLN8\nJKhQyjYvlYlFvAla8maAgXv5FiZVI3v7qMJHfZxUQkZWDQY1JLJ7piSZAoGAGuBs\nekpdENSVH0t9DEtXFZtXUgJ8BI+U1vVEw8/Wn87vBfts+1XbV1r6Mw2oKpqP2vbZ\nrsbu9a1bqwfjMjE19yJ82uo1vQRx7uzsjMzqEg5U80gsXNu8HV9xXOU78chxOXWc\nf3ARc7vYbFN80endT99UF1ez5bydGE4gvyqkmJECgYAVYZ1r4J8GlYJ3qv7Kr+Zp\nlgvvPR+xvXx9W2q6ZmLA2y0oB1xEtGuG9f8Oam5/5w5glDosCGTpq4hIXbpxAuCf\niYIcyna7TNzyt3UjrK2S9kzBGC853zGeROszW+9Tn1sqzmcm8GzVP4c/ENEMOrDd\nKwU33GT04zcJVE3Cel2luA==\n-----END PRIVATE KEY-----\n",
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
