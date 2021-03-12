const receiveDataSchema={
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
        "dateTime": {
            "type": "string",
            "enum": [
                "2021-03-12 01:00:00",
                "2021-03-12 02:00:00",
                "2021-03-12 03:00:00",
                "2021-03-12 04:00:00",
                "2021-03-12 05:00:00",
                "2021-03-12 06:00:00",
                "2021-03-12 07:00:00",
                "2021-03-12 08:00:00",
                "2021-03-12 09:00:00",
                "2021-03-12 10:00:00",
                "2021-03-12 11:00:00"
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
                        "enum": [
                            "2021-03-12 01:00:00",
                            "2021-03-12 02:00:00",
                            "2021-03-12 03:00:00",
                            "2021-03-12 04:00:00",
                            "2021-03-12 05:00:00",
                            "2021-03-12 06:00:00",
                            "2021-03-12 07:00:00",
                            "2021-03-12 08:00:00",
                            "2021-03-12 09:00:00",
                            "2021-03-12 10:00:00",
                            "2021-03-12 11:00:00"
                        ]
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
            "minItems": 0,
            "uniqueItems": true,
            "maxItems": 9
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
