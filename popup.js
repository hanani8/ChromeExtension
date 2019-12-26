// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener("keydown", function(e){
    if(e.key == 'Enter'){
      save();
    }
  });
});

 function save(){
   
  var travel = document.getElementById("tex").value;
  var x = document.createTextNode(travel);
  document.body.appendChild(x);
  document.getElementById("tex").value = ""
      saveTextasFile(travel);
  
} 

function saveTextasFile(travel){
  var a = document.createElement('a');
  var blob = new Blob([ travel ], {type : "text/plain;charset=UTF-8"});
  a.href = window.URL.createObjectURL(blob);
  a.download = 'note1.txt';
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  
  

}






