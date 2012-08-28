Bully: Pushover Alerts
==============

## Overview
JavaScript that makes sending alerts through Pushover even easier.

## Usage
	
### Initilization
To initialize Bully you give it your Application Key assigned by Pushover.net (this only needs to be done once):

	Bully.SetAppKey('#YourAppKey');

### Send a Message
Sending a message through Bully is as simple as giving it a User Key and message:

	Bully.Send('#UserKey', 'Bully is the best!!');

## Pushover
Website: <https://pushover.net/>  
API: <https://pushover.net/api>