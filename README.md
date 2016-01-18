#Ionic Task App

## To Run
```
First install npm [https://nodejs.org/en/]
```
Then
```
$ npm install -g cordova ionic
```
Then you want to clone the repo
```
git clone https://github.com/andrasMol/Ionic-Task-App.git
```
Next navigate to the new project folder and at the root level
```
npm install
```
This will install all the npm packages that we have
```
ionic serve
```
This will fire the app in localhost. However, because the http requests are CORS requests, you can install a chrome
extension to allow the requests to go through
```
Allow-Control-Allow-Origin: * [https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en]
```
##Random points
###Sass
The project is using sass and the main sass file can be found in /scss/ionic.app.scss
###Colors
Only created the 3 different colors for blue, green and purple because I didn't have the time to make all the classes and things for all the different possible colors.
###Fonts
I didn't load in the fonts from the sketch file due to time constraints, so things might look a little different from the sketch file
