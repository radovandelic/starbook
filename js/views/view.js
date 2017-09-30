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
            c.appendChild(hobbies);/*
            var button = document.createElement("button");
            button.setAttribute("class", "inline");
            button.setAttribute("onclick", "handler.edit(this.id)");*/
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
    }
}