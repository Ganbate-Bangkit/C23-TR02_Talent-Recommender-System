//Define Dataset
const talentValues = {
  "https://storage.googleapis.com/bangkit-c23-tr02-pukulenam-dataset/talentPicture/1_Aditya.jpg": [4, 2, 5, 4, 0.5, 0.5, 3, 2, 5, 0],
  "https://storage.googleapis.com/bangkit-c23-tr02-pukulenam-dataset/talentPicture/2_Andhika%20Mifta%20Alauddin.jpg": [4, 3, 4, 5, 3, 3, 3, 1, 1, 5],
  "https://storage.googleapis.com/bangkit-c23-tr02-pukulenam-dataset/talentPicture/3_Ni%20Nyoman%20Ayu%20Sintya%20Dewi.jpg": [4, 3, 3, 4, 3, 1, 4, 4, 3, 2],
  "https://storage.googleapis.com/bangkit-c23-tr02-pukulenam-dataset/talentPicture/4_Dewa%20Bagus%20Trima%20Putra.jpg": [4, 5, 4, 4, 5, 3, 4, 5, 3, 3],
  "https://storage.googleapis.com/bangkit-c23-tr02-pukulenam-dataset/talentPicture/5_Patma%20Ari%20Ayu%20Kartini.jpg": [4, 4, 4, 4, 4, 3, 4, 4, 4, 3],
  "https://storage.googleapis.com/bangkit-c23-tr02-pukulenam-dataset/talentPicture/6_Ni%20Komang%20Risa%20Pebriyanthi.jpg": [4, 2, 3, 5, 2, 1, 2, 4.5, 3, 1],
  "https://storage.googleapis.com/bangkit-c23-tr02-pukulenam-dataset/talentPicture/7_Suci%20Hastika%20Salma'aini.jpg": [5, 5, 4, 5, 3, 2, 4.5, 4.5, 3, 3],
  "https://storage.googleapis.com/bangkit-c23-tr02-pukulenam-dataset/talentPicture/8_Ni%20Luh%20Santi%20Wahyuni%20.jpg": [4, 2, 3, 5, 2.5, 1, 2, 4, 2, 1],
  "https://storage.googleapis.com/bangkit-c23-tr02-pukulenam-dataset/talentPicture/9_Andre%20Winata.jpg": [4, 4, 4, 4, 2, 4, 5, 2, 1.5, 3],
  "https://storage.googleapis.com/bangkit-c23-tr02-pukulenam-dataset/talentPicture/10_Iga%20Narendra%20Pramawijaya.jpg": [4, 1, 4, 3, 1, 3, 5, 4, 2, 3],
  "https://storage.googleapis.com/bangkit-c23-tr02-pukulenam-dataset/talentPicture/11_Nyoman%20Satiya%20Nanjaya%20Sadha.jpg": [2, 2, 3, 2, 0, 3, 3, 0, 4, 2],
  "https://storage.googleapis.com/bangkit-c23-tr02-pukulenam-dataset/talentPicture/12_Abiyyu%20Didar%20Haq.jpg": [5, 5, 4, 2, 0, 3, 3, 0, 5, 1],
  "https://storage.googleapis.com/bangkit-c23-tr02-pukulenam-dataset/talentPicture/13_Arya%20Karna%20Sampalan.jpg": [4, 4, 4, 4, 3, 3, 4, 5, 3, 4],
  "https://storage.googleapis.com/bangkit-c23-tr02-pukulenam-dataset/talentPicture/14_Visakha%20Vidyadevi%20Wiguna.jpg": [5, 5, 4, 5, 5, 0, 0, 0, 5, 2],
};

//Default Score: Input 0 on the slider
let talentInputs = {
    copywriting: 0,
    design: 0,
    internasional: 0,
    nasional: 0,
    entertainment: 0,
    gaming: 0,
    tech: 0,
    finance: 0,
    health: 0,
    sport: 0,
}

//Slider Talent Role
document.getElementById("range-slider-copywriting").addEventListener("input", function () {
    talentInputs.copywriting = this.value;
    document.getElementById("output-copywriting").textContent = this.value;
});
document.getElementById("range-slider-design").addEventListener("input", function () {
    talentInputs.design = this.value;
    document.getElementById("output-design").textContent = this.value;
});

//Slider Talent Level
document.getElementById("range-slider-internasional").addEventListener("input", function () {
    talentInputs.internasional = this.value;
    document.getElementById("output-internasional").textContent = this.value;
});
document.getElementById("range-slider-nasional").addEventListener("input", function () {
    talentInputs.nasional = this.value;
    document.getElementById("output-nasional").textContent = this.value;
});

//Slider Talent Skills
document.getElementById("range-slider-entertainment").addEventListener("input", function () {
    talentInputs.entertainment = this.value;
    document.getElementById("output-entertainment").textContent = this.value;
});
document.getElementById("range-slider-gaming").addEventListener("input", function () {
    talentInputs.gaming = this.value;
    document.getElementById("output-gaming").textContent = this.value;
});
document.getElementById("range-slider-tech").addEventListener("input", function () {
    talentInputs.tech = this.value;
    document.getElementById("output-tech").textContent = this.value;
});
document.getElementById("range-slider-finance").addEventListener("input", function () {
    talentInputs.finance = this.value;
    document.getElementById("output-finance").textContent = this.value;
});
document.getElementById("range-slider-health").addEventListener("input", function () {
    talentInputs.health = this.value;
    document.getElementById("output-health").textContent = this.value;
});
document.getElementById("range-slider-sport").addEventListener("input", function () {
    talentInputs.sport = this.value;
    document.getElementById("output-sport").textContent = this.value;
});

//After Click "Cari Talent"
document.querySelector('.btn-submit-form').addEventListener('click', async function() {
    // Function to calculate the distance between input and talent values
    function calculateDistance(inputValues, talentValues) {
      let distances = [];
    
      for (const [talentImage, talentScores] of Object.entries(talentValues)) {
        let distance = 0;
    
        for (let i = 0; i < inputValues.length; i++) {
          distance += Math.pow(inputValues[i] - talentScores[i], 2); // Compute the squared difference between input and talent value
        }
    
        distance = Math.sqrt(distance); // Compute the square root
        distances.push({ talentImage, distance }); // Add to distances list/array
      }
    
      distances.sort((a, b) => a.distance - b.distance); // Sort in ascending order
      const talentUrl1 = distances[0].talentImage;
      const talentUrl2 = distances[1].talentImage;
      const talentUrl3 = distances[2].talentImage;
    
      return { talentUrl1, talentUrl2, talentUrl3 }; // Return the top 3 closest talents
    }
     
  // Call the calculateDistance function directly
  const { talentUrl1, talentUrl2, talentUrl3 } = calculateDistance(
    [
      talentInputs.copywriting,
      talentInputs.design,
      talentInputs.internasional,
      talentInputs.nasional,
      talentInputs.entertainment,
      talentInputs.gaming,
      talentInputs.tech,
      talentInputs.finance,
      talentInputs.health,
      talentInputs.sport
    ],
    talentValues
  );
// Get the image elements by their IDs
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');

// Update the src attributes of the image elements
img1.src = talentUrl1;
img2.src = talentUrl2;
img3.src = talentUrl3;
});