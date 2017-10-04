var view = {
    profile: function (error, profile_object) {
        if (error) {
            alert(error);
        } else {
            c = document.getElementById("container");
            c.innerHTML = "";
            for (var key in profile_object) {
                if (key != "id" && profile_object[key]) {
                    var prop = document.createElement("p");
                    prop.innerHTML = key[0].toUpperCase() + key.slice(1) + ": " + profile_object[key];
                    c.appendChild(prop);
                }
            }
            var button = document.createElement("button");
            button.setAttribute("id", profile_object.id);
            button.setAttribute("class", "inline");
            button.setAttribute("onclick", "handler.edit(this.id);");
            button.innerHTML = "Edit";
            c.appendChild(button);
            button = document.createElement("button");
            button.setAttribute("id", profile_object.id);
            button.setAttribute("class", "inline");
            button.setAttribute("onclick", "handler.delete(this.id);");
            button.innerHTML = "Delete";
            c.appendChild(button);
        }
    },
    home: function (error, objects, schema) {
        if (error) {
            alert(error);
        }
        var c = document.getElementById("container");
        c.innerHTML = "";
        var br = "<br>";
        for (var id in objects) {
            var profile = document.createElement("div");
            profile.setAttribute("class", "inline");
            for (var key in objects[id]) {
                if (key != "id") {
                    var prop = document.createElement("p");
                    prop.innerHTML = key[0].toUpperCase() + key.slice(1) + ": " + objects[id][key] + br;
                    profile.appendChild(prop);
                }
            }
            var btn = document.createElement("button");
            btn.setAttribute("class", "btn-primary");
            btn.setAttribute("onclick", "handler.display_profile(this.id)");
            btn.setAttribute("id", id);
            btn.innerHTML = "Go to profile";
            profile.appendChild(btn);
            c.appendChild(profile);
            c.innerHTML += "&nbsp;&nbsp;&nbsp;"
        }
        c.innerHTML += br + br;
        var add = document.createElement("table");
        for (var key in schema) {
            if (schema[key]) {
                var tr = document.createElement("tr");
                var td1 = document.createElement("td");
                var td2 = document.createElement("td");
                var label = document.createElement("label");
                label.innerHTML = key[0].toUpperCase() + key.slice(1) + ": &nbsp;";
                var input = document.createElement("input");
                input.setAttribute("type", "text");
                input.setAttribute("id", key);
                input.setAttribute("class", "props");
                td1.appendChild(label);
                td2.appendChild(input);
                tr.appendChild(td1);
                tr.appendChild(td2);
                add.appendChild(tr);
                add.innerHTML += br;
            }
        }
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
            for (var key in profile_object) {
                if (key != "id") {
                    var tr = document.createElement("tr");
                    var td1 = document.createElement("td");
                    var td2 = document.createElement("td");
                    var label = document.createElement("label");
                    label.innerHTML = key[0].toUpperCase() + key.slice(1) + ": &nbsp;";
                    var input = document.createElement("input");
                    input.setAttribute("type", "text");
                    input.setAttribute("id", key);
                    input.setAttribute("class", "props");
                    input.defaultValue = (profile_object[key]) ? profile_object[key] : "";
                    td1.appendChild(label);
                    td2.appendChild(input);
                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    edit.appendChild(tr);
                    edit.innerHTML += br;
                }
            }
            var button = document.createElement("button");
            button.setAttribute("id", profile_object.id);
            button.setAttribute("onclick", "handler.update(this.id);");
            button.innerHTML = "Update profile";
            edit.appendChild(button);
            c.appendChild(edit);
        }
    }
};