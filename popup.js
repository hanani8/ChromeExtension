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
  
} 





