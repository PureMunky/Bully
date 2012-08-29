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
