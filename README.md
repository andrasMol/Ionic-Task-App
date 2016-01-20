#Ionic Task App
Built using Ionic 1.

##Features
####My Tasks
The home page which shows all tasks currently assigned to a user separated by project. Used the given sketch file for design.
####Task Detail Screen
Tapping on a task from the My Tasks page will navigate to an individual task page which gives a bit more detail about a given task. I designed this myself, so probably needs a bit of work :)

## To View
I was able to deploy the whole app to a firebase [website](https://teamgantt-project.firebaseapp.com). You can see the "mobile view" if you use chrome device emulation, you can pick any device, I was primarily working off of an iPhone 6, however it will look good on all devices.

####CORS
Because the requests going from the app to the Teamgantt server are CORS requests, you need to have a chrome extension installed to allow them to go through. This is not an issue once the app is deployed to a phone. Please see below for the Allow-Control-Allow-Origin chrome extension.

####No phone support?
I didn't add the iOs or android platforms to the ionic app for a couple of reasons. Mostly that it takes a while to install all the necessary software on a machine to be able to even start debugging. The other reason is that we can see what the app will look like by using the Chrome device emulation, because this simple app doesn't have any native app requirements (eg. phone, gps, etc...)

####Non minified javascript?
Since an Ionic app isn't meant to be a website, there is no proper minification etc... done for the deployed firebase website. The only reason I deployed this at all is to make sure people didn't have to go through the hoops of installing all the tools found below just to be able to see what I built.

## To Run
```
First install npm (https://nodejs.org/en/)
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
Allow-Control-Allow-Origin: *
https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en
```

##Random points
####Sass
The project is using sass and the main sass file can be found in /scss/ionic.app.scss. It then compiles to create the www/css/ionic.app.css file which combines all the ionic css with our custom stuff. The custom css seems to be at the bottom of the file.

####Task Colors
I only created 3 different colors for blue2, green1 and purple2 to save time.

####Fonts
I didn't load in the fonts from the sketch file due to time constraints, so things might look a little different from the sketch file.
