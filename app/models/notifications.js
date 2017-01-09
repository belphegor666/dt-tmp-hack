var https = require ('https');

module.exports = {
	getNotifications: function(priority, callback)
	{
		var query = '?sysparm_query=topic=News^valid_to%3E' + new Date().toISOString();
		var options = {
			host: "cloudcanopyatospov.service-now.com",
			port: 443,
			path: '//api/now/v1/table/kb_knowledge' + query,
			method: 'GET',
			headers: {
				"Authorization" : "Basic YWRtaW4xOmFkbWlu",
				"Content-Type" : "application/json",
				"Access" : "application/json"
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
                try{
                    parsed = JSON.parse(body);
                    if (parsed.result.length == 0){
                        callback('[]');
                    }
                    else{
                        callback(parsed);    
                    }
                }
                catch(err){
                    callback('[]');
                }
            })
        }).on('error', function(err) {
            console.log("notifications.js: error: "+err);
        }).end();
	}
}

