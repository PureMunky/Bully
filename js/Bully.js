var Bully = (function ($) {
    // Constants
    var PUSHOVER_API = 'https://api.pushover.net/1/messages.json';
    
    // Privates
    var _AppKey;
	var _UserList = new Array();
	
	var _SendOne = function(Message, User, AppKey) {	
		$.ajax({
            type: 'POST',
            url: PUSHOVER_API,
            data: {
                token: AppKey,
                user: User.key,
                message: Message.message,
                device: User.device,
                title: Message.title,
                priority: Message.priority,
                url: Message.url,
                url_title: Message.url_title
            }
        });
	};
	
	var _Send = function(Message, Users, AppKey) {
	    var msg = _TranslateMessage(Message);
	    var UserList = Users ? _TranslateUser(Users) : _UserList;
	    var ApplicationKey = AppKey ? AppKey : _AppKey;
	    
		for(var i = 0; i < UserList.Length -1; i++) {
			_SendOne(Users[i], ApplicationKey, msg);
		}
	};
	
	var _TranslateUser = function(User) {
		// Take any potential user input and translate it to an array of user objects.
		if(typeof(User) == 'string') {
			var ar = new Array();
			ar.push({
				key: User
			});
			return ar;
		} else if(typeof(User) == 'object') {
			if(User.length || User.length == 0) {
				if(User.length > 0) {
					var ar = new Array();
					for(var i = 0; i < User.length; i++) {
						ar.push(_TranslateUser(User[i])[0]);
					}
					return ar;
				}
				return new Array();
			} else {
				if(User.key) {
					var ar = new Array();
					ar.push(User);
					return ar;
				}
			}
			return false;
		}
		return false;
	};
	
	var _TranslateMessage = function(Message) {
	    // Define the message defaults.
	    var msg = {
            message: 'Bully is the best!!',
            title: null,
            priority: 0,
            url: null,
            url_title: null
        };
        
	    if(typeof(Message) == 'string') {
	        msg.message = Message;
	        return msg;
	    } else if(typeof(Message) == 'object'){
	        msg.message = Message.message ? Message.message : 'Default Title';
	        msg.title = Message.title ? Message.title : msg.title;
            msg.priority = Message.priority ? Message.priority : msg.priority;
            msg.url = Message.url ? Message.url : msg.url;
            msg.url_title = Message.url_title ? Message.url_title : msg.url_title;
            return msg;
	    }
	}
	
    return {
        SetAppKey: function (AppKey) {
            _AppKey = AppKey;
        },
        Send: function (message, users, appkey) {
            // Send a message to a user through Pushover's API.
            _Send(message, users, appkey);
        },
        AddUser: function (User) {
            var users = _TranslateUser(User);
            for(var i = 0; i < users.length; i++) {
        	   _UserList.push(users[i]);
        	}
        },
        Users: function() {
        	return _UserList;
        },
        ClearUsers: function() {
            _UserList = new Array();
        },
        TranslateMessage: function(Message) {
            return _TranslateMessage(Message);
        }
    };
})(jQuery);