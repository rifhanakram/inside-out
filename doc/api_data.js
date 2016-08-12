define({ "api": [
  {
    "type": "get",
    "url": "/avg-amount-spent-per-city",
    "title": "Average amount spent per city per order source",
    "name": "AverageAmountSpent",
    "group": "Analytics",
    "description": "<p>Get data on average amount spent per city per order source. Data has been structured specifically for d3 graphs</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>If the calculations were successful or not</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "message",
            "description": "<p>An object containing all the required data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"status\": true,\n\t\"message\": {\n\t\t'orderSource' : {\n\t\t\t'city' : '...',\n\t\t\t'average': '...'\n\t\t} \n\t}\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/controllers/api.js",
    "groupTitle": "Analytics"
  },
  {
    "type": "get",
    "url": "/purchases-by-days",
    "title": "Get data for total purchase amount for every day of the week",
    "name": "PurchasesByDay",
    "group": "Analytics",
    "description": "<p>Get data on average amount spent per city per order source. Data has been structured specifically for d3 graphs</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>If the calculations were successful or not</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "message",
            "description": "<p>An object containing all the required data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"status\": true,\n\t\"message\": {\n\t\t\"sunday\": 1456,\n\t\t\"monday\": 4321,\n\t\t... \n\t}\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/controllers/api.js",
    "groupTitle": "Analytics"
  }
] });
