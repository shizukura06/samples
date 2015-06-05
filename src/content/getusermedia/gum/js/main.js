/*
 *  Copyright (c) 2014 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

'use strict';

// Put variables in global scope to make them available to the browser console.
var video = document.getElementById('gum-local');
var constraints = window.constraints = {
  audio: true,
  video: false
};

function successCallback(stream) {
  var videoTracks = stream.getVideoTracks();
  var audioTracks = stream.getAudioTracks();
  if (videoTracks.length === 1 && audioTracks.length === 0) {
    console.log('Got stream with constraints:', constraints);
    console.log('Using video device: ' + videotracks[0].label);
    stream.onended = function() {
      console.log('Stream ended');
    };
  }
  window.stream = stream; // make variable available to browser console
  attachMediaStream(video, stream);
}

function errorCallback(error) {
  console.log('navigator.getUserMedia error: ', error);
}

navigator.getUserMedia(constraints, successCallback, errorCallback);
