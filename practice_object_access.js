const wiredAccounts =
{
    "data": [
        {
            "Id": "001Dm0000042hhTIAQ",
            "Name": "Acc1",
            "AnnualRevenue": 1000000
        },
        {
            "Id": "001Dm00000BNUqeIAH",
            "Name": "GenePoint",
            "AnnualRevenue": 30000000
        }
    ] ,
    "error" : undefined
}

// console.log(wiredAccounts.data); 
// console.log(wiredAccounts.error); 

//console.log(wiredAccounts); 
// Turn your javascript object to String
// JSON.stringify( yourObjectHere)

// this will print String version of the object without pretty format
console.log(JSON.stringify(wiredAccounts)); 
// in order to get pretty version of string we use 
// // JSON.stringify( yourObjectHere, null, 2)
console.log( JSON.stringify(wiredAccounts, null, 2)     ); 