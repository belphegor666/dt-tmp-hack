# digitaltulip-portal
Consumer portal for Digital Tulip

Contains NodeJs code for the consumer portal.

Express backend with a mongo database supporting it. Angularjs front end calling Express endpoints over HTTP

To Run
Ensure mongo is running

Add localhost entry for portal.{{env}}.digitaltulip.net

node ./node_modules/mongo-migrate/index.js -runmm down

node ./node_modules/mongo-migrate/index.js -runmm up

sudo NODE_ENV={{env}} node server.js

http://portal.{{env}}.digitaltulip.net