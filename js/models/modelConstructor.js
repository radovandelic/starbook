function modelConstructor(schema) {
    var newModel = Object.create(modelConstructor.prototype);
    newModel.db = {};
    newModel.id = 0;
    newModel.schema = schema;
    return newModel;
};

modelConstructor.prototype = {
    // pass object to validate
    // if successful, add ID, push to db, execute callback with no error
    // if not successful, execute callback with error message
    create: function (new_object, callback) {
        var error = this.validate(new_object);
        if (!error) {
            new_object.id = this.id;
            this.db[this.id] = new_object;
            this.id++;
        }
        callback(error, new_object);
    },
    read: function (entry_id, callback) {
        var error = false;
        if (this.db[entry_id] == undefined) {
            error = "Error: requested object does not exist.";
        }
        callback(error, this.db[entry_id]);
    },
    update: function (entry_id, new_value, callback) {
        var error = this.validate(new_value);
        if (!error) {
            if (this.db[entry_id] != undefined) {
                new_value.id = entry_id;
                this.db[entry_id] = new_value;
            }
            else { error = "Error: object with the ID #" + entry_id + " does not exist." }
        }
        callback(error, this.db[entry_id]);
    },
    remove: function (entry_id, callback) {
        delete this.db[entry_id];
        callback("Object #" + entry_id + " removed.", this.db, this.schema);
    },
    log: function (error, object) {
        if (error) {
            console.log(error);
        } else {
            console.log(object);
        }
    },
    validate: function (object) {
        var error = "";
        for (var key in object) {
            if (object[key] && !isNaN(object[key])) { object[key] = Number(object[key]); }

            if (this.schema[key] == undefined) {
                error += "Error: object contains illegal extra parameters.\n"
            } else if (!object[key]) {
                if (this.schema[key].required) {
                    error += "Error: the " + key + " field is mandatory.\n";
                    //object[key] = this.schema[key].fallback;
                }
            } else if (typeof (object[key]) != this.schema[key].type) {
                error += "Error: you entered an invalid " + key + ".\n";
                //object[key] = this.schema[key].fallback;
            }
        }
        for (var key in this.schema) {
            if (this.schema[key].required && object[key] == undefined) {
                error += "Error: you have not entered your " + key + ".\n";
            }
        }
        return error;
    },
    search: function (query) {
        id = 0;
        var result = {};
        for (var id in this.db) {
            for (var key in this.db[id]) {
                if (query.include && (query.key == key && query.value == this.db[id][key])) {
                    result[id] = this.db[id];
                    id++;
                } else if (!query.include && query.value != this.db[id][key]) {
                    result[id] = this.db[id];
                    id++;
                }
            }
        }
        return result;
    },
    get_schema: function () {
        var text = "schema:"
        for (var property in this.schema) {
            text += "\n\t" + property + ": ";
            if (typeof (this.schema[property]) == "object") {
                for (var key in this.schema[property]) {
                    text += "\n\t\t" + key + ": " + JSON.stringify(this.schema[property][key]);
                }
            } else {
                text += this.schema[property];
            }
        }
        return text;
    },
    set_schema: function (property, key, value) {
        this.schema[property][key] = value;
    }
};

//Object.assign(modelConstructor.prototype, model);
/*
modelConstructor.prototype = {
    create: model.create,
    read: model.read,
    update: model.update,
    remove: model.remove,
    validate: model.validate,
    get_schema: model.get_schema,
    set_schema: model.set_schema
});*/

//module.exports = modelConstructor