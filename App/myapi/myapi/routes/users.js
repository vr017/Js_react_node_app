const fetch   = require('node-fetch');
var express   = require('express');
var router    = express.Router();

const serverUrl     = 'https://sandbox.2600hz.com:8443/v2';
const credentials   = 'NDY0MmU2NDA0MGNkYjhiODljMzEwYTIxYTA3YzdmNjI6MjMyNjQxNTY1OTA3NWU3NTAwMGNlY2Q3YmNiZjM3NTY=';
const accountId     = '4642e64040cdb8b89c310a21a07c7f62'
const vmBoxId       = 'b37675a2d7b90d60f0ee5d4175502394'

/* GET users listing. */
router.get('/', function(req, res, next) {
  /* 
  const requestUrl    = `${serverUrl}/accounts/${accountId}/vmboxes/${vmBoxId}/messages?paginate=true`;
  const headers = {
      //Authorization:  `Bearer ${credentials}`
      "X-Auth-Token": credentials
  };
  
  fetch(requestUrl, { headers }).
      then(response => response.json()).
      then(({ data }) => data).
      then(console.table).
      catch(console.log)
  */
  
  let dataArray = [
      {
          "0e820108c0f4ca391500f3be1b02bdfa": {
              "timestamp": 63630058722,
              "from": "1001@aeac33.sip.2600hz.com",
              "to": "1000@aeac33.sip.2600hz.com",
              "caller_id_number": "1001",
              "caller_id_name": "userb userb",
              "call_id": "79959ZDNmM2I5ZTliMzA0NzA4N2FjNjlmODA5OWVkZjUxZWU",
              "folder": "new",
              "length": 3140,
              "media_id": "201605-6aadef09f6fcf5fd8bcdfca312e923ba"
          }
      },
      {
          "0e820108c0f4ca391500f3be1b02bdfa": {
              "timestamp": 63630058413,
              "from": "1002@aeac33.sip.2600hz.com",
              "to": "1000@aeac33.sip.2600hz.com",
              "caller_id_number": "1002",
              "caller_id_name": "userd userd",
              "call_id": "79959MmNiMmJiMTIxODhjZjk0ZDhmOGNkMjJkN2MwNGQyNWY",
              "folder": "save",
              "length": 5500,
              "media_id": "201605-f0c3c16551a5ff7b5753a381892e2e01"
          }
      }
  ];
  
  res.json ({
    data: dataArray
  });

});

module.exports = router;