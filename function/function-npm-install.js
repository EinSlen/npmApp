const {shell, Notification, electron, remote} = require('electron');
const path = require('path')

var options = [
    {
      title: "Basic Notification",
      body: "Short message part"
    }
]


function doNotify(evt) {
    if (evt.srcElement.id == "npmdf") {
      new Notification(options[0].title, options[0]);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("npmdf").addEventListener("click", doNotify);
});