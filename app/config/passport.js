var fs = require('fs')

var SamlStrategy = require('passport-saml').Strategy;

var localstrat;
var User = require('../models/user.js');
module.exports = function(passport, config) {

    localstrat = new SamlStrategy({
        path: config.passport.saml.path,
        entryPoint: config.passport.saml.entryPoint,
        issuer: config.passport.saml.issuer,
        callbackUrl: config.passport.saml.callbackUrl,
        cert: config.passport.saml.cert 
    }, function(profile, done) {
//
console.log("Profile: "+JSON.stringify(profile));
//
        User.findOne({email : profile.nameID.toLowerCase()}, function(err, oldUser){
                    if(oldUser){
//
console.log("Old User: "+JSON.stringify(oldUser));
//
                        done(null,oldUser);
                    }else{
                        var newUser = new User({
                           
                            id :         profile.uid,
                            email :      profile.nameID.toLowerCase(),
                            name :       profile.displayName,
                            displayName: profile.cn,
                            firstName:   profile.givenName,
                            lastName:    profile.sn,
                            image:       profile.image
                        }).save(function(err,newUser){
                            if(err) throw err;
                            done(null, newUser);
                        });
                    }
                });
            });

    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(user, done) {
        done(null, user);
    });

    passport.use(localstrat);
}


module.exports.getsamlMetadata = function() {
    var cert = fs.readFileSync('cert/certificate.crt', 'utf-8');
    return localstrat.generateServiceProviderMetadata(cert);
}
