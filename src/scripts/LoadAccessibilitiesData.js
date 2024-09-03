var AWS = require("aws-sdk");
var fs = require("fs");

AWS.config.update({
  region: "us-east-1",
});

console.log("Writing entries to tamil table.");

var dynamodb = new AWS.DynamoDB.DocumentClient();
var tamilData = JSON.parse(
  fs.readFileSync("../Components/data/english.json", "utf8")
);

tamilData.forEach(function (book) {
  var params = {
    TableName: "English",
    Item: {
      name: book.name,
    },
  };

  dynamodb.put(params, function (err, data) {
    if (err)
      console.error(
        "Unable to load data into table for accessibility",
        book.name,
        ". Error: ",
        JSON.stringify(err, null, 2)
      );
    else console.log("Added", book.name, "to table.");
  });
});
