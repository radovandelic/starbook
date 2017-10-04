var handler = {
    init: function () {
        controller.home();
    },
    display_profile: function(id) {
        view.currentID = id;
        controller.display_profile(Number(id));
    },
    add: function () {
        var object = {};
        var schema = document.getElementsByClassName("props");
        for (var i = 0; i < schema.length; i++) {
            if (schema[i].value.trim()) { object[schema[i].id] = schema[i].value.trim(); }
        }
        /*var name = document.getElementById("name").value.trim();
        var age = document.getElementById("age").value.trim();
        var hobbies = document.getElementById("hobbies").value.trim();
        var object = {
            name: name,
            age: age,
            hobbies: hobbies
        }*/
        controller.add(object);
    },
    edit: function (id) {
        controller.edit(id);
    },
    update: function (id) {
        var object = {};
        var schema = document.getElementsByClassName("props");
        for (var i = 0; i < schema.length; i++) {
            if (schema[i].value.trim()) { object[schema[i].id] = schema[i].value.trim(); }
        }
        controller.update(Number(id), object);
    },
    delete: function (id) {
        if (confirm("Are you sure you want to delete this profile?")) {
            controller.delete(id);
        }
    }
};