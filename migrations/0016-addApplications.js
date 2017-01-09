
var mongodb = require('mongodb');

exports.up = function(db, next){
    db.createCollection("applications", function(err,coll){

        //coll.insert({ name: "Office 365", description : 'Microsoft\'s online messaging and collaboration platform', img:'/img/Office_256.png', url:'https://login.microsoftonline.com/PostToIDP.srf?msg=AuthnReq&realm=MS.DIGITALTULIP.NET&wa=wsignin1.0&wtrealm=urn:federation:MicrosoftOnline&wctx=bk%3D1427361385%26LoginOptions%3D3', bgcolour: "#0072C6", role: ["managed/role/o365user"]},function(err, result) {});
        coll.insert({ name: "Manage Services", description : 'Online IT Service Management Tool', img:'/img/Service_mgt_256.png', url:'https://cloudcanopyatospov.service-now.com' , bgcolour: "#EB3C00",  role: ["managed/role/snowselfserveuser","managed/role/snoworchestrationuser", "managed/role/snowapprover"]},function(err, result) {});
        coll.insert({ name: "Performance management", description : 'Online Application and Platform Monitoring', img:'/img/Performance_mgt_256.png', url:'http://appd.atos.io/controller' , bgcolour: "#ffb900" ,role: "managed/role/perfmanagementusers" },function(err, result) {});
        coll.insert({ name: "Customer Relationship Management", description : 'Cloud provided CRM platform', img:'/img/Salesforce_256.png', url:'https://login.salesforce.com', bgcolour: "#969696"  ,role: "managed/role/crmusers" },function(err, result) {});
        coll.insert({ name: "Cloud Storage", description : 'Online storage in the cloud', img:'/img/box_256.png', url:'https://app.box.com' ,bgcolour: "#0072C6" , role: "managed/role/cloudstorageusers" },function(err, result) {});
        coll.insert({ name: "Optimisation Management", description : 'Cloud optimisation platform', img:'/img/Cloud_Opt_256.png', url:'http://ec2-52-17-8-44.eu-west-1.compute.amazonaws.com:8080/customer-ui-server/ui/#/dashboard/applications' ,bgcolour: "#EB3C00" , role: "managed/role/optimisationmanagementusers" },function(err, result) {});
        coll.insert({ name: "Service Overview", description : 'Service Usage Information', img:'/img/Service_overview_256.png', url:'https://52.17.141.57/sense/app/4cf9c5e9-34a0-4602-819b-2f48865539fb/sheet/LqVHx/state/analysis', bgcolour: "#ffb900" , role: "managed/role/serviceoverviewusers"},function(err, result) {});
        coll.insert({ name: "Application Store", description : 'Buy Applications from the Cloud', img:'/img/Cloud_appstore_256.png', url:'http://Store.canopy-cloud.com' ,bgcolour: "#969696" , role: "managed/role/applicationstoreusers" },function(err, result) {});
        coll.insert({ name: "Security Management", description : 'Data protection for dynamic enterprises', img:'/img/Security_256.png', url:'http://varmour.atos.io:8000', bgcolour: "#0072C6" , role: "managed/role/securitymanagementusers"},function(err, result) {});
        coll.insert({ name: "Cost Optimisation", description : 'Optimise IaaS costs in Public Cloud', img: '/img/Cost_Opt_256.png', url: 'https://app.cloudyn.com/dashboard.html', bgcolour:"#EB3C00", role: "managed/role/costoptimisationusers"},function(err, result) {});
        coll.insert({ name: "Self Help", description : 'Resolve your IT problems with our self help guides', img: '/img/Selfhelp_option2_256.png', url: 'https://cloudcanopyatospov.service-now.com/nav_to.do?uri=services/get_help.do', bgcolour:"#ffb900" , role: "openidm-authorized"},function(err, result) {});
        coll.insert({ name: "Compose", description : 'Canopy\'s IaaS Orchestratration Tool', img: '/img/Compose_blue.png', url: 'https://demo.compose.canopy-cloud.com/', bgcolour:"#006398", role: "openidm-authorized"},function(err, result) {});
        coll.insert({ name: "Cloud Fabric", description : 'Canopy\'s PaaS Solution', img: '/img/Fabric.png', url: '/#/cloud-fabric', bgcolour:"#006398", role: "openidm-authorized"},function(err, result) {});
        coll.insert({ name: "Google Apps", description : 'Google\'s online messaging and collaboration platform', img:'/img/gmail_256.png', url:'https://accounts.google.com/ServiceLogin?Email=jenny.bates@portal.canopy-cloud.com', bgcolour: "#006398" , role: ["openidm-authorized"]  },function(err, result) {});
        coll.insert({ name: "Office 365", description : 'Microsoft\'s online messaging and collaboration platform', img:'/img/Office_256.png', url:'https://login.microsoftonline.com/', bgcolour: "#006398", role: ["openidm-authorized"]},function(err, result) {});
        next();
        //google app tile specifically for jenny.bates@portal.canopy-cloud.com
    });
    
}; 

exports.down = function(db, next){
  db.collection("applications", function (err, coll){
    coll.remove({name: "Office 365"},function(err, result) {});
    coll.remove({name: "Google Apps"},function(err, result) {});
    coll.remove({name: "Manage Services"},function(err, result) {});
    coll.remove({name: "Performance management"},function(err, result) {});
    coll.remove({name: "Customer Relationship Management"},function(err, result) {});
    coll.remove({name: "Cloud Storage"},function(err, result) {});
    coll.remove({name: "Optimisation Management"},function(err, result) {});
    coll.remove({name: "Service Overview"},function(err, result) {});
    coll.remove({name: "Application Store"},function(err, result) {});
    coll.remove({name: "Self Help"},function(err, result) {});
    coll.remove({name: "Cost Optimisation"},function(err, result) {});
    coll.remove({name: "Security Management"},function(err, result) {});
    coll.remove({name: "Compose"},function(err, result) {});
    coll.remove({name: "cloudFabric"},function(err, result) {});
    coll.remove({name: "Cloud Fabric"},function(err, result) {});
    next();
  });
};
