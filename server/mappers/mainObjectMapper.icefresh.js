//Author : Rifhan 
"use strict"

//TODO: else queue as mapping object to a job
const tempDataDump = require('../orders');
const iceFreshExternalApi = require('../controllers/communication-handler/external.apis');
const logger = require('../utils/logger');
const keyMaps = require('../mappers/mainObject');
const mongoose = require('mongoose');
let finalOrdersArray = [];


module.exports.mapIceFreshOrderObjects = function(){
    return new Promise((resolve,reject) => {
        let db = mongoose.connection;
        let c = 0;
        let dbInstance = mongoose.model('order');
        iceFreshExternalApi.getAllIcefreshOrders().then((success) => {
            success.map((object) => {
                let tempObject = object; 
                keyMaps.keysNeededToMap.map((value) => {
                    try{
                        if(object.hasOwnProperty(value.key)){                   
                            let dbObject = new dbInstance(tempObject);
                            dbObject.save(function (err,product,numAffected){
                                if(!err){
                                    finalOrdersArray.push(tempObject);
                                    c++;
                                    console.log(c);
                                }         
                            }); 
                        }else{
                            let orderSource = tempObject[keyMaps.orderSource].toLowerCase();
                            let keyValue = `${orderSource}${value.value}`
                            tempObject[value.key] = object[keyValue];
                            let dbObject = new dbInstance(tempObject);
                            
                            dbObject.save(function (err,product,numAffected){
                                if(!err){
                                    finalOrdersArray.push(tempObject);
                                    c++;
                                    console.log(c);                               
                                }            
                            }); 
                        }   
                    }catch(exception){
                        console.log(exception);
                        logger.log("error","error in mapping order objects",{stack:exception.stack});
                        throw "unable map object";
                    }  
                });
            });  
            return resolve({status : true});
        },(error) => {
            logger.log("error","error in retrieving icefresh order data to process",{stack:error.stack});
            return reject({status : false});
        }).catch((exception) => {
            logger.log("error","error in retrieving icefresh order data to process",{stack:exception.stack});
            return reject({status : false});
        });
    });
}
