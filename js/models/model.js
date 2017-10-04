//var modelConstructor = require("./model");
var model = { 
    main_schema: {
       username: { type: 'string', required: true, fallback: 'nuts' },
       first_name: { type: 'string', required: false },
       last_name: { type: 'string', required: false },
       age: { type: 'number', required: true },
       hobbies: { type: 'string', required: false },
       id: false,
       extra_properties: false
   },
   thumb_schema: {
       username: { type: 'string', required: true, fallback: 'nuts' },
       age: { type: 'number', required: false },
       id: false,
       extra_properties: false
   }
};              
model.main_profile = modelConstructor(model.main_schema);
model.thumb_profile = modelConstructor(model.thumb_schema);
model.main_schema = undefined;
model.thumb_schema = undefined;

//module.exports = model

