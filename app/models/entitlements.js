var https = require('https');

module.exports = {
    getEntitlements: function(mail, callback) {
        var env = process.env.NODE_ENV || 'local',
        config = require('../config/config')[env];

        var encodedquery = encodeURIComponent('mail eq "' + mail + '"');

        var options = {
            host: config.app.iamserver,
            port: 443,
            path: '/openidm/managed/user?_queryFilter=' + encodedquery,
            method: 'GET',
            headers: {
                "X-OpenIDM-Username" : "openidm-admin",
                "X-OpenIDM-Password" : "D1g1talTul1p"
            }
        };
        https.request(options, function(res) {
            res.setEncoding('utf8');
            var body = '';
            res.on('data', function(chunk) {
                body += chunk;
            });
            res.on('end', function(){
                var parsed;
// This hack bypasses the IdM process and returns a static
// role config for debugging and testing
console.log("Body: "+body);
body = '{ "result": [ {"roles":["openidm-authorized"] } ] }';
//
                try{
                    parsed = JSON.parse(body);
                    if (parsed.result.length == 0){
                        callback('[]');
                    }
                    else{
                        callback(parsed.result[0].roles);    
                    }
                }
                catch(e){
                    console.log(body);
                    console.log(e);
                    callback('[]');
                }
            });

        }).on('error', function(e) {
            console.error(e);
            callback('[]');
        }).end();

    }
}
