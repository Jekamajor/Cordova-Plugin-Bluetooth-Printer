var exec = require('cordova/exec');

var BTPrinter = {
   alrt: function(){
      alert('alert ok');
   },
   test: function(fnSuccess, fnError){
      exec(fnSuccess, fnError, "BluetoothPrinter", "test", ['abc']);
   },
   list: function(fnSuccess, fnError){
      exec(fnSuccess, fnError, "BluetoothPrinter", "list", []);
   },
   connect: function(fnSuccess, fnError, name){
      exec(fnSuccess, fnError, "BluetoothPrinter", "connect", [name]);
   },
   disconnect: function(fnSuccess, fnError){
      exec(fnSuccess, fnError, "BluetoothPrinter", "disconnect", []);
   },
   print: function(fnSuccess, fnError, str){
      exec(fnSuccess, fnError, "BluetoothPrinter", "print", [str]);
   },
   printText: function(fnSuccess, fnError, str){
      exec(fnSuccess, fnError, "BluetoothPrinter", "printText", [str]);
   },
    printImage: function(fnSuccess, fnError, str){
      exec(fnSuccess, fnError, "BluetoothPrinter", "printImage", [str]);
    },
   printPOSCommand: function(fnSuccess, fnError, str){
      exec(fnSuccess, fnError, "BluetoothPrinter", "printPOSCommand", [str]);
   }
};

module.exports = BTPrinter;
