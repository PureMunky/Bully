var Bully = (function ($) {
    // Constants
    var PUSHOVER_API = 'https://api.pushover.net/1/messages.json';
    
    // Privates
    var _AppKey;
	var _UserList = new Array();
	
	var _SendOne = function(User, AppKey, Message) {	
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
	
	var _Send = function(Users, AppKey, Message) {
		for(var i = 0; i < Users.Length -1; i++) {
			_SendOne(Users[i], AppKey, Message);
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
	
    return {
        SetAppKey: function (AppKey) {
            _AppKey = AppKey;
        },
        Send: function (UserKey, message, device, title) {
            // Send a message to a user through Pushover's API.
            if (_AppKey) {
                $.ajax({
                    type: 'POST',
                    url: PUSHOVER_API,
                    data: {
                        token: _AppKey,
                        user: UserKey,
                        message: message,
                        device: device,
                        title: title
                    }
                });
                return true;
            } else {
                return false;
            }
        },
        AddUser: function (User) {
            var users = _TranslateUser(User);
            for(var i = 0; i < users.length; i++) {
        	   _UserList.push(users[i]);
        	}
        },
        RemoveUser: function (User) {
            var ar = new Array();
            var users = _TranslateUser(User);
            for(var i = 0; i < _UserList.length; i++) {
               if(users.indexOf(_UserList[i]) == -1) ar.push(_UserList[i]);
            }
            _UserList = ar;
        },
        Users: function() {
        	return _UserList;
        },
        ClearUsers: function() {
            _UserList = new Array();
        }
    };
})(jQuery);