module('User');

test('TranslateUser - String', function() {
	var user = Bully.TranslateUser('test');
	expect(1);
	equal(user.length, 1, 'One User Returned');
});

test('TranslateUser - Object', function() {
	var user = Bully.TranslateUser({key: 'test'});
	expect(1);
	equal(user[0].key, 'test', 'One User Returned');
});

test('TranslateUser - Array', function() {
	var ar = new Array();
	ar.push({key: 'test'});
	var user = Bully.TranslateUser(ar);
	expect(1);
	equal(user[0].key, 'test', 'One User Returned');
});

test('TranlateUser - Multiple', function (){
	var users = [
		{key: '#UserKey1', device: 'xoom'},
		{key: '#UserKey2', device: 'galaxynexus'},
		{key: '#UserKey3'},
		'#UserKey4'
	];
	
	var rtnUser = Bully.TranslateUser(users);
	
	expect(users.length);
	
	for(var i = 0; i < rtnUser.length - 1; i++) {
		ok(rtnUser[i].key, 'Translated Key:' + rtnUser.key);
	}
});

test('Retrieve User List', function (){
	var users = Bully.Users();
	expect(1);
	ok(users, 'Users function exists')
});

test('Add User', function (){
	Bully.AddUser('#UserKey');
	
	var users = Bully.Users();
	expect(1);
	equal(users.length, 1, 'One User in the collection');
});

test('Clear User List', function(){
	Bully.AddUser('#UserKey');
	Bully.ClearUsers();
	expect(1);
	equal(Bully.Users().length, 0, 'User list is clear');
});

test('Remove User', function (){
	Bully.AddUser('#UserKey1');
	Bully.AddUser('#UserKey2');
	expect(1);
	equal(Bully.Users().length, 1, 'Removed a single user');
});


module('Messages');

test('Message Structure', function(){
	var msg = Bully.TranslateMessage('Test Message');
	
	expect(5)
	
	ok(msg.message, 'Has a message');
	ok(msg.title, 'Has a title');
	ok(msg.priority, 'Has a priority');
	ok(msg.url, 'Has a URL');
	ok(msg.url_title, 'Has a URL title');
});

module('Send');

test('Send Exists', function(){
	expect(1);
	ok(Bully.Send, 'Send function exists.');
});

