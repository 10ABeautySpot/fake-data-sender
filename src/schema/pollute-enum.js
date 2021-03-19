const pollSchemaConfig = [{
    code: "no2",
    min: "0",
    max: "200",
}, {
    code: "co",
    min: "0",
    max: "10",
}, {
    code: "pm10",
    min: "0",
    max: "600",
}, {
    code: "pm2p5",
    min: "0",
    max: "500",
}, {
    code: "o3",
    min: "0",
    max: "300",
}, {
    code: "so2",
    min: "0",
    max: "150",
}
]

const generatePollSchema = (code) => {
    let config = pollSchemaConfig.find(a => a.code === code);
    return {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
            "code": {
                "type": "string",
                "const": code
            },
            "value": {
                "type": "number",
                "minimum": config.min,
                "maximum": config.max
            },
        },
        "required": [
            "code",
            "value"
        ]
    }
}
module.exports = {generatePollSchema}
