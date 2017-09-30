var handler = {
    init: function () {
        controller.home();
    },
    display_profile(id) {
        controller.display_profile(Number(id));
    },
    add: function () {
        var name = document.getElementById("name").value.trim();
        var age = Number(document.getElementById("age").value.trim());
        var hobbies = document.getElementById("hobbies").value.trim();
        if (isNaN(age)) {
            alert("You entered an invalid age!");
        } else if (!name) {
            alert("The name field is mandatory");
        }
        else if (name) {
            var object = {
                name: name,
                age: age,
                hobbies: hobbies
            }
            controller.add(object);
        }
    }
}