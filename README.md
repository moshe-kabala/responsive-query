# responsive-query
Query on the current mode of the screen for js


* Lightweight
* Zero dependencies
* Support typescript

## easy to use

for example
```
if (resQuery.is.Desktop) { // return true only if the screen between 1200-1800
    // do something
} 

if (resQuery.Desktop.andBigger) { // return true only if the screen bigger than 1200
    // do something
}

if (resQuery.Desktop.andSmaller) { // return true only if the screen smaller than 1800
    // do something
}
```
## Screen types
Screen types divided to 

BigDesktop: {from: 1800},
Desktop: {from:1200, to: 1800 },
TabletLandscape: {from:940 ,to: 1200},
TabletPortrait: {from:640 ,to: 940},
Smartphone: { to: 640},



