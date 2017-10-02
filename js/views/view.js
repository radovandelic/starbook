var view = {
    profile: function (error, profile_object) {
        c = document.getElementById("container");
        c.innerHTML = "";
        if (error) {
            c.innerHTML = error;
        } else {
            var name = document.createElement("p");
            name.innerHTML = "Name: " + profile_object.name;
            var age = document.createElement("p");
            age.innerHTML = "Age: " + profile_object.age;
            var hobbies = document.createElement("p");
            hobbies.innerHTML = "Age: " + profile_object.hobbies;
            c.appendChild(name);
            c.appendChild(age);
            c.appendChild(hobbies);
            var button = document.createElement("button");
            button.setAttribute("class", "inline");
            button.setAttribute("onclick", "handler.edit(" + profile_object.id + ");");
            button.innerHTML = "Edit";
            c.appendChild(button);
            button = document.createElement("button");
            button.setAttribute("class", "inline");
            button.setAttribute("onclick", "handler.delete(" + profile_object.id + ");");
            button.innerHTML = "Delete";
            c.appendChild(button);
        }
    },
    home: function (objects) {
        var c = document.getElementById("container");
        c.innerHTML = "";
        var br = "<br>";
        for (var id in objects) {
            var profile = document.createElement("div");
            profile.setAttribute("class", "inline");
            var name = document.createElement("p");
            name.innerHTML = "Name: " + objects[id].name + br;
            var age = document.createElement("p");
            age.innerHTML = "Age: " + objects[id].age;
            var btn = document.createElement("button");
            btn.setAttribute("class", "btn-primary");
            btn.setAttribute("onclick", "handler.display_profile(this.id)");
            btn.setAttribute("id", id);
            btn.innerHTML = "Go to profile";
            profile.appendChild(name);
            profile.appendChild(age);
            profile.appendChild(btn);
            c.appendChild(profile);
            c.innerHTML += "&nbsp;&nbsp;&nbsp;"
        }
        c.innerHTML += br + br;
        var add = document.createElement("table");
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var label = document.createElement("label");
        label.innerHTML = "Name: &nbsp;"
        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", "name");
        td1.appendChild(label);
        td2.appendChild(input);
        tr.appendChild(td1);
        tr.appendChild(td2);
        add.appendChild(tr);
        add.innerHTML += br;
        tr.innerHTML = "";
        td1.innerHTML = "";
        td2.innerHTML = "";
        label = document.createElement("label");
        label.innerHTML = "Age: &nbsp;"
        input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", "age");
        td1.appendChild(label);
        td2.appendChild(input);
        tr.appendChild(td1);
        tr.appendChild(td2);
        add.appendChild(tr);
        add.innerHTML += br;
        tr.innerHTML = "";
        td1.innerHTML = "";
        td2.innerHTML = "";
        label = document.createElement("label");
        label.innerHTML = "Hobbies: &nbsp;"
        input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", "hobbies");
        td1.appendChild(label);
        td2.appendChild(input);
        tr.appendChild(td1);
        tr.appendChild(td2);
        add.appendChild(tr);
        add.innerHTML += br;
        tr.innerHTML = "";
        td1.innerHTML = "";
        td2.innerHTML = "";
        var button = document.createElement("button");
        button.setAttribute("onclick", "handler.add();");
        button.innerHTML = "Create new profile";
        add.appendChild(button);
        c.appendChild(add);
    },
    edit: function (error, profile_object) {
        br = "<br>";
        c = document.getElementById("container");
        c.innerHTML = "";
        if (error) {
            c.innerHTML = error;
        } else {
            var edit = document.createElement("table");
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            var label = document.createElement("label");
            label.innerHTML = "Name: &nbsp;"
            var input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("id", "name");
            input.defaultValue = profile_object.name;
            td1.appendChild(label);
            td2.appendChild(input);
            tr.appendChild(td1);
            tr.appendChild(td2);
            edit.appendChild(tr);
            edit.innerHTML += br;
            tr.innerHTML = "";
            td1.innerHTML = "";
            td2.innerHTML = "";
            label = document.createElement("label");
            label.innerHTML = "Age: &nbsp;"
            input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("id", "age");
            input.defaultValue = profile_object.age;
            td1.appendChild(label);
            td2.appendChild(input);
            tr.appendChild(td1);
            tr.appendChild(td2);
            edit.appendChild(tr);
            edit.innerHTML += br;
            tr.innerHTML = "";
            td1.innerHTML = "";
            td2.innerHTML = "";
            label = document.createElement("label");
            label.innerHTML = "Hobbies: &nbsp;"
            input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("id", "hobbies");
            input.defaultValue = profile_object.hobbies;
            td1.appendChild(label);
            td2.appendChild(input);
            tr.appendChild(td1);
            tr.appendChild(td2);
            edit.appendChild(tr);
            edit.innerHTML += br;
            tr.innerHTML = "";
            td1.innerHTML = "";
            td2.innerHTML = "";
            var button = document.createElement("button");
            button.setAttribute("id", profile_object.id);
            button.setAttribute("onclick", "handler.update(this.id);");
            button.innerHTML = "Update profile";
            edit.appendChild(button);
            c.appendChild(edit);
        }
    }
};