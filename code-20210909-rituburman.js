const data = [{ "Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, {
    "Gender": "Male", "HeightCm": 161, "WeightKg":
        85
}, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, {
    "Gender": "Female", "HeightCm": 166,
    "WeightKg": 62
}, { "Gender": "Female", "HeightCm": 150, "WeightKg": 70 }, {
    "Gender": "Female",
    "HeightCm": 167, "WeightKg": 82
}];


let overWeight = 0;
function BMI() {

    this.bmi = Math.round(this.WeightKg / (this.HeightCm / 100 * this.HeightCm / 100));
    
    
    if (this.bmi <= 18.4) {
        this.bmiCategory = "Underweight";
        this.healthRisk = "Malnutrition Risk";
    } else if (this.bmi <= 24.9) {
        this.bmiCategory = "Normal Weight";
        this.healthRisk = "Low Risk";
    } else if (this.bmi <= 29.9) {
        this.bmiCategory = "Overweight";
        this.healthRisk = "Enhanced Risk";
        overWeight++;
    } else if (this.bmi <= 34.9) {
        this.bmiCategory = "Moderatly Obese";
        this.healthRisk = "Medium Risk";
        overWeight++;
    } else if (this.bmi <= 39.9) {
        this.bmiCategory = "Severly Obese";
        this.healthRisk = "High Risk";
        overWeight++;
    } else {
        this.bmiCategory = "Very Severly Obese";
        this.healthRisk = "Very High Risk";
        overWeight++;
    }

}


for (let person of data) {
    BMI.apply(person);
    console.log(person);
}




