# Dark-Sky-API

[Dark Sky API](https://darksky.net/dev)

## Installation
To install everything needed for this project you need to have a version of Node JS and NPM installed on your machine.

```sh
$ git clone https://github.com/19WDWU02/Dark-Sky-API.git
$ cd Dark-Sky-API
$ npm install
```

You also need to create a **config.json** file in your root directory and paste the following in the file.
You need to get a Dark Sky API Key from the [Dark Sky API Website](https://darksky.net/dev) and include it in the json file.  
An example file has been given which you can also duplicate.  
```json
{
  "darkSkyKey": ""
}
```

## Task
You are to utilize the Dark Sky API, as well as the [Google Maps API](https://developers.google.com/maps/documentation/javascript/tutorial) to create an application which you can search for a location using Google's autocomplete function, to be able to tell you what the weather is like in that location.  

You don't need to create a 'pretty' front-end interface for it at this stage, but rather just have a heading which tells you the location you are searching for, as well as the current weather is for that place.
