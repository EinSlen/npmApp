// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const robot_animation = require('./animation/robot-animation')
const optionsfunction = require("./function/function-options")
const npm_inst = require('./function/function-npm-install')
const npmc = {}

const {shell, Notification, electron, remote} = require('electron');
const path = require('path')

document.getElementById('minimize-button').addEventListener('click', () => {
    remote.getCurrentWindow().minimize()
})

document.getElementById('close-button').addEventListener('click', () => {
    remote.app.quit()
})

npmc.clickoption = 1;
const npmoption = document.querySelectorAll('.a-config-title');
npmoption.forEach(elt => {
  elt.addEventListener('click', () => {
    npmc.clickoption++;
    var npmconfigimage = document.getElementById('config-title');
    npmconfigimage.src = "./images/configure.png";
    if(npmc.clickoption == 1) {
      document.getElementById('text-div').style.display = 'block';
      document.getElementById('text-option').style.display = 'none';
      npmconfigimage.src = "./images/configure.png";
    }
    if(npmc.clickoption == 2) {
      document.getElementById('text-div').style.display = 'none';
      document.getElementById('text-option').style.display = 'block';
      npmconfigimage.src = "./images/croix-config.png";
      npmc.clickoption = 0;
    }
  });
});


const npminstalltext = document.querySelectorAll('.npm-install-text');
npmc.clicknpminstalltext = 0;
npminstalltext.forEach(elt => {
  elt.addEventListener('click', () => {
    var npmblockinstall = document.getElementById('npm-install-block')
      npmc.clicknpminstalltext++;
        if(npmc.clicknpminstalltext == 1) {
            document.getElementById('npm-install-text').innerHTML = "⇩ NPM INSTALL";
            console.log("Function npm-install-text on")
            npmblockinstall.style.display = 'block';
        }    
        if(npmc.clicknpminstalltext == 2) {
            document.getElementById('npm-install-text').innerHTML = "⇨ NPM INSTALL";
                npmc.clicknpminstalltext = 0;
                console.log("Function npm-install-text off")
                npmblockinstall.style.display = 'none';
        }
    })
});

const npmpreinstalltext = document.querySelectorAll('.npm-preinstall-text');
npmc.clickprenpminstalltext = 0;
npmpreinstalltext.forEach(elt => {
  elt.addEventListener('click', () => {
        npmc.clickprenpminstalltext++;
        if(npmc.clickprenpminstalltext == 1) {
            document.getElementById('npm-preinstall-text').innerHTML = "⇩ NPM PREINSTALL";
            console.log("Function npm-preinstall-text on")
        }    
        if(npmc.clickprenpminstalltext == 2) {
            document.getElementById('npm-preinstall-text').innerHTML = "⇨ NPM PREINSTALL";
                npmc.clickprenpminstalltext = 0;
                console.log("Function npm-preinstall-text off")
        }
    })
});

const npmsearchtext = document.querySelectorAll('.npm-search-text');
npmc.clicksearchtext = 0;
npmsearchtext.forEach(elt => {
  elt.addEventListener('click', () => {
        npmc.clicksearchtext++;
        if(npmc.clicksearchtext == 1) {
            document.getElementById('npm-search-text').innerHTML = "⇩ NPM SEARCH";
            console.log("Function npm-search-text on")
        }    
        if(npmc.clicksearchtext == 2) {
            document.getElementById('npm-search-text').innerHTML = "⇨ NPM SEARCH";
                npmc.clicksearchtext = 0;
                console.log("Function npm-search-text off")
        }
    })
});
