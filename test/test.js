module('User');

test('Retrieve User List', function (){
	var users = Bully.Users();
	expect(1);
	ok(users, 'Users function exists')
});

test('Add User - String', function (){
    Bully.ClearUsers();
	Bully.AddUser('#UserKey');
	
	var users = Bully.Users();
	expect(2);
	equal(users.length, 1, 'One User in the collection');
	ok(users[0].key == '#UserKey', 'User has correct key');
});

test('Add User - Object', function (){
    var userKey = '#UserKey',
        deviceName = '#deviceName';
        
    Bully.ClearUsers();
    Bully.AddUser({key: userKey, device: deviceName});
    
    var users = Bully.Users();
    expect(2);
    equal(users.length, 1, 'One User in the collection');
    ok(users[0].key == userKey && users[0].device == deviceName, 'User has correct key/device combo')
});

test('Add User - Array', function (){
    Bully.ClearUsers();
    var inUsers = [
        {key: '#UserKey1', device: 'xoom'},
        {key: '#UserKey2', device: 'galaxynexus'},
        {key: '#UserKey3'},
        '#UserKey4'
    ];
    Bully.AddUser(inUsers);
    
    var users = Bully.Users();
    expect(5);
    equal(users.length, 4, 'One User in the collection');
    ok(users[0].key && users[0].device, "User 1 has a key and device");
    ok(users[1].key && users[1].device, "User 2 has a key and device");
    ok(users[2].key, "User 3 has a key");
    ok(users[3].key, "User 4 has a key");
});

test('Clear User List', function(){
	Bully.AddUser('#UserKey');
	Bully.ClearUsers();
	expect(1);
	equal(Bully.Users().length, 0, 'User list is clear');
});

module('Messages');

test('Message Structure - String', function(){
	var msg = Bully.TranslateMessage('Test Message');
	
	expect(5)
	
	ok(msg.message, 'Has a message');
	ok(msg.title === null, 'Has a title');
	ok(msg.priority === 0, 'Has a priority');
	ok(msg.url === null, 'Has a URL');
	ok(msg.url_title === null, 'Has a URL title');
});

test('Message Structure - Object', function(){
    var msg = Bully.TranslateMessage({
        message: 'Test Message',
        title: 'Message Title',
        priority: 0,
        url: 'https://github.com/PureMunky/Bully',
        url_title: 'Bully on Github'
    });
    
    expect(5)
    
    ok(msg.message, 'Has a message');
    ok(msg.title === 'Message Title', 'Has a title');
    ok(msg.priority === 0, 'Has a priority');
    ok(msg.url === 'https://github.com/PureMunky/Bully', 'Has a URL');
    ok(msg.url_title === 'Bully on Github', 'Has a URL title');
});

module('Send');

test('Send Exists', function(){
	expect(1);
	ok(Bully.Send, 'Send function exists.');
});
