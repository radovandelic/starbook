var handler = {
    init: function () {
        controller.home();
    },
    display_profile(id) {
        view.currentID = id;
        controller.display_profile(Number(id));
    },
    add: function () {
        var name = document.getElementById("name").value.trim();
        var age = Number(document.getElementById("age").value.trim());
        var hobbies = document.getElementById("hobbies").value.trim();
        var object = {
            name: name,
            age: age,
            hobbies: hobbies
        }
        error = this.prevalidate(object);
        if (error) { alert(error); }
        else { controller.add(object); }
    },
    edit: function (id) {
        controller.edit(id);
    },
    update: function (id) {
        var name = document.getElementById("name").value.trim();
        var age = Number(document.getElementById("age").value.trim());
        var hobbies = document.getElementById("hobbies").value.trim();
        var object = {
            name: name,
            age: age,
            hobbies: hobbies
        }
        error = this.prevalidate(object);
        if (error) { alert(error); }
        else { controller.update(id, object); }
        
        controller.update(id, object);
    },
    delete: function (id) {
        if (confirm("Are you sure you want to delete this profile?")) {
            controller.delete(id);
        }
    },
    prevalidate: function (object) {
        error = "";
        if (isNaN(object.age)) {
            error = "You entered an invalid age!";
        } else if (!object.name) {
            error = "The name field is mandatory";
        }
        return error;
    }
};