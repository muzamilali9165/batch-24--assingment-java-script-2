var num = 10;

document.write("The value of num is: " + num + "<br>");

document.write("The value of ++num is: " + (++num) + "<br>");

document.write("Now the value of num is: " + num + "<br>");

document.write("The value of num++ is: " + (num++) + "<br>");

document.write("Now the value of num is: " + num + "<br>");

document.write("The value of --num is: " + (--num) + "<br>");

document.write("Now the value of num is: " + num + "<br>");

document.write("The value of num-- is: " + (num--) + "<br>");

document.write("Now the value of num is: " + num + "<br>"+ "<br>");


// Q2
var a = 2, b = 1;

var result = --a - --b + ++b + b--;

document.write("a = " + a + "<br>");
document.write("b = " + b + "<br>");
document.write("result = " + result + "<br>" + "<br>");


// Q3
 var userName = prompt("Enter your name:");
 alert("Hello " + userName + "! Welcome.");
 document.write("Hello " + userName + "! Welcome." + "<br>" + "<br>");



//  Q4 and 5
    var number = prompt("Enter a number:");
    if (number === "" || number === null) {
        number = 5;
    }
    number = Number(number);
    document.write("<h2>Multiplication Table of " + number + "</h2>");
    for (var i = 1; i <= 10; i++) {
        document.write(number + " x " + i + " = " + (number * i) + "<br>");
    }



    // Q6
       
    var subject1 = prompt("Enter first subject name:");
    var subject2 = prompt("Enter second subject name:");
    var subject3 = prompt("Enter third subject name:");
    var totalMarks = 100;
    var obtained1 = +prompt("Enter obtained marks in " + subject1);
    var obtained2 = +prompt("Enter obtained marks in " + subject2);
    var obtained3 = +prompt("Enter obtained marks in " + subject3);
    var totalObtained = obtained1 + obtained2 + obtained3;
    var total = totalMarks * 3;
    var percentage = (totalObtained / total) * 100;
    document.write("<h2>Marks Sheet</h2>");
    document.write("<table border='1' cellpadding='10'>")
    document.write("<tr>");
    document.write("<th>Subject</th>");
    document.write("<th>Total Marks</th>");
    document.write("<th>Obtained Marks</th>");
    document.write("</tr>");
    document.write("<tr>");
    document.write("<td>" + subject1 + "</td>");
    document.write("<td>" + totalMarks + "</td>");
    document.write("<td>" + obtained1 + "</td>");
    document.write("</tr>");
    document.write("<tr>");
    document.write("<td>" + subject2 + "</td>");
    document.write("<td>" + totalMarks + "</td>");
    document.write("<td>" + obtained2 + "</td>");
    document.write("</tr>");
    document.write("<tr>");
    document.write("<td>" + subject3 + "</td>");
    document.write("<td>" + totalMarks + "</td>");
    document.write("<td>" + obtained3 + "</td>");
    document.write("</tr>");
    document.write("<tr>");
    document.write("<th>Total</th>");
    document.write("<th>" + total + "</th>");
    document.write("<th>" + totalObtained + "</th>");
    document.write("</tr>");
    document.write("</table>");
    document.write("<h3>Percentage: " + percentage + "%</h3>");