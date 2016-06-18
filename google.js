var googleTrends = require('google-trends-api');
var prompt = require('prompt');

prompt.start();

prompt.get(['search'], function (err, result) {

    if (err) { return onErr(err); }
    
    var search = result.search;

    googleTrends.trendData(result.search,'US')
         .then(function(results){
             console.log(results);
         })
         .catch(function(err){
             console.log(err);
    });

});

var airports = [
    {"code":"DFW", "city":"Dallas"},
    {"code":"LAX", "city":"Los Angeles"}, 
    {"code":"ORD", "city":"Chicago"}, 
    {"code":"DEN", "city":"Denver"}, 
    {"code":"MCO", "city":"Orlando"}, 
    {"code":"IAH", "city":"Houston"}, 
    {"code":"MIA", "city":"Miami"}, 
    {"code":"ATL", "city":"Atlanta"}, 
    {"code":"LGA", "city":"New York"}, 
    {"code":"SEA", "city":"Seattle"}, 
    {"code":"PHX", "city":"Phoenix"}, 
    {"code":"CLT", "city":"Charlotte"}, 
    {"code":"DTW", "city":"Detroit"},
    {"code":"LAS", "city":"Las Vegas"}, 
    {"code":"EWR", "city":"New York"}, 
    {"code":"MSP", "city":"Minneapolis"}, 
    {"code":"BOS", "city":"Boston"}, 
    {"code":"PHL", "city":"Philadelphia"}, 
    {"code":"SFO", "city":"San Francisco"}, 
    {"code":"JFK", "city":"New York"},
];

// googleTrends.trendData('OJ Simpson','US')
// 	.then(function(results){
// 	    console.log(results);
// 	})
// 	.catch(function(err){
// 	    console.log(err);
// });

// googleTrends.trendData('cheap flight to New York','US')
// 	.then(function(results){
// 			console.log(results);
// 		})
// 	.catch(function(err){
// 			console.error(err);
// });

// function convertArrayOfObjectsToCSV(args) {  
//         var result, ctr, keys, columnDelimiter, lineDelimiter, data;

//         data = args.data || null;
//         if (data == null || !data.length) {
//             return null;
//         }

//         columnDelimiter = args.columnDelimiter || ',';
//         lineDelimiter = args.lineDelimiter || '\n';

//         keys = Object.keys(data[0]);

//         result = '';
//         result += keys.join(columnDelimiter);
//         result += lineDelimiter;

//         data.forEach(function(item) {
//             ctr = 0;
//             keys.forEach(function(key) {
//                 if (ctr > 0) result += columnDelimiter;

//                 result += item[key];
//                 ctr++;
//             });
//             result += lineDelimiter;
//         });

//         return result;
//     }




// for (i= 0; i < 3; i++) {


// 	console.log(airports[i].code + ':' + airports[i].city )
// 	googleTrends.trendData('cheap flight to' + airports[i].city,'US')
// 		.then(function(results){
// 			console.log(results);
// 		})
// 		.catch(function(err){
// 			console.error(err);
// 		});

// }

