# liri-node-app

This app is a very basic language interpretation and recognition interface, which can return twitter, movie, and music data.  It also keeps and updates a log of all requests made.  


## Demo

![](https://github.com/ehlerorngard/liri-node-app/blob/master/assets/liriDemo.gif)

a code sample:
![](https://github.com/ehlerorngard/liri-node-app/blob/master/assets/liriCodeSnippet2.png)


## Running the App Locally

#### Prerequisites

You'll need node and node package manager. 


#### Installing

To run this app you'll need these packages installed:  
twitter, node-spotify-api, inquirer, and request.  

At the directory's root after cloning down the repository, enter in your terminal:

```
npm install 
```

API keys are required to access the three employed APIs;  if the keys utilized in the code aren't working, you'll need to request your own and insert them. 


#### Running the App

Simply open the file 'liri.js' in the terminal:
```
node liri.js
```  
A note on request entry: word(s)/name(s), though not case sensitive, must be spelled correctly to register a reponse from the database, as no additional search algorithms or validation is employed.
