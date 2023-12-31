// function money(){
//        console.log("amak taka den")
// }
// money()

// function rostGiven(money){
//        console.log("amak rost denplease")
//        console.log(money)
// }
// rostGiven(100)

// addition
// function addition(a,b){
//        console.log(a+b)
// }
// addition(10,20)

// multiply
// function multy(x,y){
//        console.log(x*y)
// }
// multy(10,20)

// function calculation(money){
//        var bananaPrice = 10;
//        var quientity = money / bananaPrice

//        return quientity
// }
// var bananas = calculation(500)
// console.log(bananas)


// function cal(money){
//        var penPrice = 5;
//        var quantuty = money / penPrice
//        return quantuty;

// }
// var pens = cal(200)
// console.log(pens)


// assinmentMarks
// function totalMarks(assignment1, assignment2, assignment3){
//        var total = assignment1 + assignment2 + assignment3;
//        var avarage = total / 3;
//        return avarage;
// }
// var assignment1Marks = 60;
// var assignment2Marks = 50;
// var assignment3Marks = 60;
// var myMarks = totalMarks(assignment1Marks, assignment2Marks, assignment3Marks);
// console.log("marks :", myMarks)


// subject
function subjMarks(math, physics, chemistry, biology){
       var totalMarks = math + physics + chemistry + biology;
       var avarage = totalMarks / 4;
       return avarage
}
var mathMarks = 80;
var physicsMark = 90;
var chemistryMarks = 70;
var biologyMarks = 86;
var myMarks = subjMarks(mathMarks, physicsMark, chemistryMarks, biologyMarks);
console.log(myMarks)