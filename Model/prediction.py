from imageai.Classification import ImageClassification
import os
execution_path = os.getcwd()
prediction = ImageClassification()
prediction.setModelTypeAsResNet50()
prediction.setModelPath(os.path.join(execution_path, "resnet50_imagenet_tf.2.0.h5"))
prediction.loadModel()
predictions, probabilities = prediction.classifyImage(os.path.join(execution_path,"beer5.jpg"), result_count=10)


for eachPrediction, eachProbability in zip(predictions, probabilities):
  print(eachPrediction , " : " , eachProbability)

output = predictions[:3]

textfile = open("output.txt", "w")

for item in output:

    textfile.write(element + "\n")

textfile.close()