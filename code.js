//   1. 01.	How to compare two JSON with same properties without order?

function compareJSON(obj1, obj2) {
    const sortedObj1 = JSON.stringify(obj1, Object.keys(obj1).sort());
    const sortedObj2 = JSON.stringify(obj2, Object.keys(obj2).sort());
   return sortedObj1 === sortedObj2;
   }
  let obj1 = { name: "Person 1", age: 5 };
  let obj2 = { age: 5, name: "Person 1" };
  console.log(compareJSON(obj1, obj2)); 


  //   02. Display all the country flag in the console?

var a = new XMLHttpRequest();
request.open ("GET","https://restcountries.com/v2/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    console.log(result);
}

//   03.	Print all countries names ,region,subregion and population?

var a = new XMLHttpRequest();
request.open ("GET","https://restcountries.com/v2/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
        for( var i = 0; i< result.length; i++){
        console.log(result[i].name)
    }
}



