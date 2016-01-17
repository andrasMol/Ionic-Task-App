####Ionic Task App

## To Run
```
$ npm install -g cordova ionic
```
Then you want to clone the repo
```
git clone https://github.com/andrasMol/Ionic-Task-App.git
```
Next navigate to the new project folder and at the root level do
```
ionic serve
```
This will fire the app in localhost. However, because the http requests are CORS requests, you can install a chrome
extension to allow the requests to go through
```
Allow-Control-Allow-Origin: * [https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en]
```
