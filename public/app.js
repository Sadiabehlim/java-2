var subjects = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M.Phil" , "Phd"];
console.log(subjects);
document.write("<h1>Qualification</h1>");
document.write("<br>");
document.write("<br>1) SSC");
document.write("<br>2)HSC");
document.write("<br>3)BCS");
document.write("<br>4)BS");
document.write("<br>5)BCOM");
document.write("<br>6)MS");
document.write("<br>7)M.Phil");
document.write("<br>8)Phd");
var color = ["red" , "blue" , "yellow" , "green"];
color.unshift = ( "purple" , "black");
console.log(color);
color.shift("purple");
console.log(color);

document.write("<br><h1>COLOURS</h1>");
document.write("<br>purple");
document.write("<br>red");
document.write("<br>blue");
document.write("<br>yellow");
document.write("<br>green");
document.write("<br>");
color.pop("");
console.log(color);
document.write("<h3>UpDated List</h3>");
document.write("<br>black");
document.write("<br>red");
document.write("<br>blue");
document.write("<br>yellow");


var t = ["1" , "2" , "3" , "4" ,"5" , "6" , "7" , "8" , "9" , "10"]  ;
 for (var i = 0; i < 11 ; i++) {
    console.log(t[i]);
 };
 document.write("<br><h1>Counting</h1>");
 document.write("<br> 1");
 document.write("<br>2");
 document.write("<br>3");
 document.write("<br>4");
 document.write("<br>5");
 document.write("<br>6");
 document.write("<br>7");
 document.write("<br>8");
 document.write("<br>9");
 document.write("<br>10");
 var fruits = ["apple" , "banana" , "mango" , "orange" , "strawberry"]
for (var i = 0; i < fruits.length ; i++) {
    console.log(fruits[i]);
}
document.write("<br><h1>Fruits</h1>");
document.write("<br> apple");
document.write("<br>banana");
document.write("<br>mango");
document.write("<br> orange");
document.write("<br>strawberry");
document.write("<br>");
document.write("<br>ELEMENTS at index 0 is apple");
document.write("<br>ELEMENTS at index 1 is banana" );
document.write("<br>ELEMENTS at index 2 is mango");
document.write("<br>ELEMENTS at index 3 is orange");
document.write("<br>ELEMENTS at index 4 is strawberry");
 var forwardcounting = [ "1" ,"2" , "3" , "4" , "5" , "6" , " 7" , " 8" , "9" , "10" , "11" , "12" , " 13" ,"14" , " 15"];
 for (i = 0; i < 16 ; i++) {
    console.log(forwardcounting[i]);
 }
 var reversecounting = ["10" ,"9" , "8" , "7" , "6" , "5" , " 4" , " 3" , "2" , "1" ];
 for (i = 0;i < 10; i++) {
    console.log(reversecounting[i]);
 }
 var even = ["0" , "2" , " 4" , "6" , "8" , " 10" , "12" , " 14" , " 16" , "18" , "20"];
 for (i =0; i < 20; i++) {
    console.log(even[i]);
 }
 var odd = ["1" , " 3" , " 5 ", "7", "9" , "11" , "13" , "15" , "17" , "19" , "21" ]
for (i = 0; i < 21; i++) {
    console.log(odd[i]);
}
var series = ["2k" , " 4k" , "6k" , "8k" , "10k" , "12k" , "14k" , "16k" , "18k" , "20k"];
for(var i =0; i < 20; i++) {
    console.log(series[i]);
}
document.write("<br><h1>Forward Counting</h1>");
document.write("<br> 1 ,2 , 3 , 4 , 5 , 6 , 7, 8 ,9 10, 11 ,12 ,13 ,14 15");

document.write("<br><h1>ReverseCounting</h1>");
document.write("<br> 10 , 9 , 8 , 7 , 6 , 5 , 4 , 3 ,2 ,1");

document.write("<br><h1>Even Numbers</h1>");
document.write("<br> 0 , 2 , 4 , 6 , 8 10 , 12 , 14 , 16 , 18 , 20");

document.write("<br><h1>Odd Numers</h1>");
document.write("<br> 1 , 3 , 5 , 7 , 9, 11, 13 ,15 ,17 ,19");

document.write("<br><h1>Series</h1>");
document.write("<br> 2k , 4k , 6k , 8k , 10k ,12k , 14k , 16k , 18k , 20k");
var bakery = ["cake" , "applepie" , "cookie" , "chips" , "patties"];
var bake = prompt ("HELLO! welcome to bakery what items you want sir ? maam ", "enter item");
for (var i = 0; i < bakery.length ; i++) {
    console.log(bakery[i]);
    if("cookie" == bakery[i]) {
        alert("cookie is available at index 2 in our bakery");
    }
    if ("pastry" !== bakery[i]) {
        alert("we are sorry pastry is not available in our bakery ")
        
    }
}
var multiple = ["5" , " 10" , "15" , "20" , "25" , "30" , "35" ,"40" ,"45" ,"50" , "55" , "60" , "65", "70" , "75" , "80" , "85" , "90" , "95" , "100"]
for (var i = 0; i < 100; i++);
console.log(multiple);
document.write("<br><h1>Multiple of 5</h1>");
document.write("<br>5 , 10 , 15 , 20 , 25 , 30 , 35 , 40 , 45 , 50 , 55 , 60 , 65, 70, 75, 80 , 85, 90 , 95 , 100")
    
