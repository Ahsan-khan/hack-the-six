import io
import os
from google.cloud import vision
os.environ["GOOGLE_APPLICATION_CREDENTIALS"]="hacthe6ix-vision-test-33d9734dbdb9.json"
client = vision.ImageAnnotatorClient()
with io.open('test5.jpg', 'rb') as image_file:
    content = image_file.read()
image = vision.Image(content=content)
objects = client.object_localization(
        image=image).localized_object_annotations
print('Number of objects found: {}'.format(len(objects)))
for object_ in objects:
    print('\n{} (confidence: {})'.format(object_.name, object_.score))
    print('Normalized bounding polygon vertices: ')
    for vertex in object_.bounding_poly.normalized_vertices:
        print(' - ({}, {})'.format(vertex.x, vertex.y))
