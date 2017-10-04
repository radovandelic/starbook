var controller = {
    display_profile: function (id) {
        model["main_profile"].read(id, view.profile);
    },
    add: function (object) {
        var thumb_object = {};
        for (var key in model.thumb_profile.schema) {
            if(key != "extra_properties"){
                thumb_object[key] = object[key];
            }
        }
        model.thumb_profile.create(thumb_object, model.thumb_profile.log);
        model.main_profile.create(object, view.profile);
    },
    edit: function (id) {
        model["main_profile"].read(id, view.edit);
    },
    update: function (id, object) {
        model["main_profile"].update(id, object, view.profile);
    },
    delete: function (id) {
        model.thumb_profile.remove(id, model.thumb_profile.log);
        model.main_profile.remove(id, view.home);
    },
    home: function () {
        view.home(false, model.thumb_profile.db, model["main_profile"].schema);
    }
};