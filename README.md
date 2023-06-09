# C23-TR02_Talent-Recommender-System
This is our project for a talent recommendation system for the newsroom, Pukul Enam. Our team created a web-based recommendation system based on three parameters selected by the user. The first parameter is the role of talent in the newsroom: copywriting and design. The second parameter is the level of talent in the newsroom, both international and national. The last are the skills of talent in the news topic category: entertainment, finance, gaming, health, technology, and sport. The user will choose a range of values from 0 to 5 for each parameter. The values represent each talent's expertise on each parameter. The output will show three recommended talents. The project consists of a machine learning team working together to create a program to recommend talent and a cloud computing team to create an attractive and responsible web interface for publicly accessible users.

# Documentation Machine Learning
## Dataset
## Data Preprocesing
## Model

# Documentation Cloud Computing
## Mockup
1. Create a website design to display talent recommendations according to the input entered by the user. The tool we use to create a website display mockup is Figma.
2. Choose from the various components included in Figma to create your design.
3. This is a design we made at Figma.
![mockupWeb](https://github.com/Ganbate-Bangkit/C23-TR02_Talent-Recommender-System/assets/75134254/f1685c37-31a4-46a1-a0fc-4d370cc23377)

## Front-End
This is the step to implement the mockup into the front-end web page of our talent recommender system.
1. Create a file index.html
   This is the main page of the website. Some of the important elements we use:
    - In the **head** tag. there are **link** and **script** tags which are used to link several external files such as css files, JavaScript, and also the
      Bootstrap framework so that they can be linked to each other with the Index.html file
      ```
      <head>
      ...
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
      <link rel="stylesheet" href="css/style.css">
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      ...
      </head>
      ```
2. Create a file style.css in folder css
   - Create the style for the slider, including the color of the slide dot and slider line.
        ```
        #range-slider-copywriting::-webkit-slider-thumb {
        background-color: black; 
        }
        ...
        #range-slider-sport::-webkit-slider-runnable-track {
        background-color: #F85F56;
        }
        ```
    - Create the style for the button "Cari Talent."
        ```
        .btn-headTopic{
        background-color: #F85F56;
        color: white;
        }
        .btn-headTopic:hover{
        background-color: white;
        color: #F85F56;
        border: 1px solid #F85F56;
        }
        ```
    - Create the style of the webpage.
        ```
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        ```

3. Create a file main.js in folder JavaScript
    Here's what to do in this file:
    - Enter the code from the ML team to define the talent dataset from the newsroom talent of Pukul Enam.
       ```
       const talentValues = {
       ...
       }
      ```
    - Declare a variable using let with the name talentInputs to set all parameter values to 0 before the user inputs the data.
      ```
       let talentInputs = {
        copywriting: 0,
        design: 0,
        internasional: 0,
        ....
        sport: 0,
       }
      ```
    - Enter the user input value into the talentInputs variable according to the respective parameters in each slider.
      ```
      document.getElementById("range-slider-internasional").addEventListener("input", function () {
      talentInputs.internasional = this.value;
      document.getElementById("output-internasional").textContent = this.value;
      });
      ....
      document.getElementById("range-slider-sport").addEventListener("input", function () {
      talentInputs.sport = this.value;
      document.getElementById("output-sport").textContent = this.value;
      });
      ```
    - Enter the code to give the block of functions after the "Cari Talent" button is pressed by the user.
      ```
       document.querySelector('.btn-submit-form').addEventListener('click', async function() {
       ...
       });
      ```
    
## Deployment
### This is the step to upload the dataset of photos into cloud storage.
1. Open the Google Cloud Console.
2. Create a new project.
You've entered a project name, organization, and location. This is our data:
- Project name: Bangkit-C23-TR02-PukulEnam
- Organization: bangkit.academy
- Location: bangkit.academy
3. Connect project billing. In this case, we used credit from Bangkit.
4. Click "Cloud Storage" in the navigation menu.
5. Create a bucket in cloud storage.
You've entered the criteria in your bucket. This is our criteria:
- Name your bucket: bangkit-c23-tr02-pukulenam-dataset
- Choose where to save your data.
Location Type: Region [ asia-southeast2 (Jakarta) ]
- Choose how to control access to objects.
Uncheck "Enforce public access prevention on this bucket"
- Set everything else as default, and click Create.
6. Click the three dots in your bucket and then click "Edit Access" so that each photo has a URL that can be placed in the ML dataset.
- Click "Add Principal."
- In Add Principal, enter "all Users" and "all Authenticated Users."
- Assign role, select role: Storage Object Viewer
- Click save.
7. Open the bucket name "bangkit-c23-tr02-pukulenam-dataset" and create a folder with the name "talentPicture".
8. Upload the "LogoPukulEnam.png" file in the bucket and upload the talent photo in the "talentPicture" name folder.
9. Copy the URL of each photo to dataset ML.
### This is the step to deploy the application using App Engine.
1. Open the Google Cloud Console.
2. Activate Cloud Shell.
3. Clone the project from GitHub, including the app.yaml file.
4. Make sure it is in the folder containing the app.yaml file, then deploy the web using the code below.
```
gcloud app deploy
```
5. Then, open the web using the code below.
```
gcloud app browse
```
