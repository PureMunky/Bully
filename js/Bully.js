var Bully = (function ($) {
    // Constants
    var PUSHOVER_API = 'https://api.pushover.net/1/messages.json';
    
    // Privates
    var _AppKey;

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
        }
    };
})(jQuery);