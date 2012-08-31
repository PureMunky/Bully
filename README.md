Bully: Pushover Alerts
==============

## Overview
JavaScript that makes sending alerts through Pushover even easier. Send a message in one line:

	Bully.Send('Bully is the best!!', '#UserKey', '#AppKey');

## Usage
	
### Initilization
To initialize Bully you give it your Application Key assigned by Pushover.net (this only needs to be done once):

	Bully.SetAppKey('#AppKey');

### Message Format - TODO
A message can be a string or an object:

	var message = 'Bully is the best!!';
	
or 

	var message = {
		message: 'Bully is the best!!',				// Required
		title: 'Bully Alert',						// Optional - Default: null
		priority: 1,								// Optional - Default: 0
		url: 'https://github.com/PureMunky/Bully',	// Optional - Default: null
		url_title: 'Bully on Github'				// Optional - Default: null
	};

### Send - TODO
Sending a message:

	Bully.Send('Bully is the best!!');
	
	Bully.Send('Bully is the best!!', '#UserKey');
	
	Bully.Send('Bully is the best!!', '#UserKey', '#AppKey');

### Managing User List - TODO
User Format (string, object, or array):

	var user = '#UserKey';

or

	var user = {
		key: '#UserKey',
		device: 'xoom'
	};
	
or

	var users = [
		{key: '#UserKey1', device: 'xoom'},
		{key: '#UserKey2', device: 'galaxynexus'},
		{key: '#UserKey3'},
		'#UserKey4'
	];
	
Adding a user to the queue that Bully will send messages to:

	Bully.AddUser('#UserKey');

Removing a user from the list:

	Bully.RemoveUser('#UserKey');

Clear User List:

	Bully.ClearUsers();
	
Retrieving the list of Users:

	Bully.Users();

## Pushover
Website: <https://pushover.net/>  
API: <https://pushover.net/api>