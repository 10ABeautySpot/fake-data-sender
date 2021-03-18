const receiveDataSchema={
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
        "dateTime": {
            "type": "string",
            "pattern": "2021-0[1-9]-[0-2][1-9] [0-1][1-9]:00:00"
        },
        "dateType": {
            "type": "number",
            "enum": [
                0,//min
                1,//hour,
                2//day
            ]
        },
        "items": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string",
                        "enum": [
                            "no2",
                            "so2"
                        ]
                    },
                    "dateTime": {
                        "type": "string",
                        "pattern": "2021-0[1-9]-[0-2][1-9] [0-1][1-9]:00:00"
                    },
                    "status": {
                        "type": "string"
                    },
                    "value": {
                        "type": "number",
                        "minimum": 0,
                        "maximum": 1000
                    }
                },
                "required": [
                    "code",
                    "dateTime",
                    "status",
                    "value"
                ]
            },
            "minItems": 6,
            "uniqueItems": true,
            "maxItems": 6
        },
        "monitorEquipmentNumber": {
            "type": "string",
            "enum": [
                "00001",
                "00002"
            ]
        }
    },
    "required": [
        "dateTime",
        "items",
        "monitorEquipmentNumber"
    ]
};
module.exports={receiveDataSchema}
