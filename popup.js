// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
document.addEventListener('DOMContentLoaded', function() {
  
  document.getElementById("showfiles").addEventListener("click", show);
  document.addEventListener("keydown", function(e){
    if(e.key == 'Enter'){
      var Itext = document.getElementById("tex").value;
      save(Itext);
        }
   
  });
  
});
  
var items=[];
const obj={'Note':items};
 function save(input){
   
   items.push(input);
   

  chrome.storage.sync.set(obj,function(){

  alert('your note has been saved');
  var x = document.createTextNode(Itext);
      document.body.appendChild(x);
      document.getElementById("tex").value = ""

  console.log(obj.Note)
  });
  
   //   saveTextasFile(travel);
  
} 
function show(){
  //displaying notes
  chrome.storage.sync.get('Note',function(data){
    alert(data.Note);
    console.log(data);            
    var myParent = document.body;                            //generating drop down
    var array = data.Note;
    var selectList = document.createElement("select");
    selectList.id = "mySelect";
    myParent.appendChild(selectList);
       for (var i = 0; i < array.length; i++) {
        var option = document.createElement("option");
        option.value = array[i];
        option.text = array[i];
        selectList.appendChild(option);
    }
    document.getElementById("mySelect").addEventListener("change", function(){
      alert('works');
      var Itext = document.getElementById("tex");             //replaces textarea content with selected note
      var selectBox = document.getElementById("mySelect");
      Itext.value = selectBox.options[selectBox.selectedIndex].value;
    
      
     
    
    });
  });
}



