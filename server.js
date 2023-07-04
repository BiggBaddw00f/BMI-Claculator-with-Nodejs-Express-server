const bodyParser = require('body-parser');
const express = require('express')
const path = require('path');
const app = express()
const port = 5500

app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))
app.post('/', (req, res) => {

    var height = parseInt(req.body.height);
    var weight = parseInt(req.body.weight);
    const calculateBMI = () => {
        var heightInMeters = height / 100;
        var bmi = weight / (heightInMeters * heightInMeters);
        return bmi.toFixed(2);
    };
    var bmiResult = calculateBMI();

    res.send("Your BMI is: " + bmiResult);
})
app.listen(port, () => console.log(`App is listening on port ${port}!`))