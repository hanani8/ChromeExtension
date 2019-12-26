// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("cc").addEventListener("click", save);
});

 function save(){
  var travel = document.getElementById("tex").value;
  var x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  x.setAttribute("value", travel);
  document.body.appendChild(x);

  var div = document.getElementById('divID');
  div.innerHTML = div.innerHTML + travel;
} 
// The handler also must go in a .js file

let changeColor = document.getElementById('changeColor');
chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});


changeColor.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "' + color + '";'});
  });
};