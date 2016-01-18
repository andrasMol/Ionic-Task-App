#Ionic Task App

## To View
I was able to deploy the whole project to a firebase website [https://teamgantt-project.firebaseapp.com]. Clearly an ionic project is not meant to be deployed as a website so it's not properly minified, etc... However, since getting an ionic project running on an ios/android device requires installing a bunch of software and then going through the hoops of publishing to the store, this was the easiest method to be able to show people what it looks like.
####CORS
Because the requests going from the project to the teamgantt server are CORS requests, you need to have a chrome extension installed to allow them to go through. This is not an issue once the project is deployed to a phone. Please see below for the Allow-Control-Allow-Origin chrome extension.

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
To test this in a "mobile" setting, I use the chrome debugger and turn on emulation. It's a great way to see lots of different devices. I did not deploy this to an ios/android environment because it's a real pain to get everything installed (both ios and android require a lot of their own software on the development machine).

##Random points
###Sass
The project is using sass and the main sass file can be found in /scss/ionic.app.scss
###Colors
Only created the 3 different colors for blue, green and purple because I didn't have the time to make all the classes and things for all the different possible colors that a user can pick for their task.
###Fonts
I didn't load in the fonts from the sketch file due to time constraints, so things might look a little different from the sketch file
