// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("showfiles").addEventListener("click", show);
  document.addEventListener("keydown", function(e){
    if(e.key == 'Enter'){
      save();
        }
   
  });
  
});

 function save(){
   
  var travel = document.getElementById("tex").value;
  chrome.storage.sync.set({'Note1':travel},function(){

    alert('your note has been saved');
    var x = document.createTextNode(travel);
  document.body.appendChild(x);
  document.getElementById("tex").value = ""
  });
  
   //   saveTextasFile(travel);
  
} 
function show(){

  chrome.storage.sync.get('Note1',function(data){
    alert(data.Note1);
    //need to replace alert with fuctionality
    // need to use this get and set function in generators or loops
  })
}
// function saveTextasFile(travel){
//   var a = document.createElement('a');
//   var blob = new Blob([ travel ], {type : "text/plain;charset=UTF-8"});
//   a.href = window.URL.createObjectURL(blob);
//   a.download = 'note1.txt';
//   a.style.display = 'none';
//   document.body.appendChild(a);
//   a.click();
  
// }



