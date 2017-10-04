//var modelConstructor = require("./model");

var main_schema = {
    username: { type: 'string', required: true, fallback: 'nuts' },
    first_name: { type: 'string', required: false },
    last_name: { type: 'string', required: false },
    age: { type: 'number', required: true },
    hobbies: { type: 'string', required: false },
    id: { type: 'number', required: false },
    extra_properties: false
}

main_profile_model = modelConstructor(main_schema);

//module.exports = main_profile_model