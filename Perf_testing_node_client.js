'use strict'

//jsdom necessary for window to use jQuery in node
require("jsdom").env("", function(err, window) {
    
    //record error from using jsdom
    if (err) {
        console.error(err);
        return;
    }
    
    //create window to use jQuery
    var $ = require("jquery")(window);
    
    //create array to store latency
    var latency = [];
    
    //Create variables to be used globally
    var count = 0;
    var Total_count = 10.000; //Change total count
    var start;
    var end;
    var Interval_time = 50; //In milliseconds
    var Avg_now=0;
    var Avg_total;
    
    //Set interval function and duration
    var timerID = window.setInterval(rec_sec, Interval_time);
   
    
    
      function rec_sec(){
          
            start = Date.now();
            //Make an GET ajax call to server
            $.ajax({
                type:'GET',
                url:'http://ec2-52-38-121-10.us-west-2.compute.amazonaws.com/',
                //data: "hello",
                //dataType: 'text/plain',
                //contentType:"Accept",
                //response data
                
                success: function(data){
                    //console.log(data);
                    end = Date.now();
                    latency[count] = end-start;
                    if(checkCount()){
                        window.clearInterval(timerID);
                        latency.forEach(printLatency);
                    }
                },
                //error handling
                error: function (xhr, status) {
                    console.log(xhr);
                    console.log(status);
                }
            });
          
          /*
          function checkCount(){
              count = count + 1;
                //Exit loop if count is equal to 10
                if(count >= Total_count){
                    window.clearInterval(timerID);
                    //Run function to print latency after conclusion of requests
                    latency.forEach(printLatency);
                    return;
                }
          }*/
            
          
        }
    
          function checkCount(){
              count = count + 1;
                //Exit loop if count is equal to 10
                if(count >= Total_count){
                    return true;
                    //window.clearInterval(timerID);
                    //Run function to print latency after conclusion of requests
                    //latency.forEach(printLatency);
                }
              return false;
          }
        
        //Latency print function
        function printLatency(item, index){
            Avg_now = Avg_now + item;
            Avg_total = Avg_now/Total_count;
            if(index+1 === Total_count){
                console.log(Avg_total);
                console.log(Avg_now);
             }
        }
});


