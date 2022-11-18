
// 1
// function js_style() 
// {
//  text.style.fontSize ="15pt";
//  text.style.fontFamily ="Arial";
//  text.style.color ="Blue";
//  document.body.style.background = "black";
//  window.screen.width = 300;
//  window.screen.height= 300;

// }

// 2
// function getFormvalue()
// {
//   var x=document.getElementById("form1");
//   for (var i=0;i<x.length;i++)
//   {
//    if (x.elements[i].value!='Submit')
//     {  
//         document.write(x.elements[i].value);
//      }  
//    }
// }

// 3
// function getAttributes()
// {
//  var u = document.getElementById("w3r").href;
//  alert('The value of the href attribute of the link is : '+u);
//  var v = document.getElementById("w3r").hreflang;   
//  alert('The value of the hreflang attribute of the link is : '+v);
//  var w = document.getElementById("w3r").rel; 
//   alert('The value of the rel attribute of the link is : '+w);
//  var x = document.getElementById("w3r").target; 
//   alert('The value of the taget attribute of the link is : '+x);
//  var y = document.getElementById("w3r").type; 
//   alert('The value of the type attribute of the link is : '+y);  
// }

// 4
// function insert_Row()
// {
// var x=document.getElementById('sampleTable').insertRow(0);
// var y = x.insertCell(0);
// var z = x.insertCell(1);
// y.innerHTML="New Cell1";
// z.innerHTML="New Cell2";
// }

// 5
// function changeContent()
// {
// rn = window.prompt("Input the Row number(0,1,2)", "0");
// cn = window.prompt("Input the Column number(0,1)","0");
// content = window.prompt("Input the Cell content");  
// var x=document.getElementById('myTable').rows[parseInt(rn,10)].cells;
// x[parseInt(cn,10)].innerHTML=content;
// }

// 6
// function createTable()
// {
// rn = window.prompt("Input number of rows", 1);
// cn = window.prompt("Input number of columns",1);
//  for(var r=0;r<parseInt(rn,10);r++)
//   {
//    var x=document.getElementById('myTable').insertRow(r);
//    for(var c=0;c<parseInt(cn,10);c++)  
//     {
//      var y=  x.insertCell(c);
//      y.innerHTML="Row-"+r+" Column-"+c; 
//     }
//    }
// }

// 7
// function removecolor()
// {
// var x=document.getElementById("colorSelect");
// x.remove(x.selectedIndex);
// }

// 8
// function getOptions()
// {
// var x=document.getElementById("mySelect");
// var txt1 = "No. of items : ";
// var i;
// l=document.getElementById("mySelect").length;  
// txt1 = txt1+l;
// for (i=0;i<x.length;i++)
//   {
//     txt1 = txt1 + "\n" + x.options[i].text;
//   }
// alert(txt1);
// }

// 10
// let table = document.querySelector("table");
// let name = document.querySelector(".name");
// let surname = document.querySelector(".surname");
// let btn = document.querySelector("button");

// table.onclick = function(event){
//     let target = event.target;
//     if(target.tagName != 'TD') return;
//     if(target.tagName == 'TD') {
//         target.innerText = prompt("Изменить",target.innerText);
//     }
// }

// btn.onclick = function() {
//     let tr = document.createElement("tr");
//     if(name.value != "" && surname.value != "") {
//         tr.innerHTML = `<td>${name.value}</td><td>${surname.value}</td>`;
//         table.appendChild(tr);
//     }
// }


