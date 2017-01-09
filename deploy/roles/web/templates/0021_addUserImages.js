
var mongodb = require('mongodb');

exports.up = function(db, next){
    db.createCollection('users', function(err,coll){
       coll.insert({ name: 'Arthur Brown' ,displayName: 'Arthur Brown'    ,firstName: 'Arthur',lastName:'Brown' ,user: 'arthur.brown', email : 'arthur.brown@ms.{{fqdn}}', image:'/img/arthur.brown.jpeg'},function(err, result) {});
       coll.insert({ name: 'Jenny Bates',displayName: 'Jenny Bates'     ,firstName:'Jenny' ,lastName:'Bates' ,user: 'jenny.bates', email : 'jenny.bates@ms.{{fqdn}}', image:'/img/jenny.bates.jpeg'},function(err, result) {});
       coll.insert({ name: 'John Smith',displayName: 'John Smith'      ,firstName: 'John',lastName:'Smith' ,user: 'john.smith', email : 'john.smith@{{fqdn}}', image:'/img/john.smith.jpeg'},function(err, result) {});
       coll.insert({ name: 'Vikram Uddin',displayName: 'Vikram Uddin'    ,firstName: 'Vikram',lastName: 'Uddin',user: 'vikram.uddin', email : 'vikram.uddin@ms.{{fqdn}}', image:'/img/vikram.uddin.jpeg'},function(err, result) {});
       coll.insert({ name: 'Sarah Wilson',displayName: 'Sarah Wilson'    ,firstName:'Sarah' ,lastName: 'Wilson',user: 'sarah.wilson', email : 'sarah.wilson@ms.{{fqdn}}', image:'/img/sarah.wilson.jpeg'},function(err, result) {});
       coll.insert({ name: 'Adam Cooper',displayName: 'Adam Cooper'    ,firstName:'Adam' ,lastName: 'Cooper',user: 'adam.cooper', email : 'adam.cooper@{{fqdn}}', image:'/img/adam.cooper.jpeg'},function(err, result) {});
       next();
 });
   
};

exports.down = function(db, next){
     db.collection('users', function (err, coll){
        coll.remove({email: 'arthur.brown@ms.{{fqdn}}'},function(err, result) {});
        coll.remove({email: 'jenny.bates@ms.{{fqdn}}'},function(err, result) {});
        coll.remove({email: 'john.smith@{{fqdn}}'},function(err, result) {});
        coll.remove({email: 'vikram.uddin@ms.{{fqdn}}'},function(err, result) {});
        coll.remove({email: 'sarah.wilson@ms.{{fqdn}}'},function(err, result) {});
        coll.remove({email: 'adam.cooper@{{fqdn}}'},function(err, result) {});
        next();
  });
};



