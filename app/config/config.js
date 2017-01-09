var fs = require('fs')

module.exports = {
    local : {
        app : {
            name : 'Passport SAML strategy example',
            httpPort : 80,
            httpsPort : 443, 
            database : {
                name : "digitaltulip",
                host : "localhost",
                port : "27017"
            },
            iamserver : "iam.cip-dev.canopy-cloud.com"

        },
        passport: {
            strategy : 'saml',
            saml : {
                path : '/login/callback',
                entryPoint : 'https://iam.cip-dev.canopy-cloud.com:8443/openam/SSORedirect/metaAlias/ActiveDirectory/idp',
                logoutUrl : 'https://iam.cip-dev.canopy-cloud.com:8443/openam/IDPSloRedirect/metaAlias/ActiveDirectory/idp',
                issuer : 'passport-saml',
                callbackUrl: 'http://portal.local.digitaltulip.net/login/callback',
                cert: fs.readFileSync('./cert/forgerock.pem', 'utf-8')
            }
        }
    },
    'cip-dev' : {
        app : {
            name : 'Passport SAML strategy example',
            httpPort : 8080,
            httpsPort : 8443, 
            database : {
                name : "digitaltulip",
                host : "localhost",
                port : "27017"
            },
            iamserver : "iam.cip-dev.canopy-cloud.com"

        },
        passport: {
            strategy : 'saml',
            saml : {
                path : '/login/callback',
                entryPoint : 'https://iam.cip-dev.canopy-cloud.com/openam/SSORedirect/metaAlias/ActiveDirectory/idp',
                logoutUrl : 'https://iam.cip-dev.canopy-cloud.com/openam/IDPSloRedirect/metaAlias/ActiveDirectory/idp',
                issuer : 'passport-saml',
                callbackUrl: 'https://portal.cip-dev.canopy-cloud.com/login/callback',
                cert: fs.readFileSync('./cert/forgerock.pem', 'utf-8')
            }
        }
    },
    dev : {
        app : {
            name : 'Passport SAML strategy example',
            httpPort : process.env.PORT || 8080,
            httpsPort : 8443,
            database : {
                name : "digitaltulip",
                host : "localhost",
                port : "27017"
            },
            iamserver : "iam.dev.digitaltulip.net"

        },
        passport: {
            strategy : 'saml',
            saml : {
                path : '/login/callback',
                entryPoint : 'https://iam.dev.digitaltulip.net/openam/SSORedirect/metaAlias/ActiveDirectory/idp',
                logoutUrl : 'https://iam.dev.digitaltulip.net/openam/IDPSloRedirect/metaAlias/ActiveDirectory/idp',
                issuer : 'passport-saml',
                callbackUrl: 'https://portal.dev.digitaltulip.net/login/callback',
                cert: fs.readFileSync('./cert/forgerock.pem', 'utf-8')
            }
        }
    },

    demo : {
        app : {
            name : 'Passport SAML strategy example',
            httpPort : process.env.PORT || 8080,
            httpsPort : 8443,
            database : {
                name : "digitaltulip",
                host : "localhost",
                port : "27017"
            },
            iamserver : "iam.demo.digitaltulip.net"

        },
        passport: {
            strategy : 'saml',
            saml : {
                path : '/login/callback',
                entryPoint : 'https://iam.demo.digitaltulip.net/openam/SSORedirect/metaAlias/ActiveDirectory/idp',
                logoutUrl : 'https://iam.demo.digitaltulip.net/openam/IDPSloRedirect/metaAlias/ActiveDirectory/idp',
                issuer : 'passport-saml',
                callbackUrl: 'https://portal.demo.digitaltulip.net/login/callback',
                cert: fs.readFileSync('./cert/forgerock.pem', 'utf-8')
            }
        }
    },
    awsdemo : {
        app : {
            name : 'Passport SAML strategy example',
            httpPort : process.env.PORT || 8080,
            httpsPort : 8443,
            database : {
                name : "digitaltulip",
                host : "localhost",
                port : "27017"
            },
            iamserver : "iam.digitaltulip.net"

        },
        passport: {
            strategy : 'saml',
            saml : {
                path : '/login/callback',
                entryPoint : 'https://iam.digitaltulip.net/openam/SSORedirect/metaAlias/ActiveDirectory/idp',
                logoutUrl : 'https://iam.digitaltulip.net/openam/IDPSloRedirect/metaAlias/ActiveDirectory/idp',
                issuer : 'passport-saml',
                callbackUrl: 'https://portal.digitaltulip.net/login/callback',
                cert: fs.readFileSync('./cert/forgerock.pem', 'utf-8')
            }
        }
    },
    awsdev : {
        app : {
            name : 'Passport SAML strategy example',
            httpPort : process.env.PORT || 8080,
            httpsPort : 8443,
            database : {
                name : "digitaltulip",
                host : "localhost",
                port : "27017"
            },
            iamserver : "iam.awsdev.digitaltulip.net"

        },
        passport: {
            strategy : 'saml',
            saml : {
                path : '/login/callback',
                entryPoint : 'https://iam.awsdev.digitaltulip.net/openam/SSORedirect/metaAlias/ActiveDirectory/idp',
                logoutUrl : 'https://iam.awsdev.digitaltulip.net/openam/IDPSloRedirect/metaAlias/ActiveDirectory/idp',
                issuer : 'passport-saml',
                callbackUrl: 'https://portal.awsdev.digitaltulip.net/login/callback',
                cert: fs.readFileSync('./cert/forgerock.pem', 'utf-8')
            }
        }
    },
    devatosdigital : {
        app : {
            name : 'Passport SAML strategy example',
            httpPort : process.env.PORT || 8080,
            httpsPort : 8443,
            database : {
                name : "digitaltulip",
                host : "localhost",
                port : "27017"
            },
            iamserver : "iam.devatosdigital.digitaltulip.net"

        },
        passport: {
            strategy : 'saml',
            saml : {
                path : '/login/callback',
                entryPoint : 'https://iam.devatosdigital.digitaltulip.net/openam/SSORedirect/metaAlias/ActiveDirectory/idp',
                logoutUrl : 'https://iam.devatosdigital.digitaltulip.net/openam/IDPSloRedirect/metaAlias/ActiveDirectory/idp',
                issuer : 'passport-saml',
                callbackUrl: 'https://portal.devatosdigital.digitaltulip.net/login/callback',
                cert: fs.readFileSync('./cert/forgerock.pem', 'utf-8')
            }
        }
    }
}