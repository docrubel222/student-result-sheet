var studentName = prompt("শিক্ষার্থীর নাম কী?");
studentName = studentName.toUpperCase();
document.getElementById('student-name').innerHTML = studentName;

// Bangla
var banglaMarks = parseInt(prompt("বাংলায় কত পেয়েছে?"));

if (banglaMarks >=0 && banglaMarks <= 100){
    document.getElementById('bangla-marks').innerHTML = banglaMarks;
}else{
    document.getElementById('bangla-marks').innerHTML = "**";
}

// English
var englishMarks = parseInt(prompt("ইংরেজিতে কত পেয়েছে?"));

if (englishMarks >=0 && englishMarks <= 100){
    document.getElementById('english-marks').innerHTML = englishMarks;
}else{
    document.getElementById('english-marks').innerHTML = "**";
}

// Math
var mathMarks = parseInt(prompt("গণিতে কত পেয়েছে?"));

if (mathMarks >=0 && mathMarks <= 100){
    document.getElementById('math-marks').innerHTML = mathMarks;
}else{
    document.getElementById('math-marks').innerHTML = "**";
}

// Total
var averageMarks = banglaMarks + englishMarks + mathMarks;
document.getElementById('total-marks').innerHTML = averageMarks;

var averagePoint, averageGrade, banglaPoint, englishPoint, mathPoint;

// Bangla
banglaPoint = banglaMarks;

if (banglaPoint >= 80 && banglaPoint <= 100){
    document.getElementById('bangla-point').innerHTML = "5.00";
    document.getElementById('bangla-grade').innerHTML = "A+";
    banglaPoint = 5.00;
}else if(banglaPoint >= 70 && banglaPoint <= 79){
    document.getElementById('bangla-point').innerHTML = "4.00";
    document.getElementById('bangla-grade').innerHTML = "A";
    banglaPoint = 4.00;
}else if(banglaPoint >= 60 && banglaPoint <= 69){
    document.getElementById('bangla-point').innerHTML = "3.50";
    document.getElementById('bangla-grade').innerHTML = "A-";
    banglaPoint = 3.50;
}else if(banglaPoint >= 50 && banglaPoint <= 59){
    document.getElementById('bangla-point').innerHTML = "3.00";
    document.getElementById('bangla-grade').innerHTML = "B";
    banglaPoint = 3.00;
}else if(banglaPoint >= 40 && banglaPoint <= 49){
    document.getElementById('bangla-point').innerHTML = "2.00";
    document.getElementById('bangla-grade').innerHTML = "C";
    banglaPoint = 2.00;
}else if(banglaPoint >= 33 && banglaPoint <= 39){
    document.getElementById('bangla-point').innerHTML = "1.00";
    document.getElementById('bangla-grade').innerHTML = "D";
    banglaPoint = 1.00;
}else if(banglaPoint >= 0 && banglaPoint <= 32){
    document.getElementById('bangla-point').innerHTML = "0.00";
    document.getElementById('bangla-grade').innerHTML = "F";
    banglaPoint = 0.00;
}else{
    document.getElementById('bangla-point').innerHTML = "**";
    document.getElementById('bangla-grade').innerHTML = "**";
}

// English
englishPoint = englishMarks;

if (englishPoint >= 80 && englishPoint <= 100){
    document.getElementById('english-point').innerHTML = "5.00";
    document.getElementById('english-grade').innerHTML = "A+";
    englishPoint = 5.00;
}else if(englishPoint >= 70 && englishPoint <= 79){
    document.getElementById('english-point').innerHTML = "4.00";
    document.getElementById('english-grade').innerHTML = "A";
    englishPoint = 4.00;
}else if(englishPoint >= 60 && englishPoint <= 69){
    document.getElementById('english-point').innerHTML = "3.50";
    document.getElementById('english-grade').innerHTML = "A-";
    englishPoint = 3.50;
}else if(englishPoint >= 50 && englishPoint <= 59){
    document.getElementById('english-point').innerHTML = "3.00";
    document.getElementById('english-grade').innerHTML = "B";
    englishPoint = 3.00;
}else if(englishPoint >= 40 && englishPoint <= 49){
    document.getElementById('english-point').innerHTML = "2.00";
    document.getElementById('english-grade').innerHTML = "C";
    englishPoint = 2.00;
}else if(englishPoint >= 33 && englishPoint <= 39){
    document.getElementById('english-point').innerHTML = "1.00";
    document.getElementById('english-grade').innerHTML = "D";
    englishPoint = 1.00;
}else if(englishPoint >= 0 && englishPoint <= 32){
    document.getElementById('english-point').innerHTML = "0.00";
    document.getElementById('english-grade').innerHTML = "F";
    englishPoint = 0.00;
}else{
    document.getElementById('english-point').innerHTML = "**";
    document.getElementById('english-grade').innerHTML = "**";
}

// Math
mathPoint = mathMarks;

if (mathPoint >= 80 && mathPoint <= 100){
    document.getElementById('math-point').innerHTML = "5.00";
    document.getElementById('math-grade').innerHTML = "A+";
    mathPoint = 5.00;
}else if(mathPoint >= 70 && mathPoint <= 79){
    document.getElementById('math-point').innerHTML = "4.00";
    document.getElementById('math-grade').innerHTML = "A";
    mathPoint = 4.00;
}else if(mathPoint >= 60 && mathPoint <= 69){
    document.getElementById('math-point').innerHTML = "3.50";
    document.getElementById('math-grade').innerHTML = "A-";
    mathPoint = 3.50;
}else if(mathPoint >= 50 && mathPoint <= 59){
    document.getElementById('math-point').innerHTML = "3.00";
    document.getElementById('math-grade').innerHTML = "B";
    mathPoint = 3.00;
}else if(mathPoint >= 40 && mathPoint <= 49){
    document.getElementById('math-point').innerHTML = "2.00";
    document.getElementById('math-grade').innerHTML = "C";
    mathPoint = 2.00;
}else if(mathPoint >= 33 && mathPoint <= 39){
    document.getElementById('math-point').innerHTML = "1.00";
    document.getElementById('math-grade').innerHTML = "D";
    mathPoint = 1.00;            
}else if(mathPoint >= 0 && mathPoint <= 32){
    document.getElementById('math-point').innerHTML = "0.00";
    document.getElementById('math-grade').innerHTML = "F";
    mathPoint = 0.00;
}else{
    document.getElementById('math-point').innerHTML = "**";
    document.getElementById('math-grade').innerHTML = "**";
}

// Average Point
averagePoint = ((banglaPoint + englishPoint + mathPoint) / 3).toPrecision(3);
document.getElementById('average-point').innerHTML = averagePoint;

// Average Grade
if(averagePoint == 5){
    document.getElementById('average-grade').innerHTML = "A+";
}else if(averagePoint >= 4 && averagePoint < 5){
    document.getElementById('average-grade').innerHTML = "A";
}else if(averagePoint >= 3.50 && averagePoint < 4){
    document.getElementById('average-grade').innerHTML = "A-";
}else if(averagePoint >= 3.00 && averagePoint < 3.50){
    document.getElementById('average-grade').innerHTML = "B";
}else if(averagePoint >= 2.00 && averagePoint < 3.00){
    document.getElementById('average-grade').innerHTML = "C";
}else if(averagePoint >= 1.00 && averagePoint < 2.00){
    document.getElementById('average-grade').innerHTML = "D";
}else if(averagePoint >= 0.00 && averagePoint < 1.00){
    document.getElementById('average-grade').innerHTML = "F";
}else{
    document.getElementById('average-grade').innerHTML = "**";
}