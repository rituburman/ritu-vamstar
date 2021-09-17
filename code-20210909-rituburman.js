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

