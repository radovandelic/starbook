var controller = {
    display_profile: function (id) {
        model.read(id, view.profile);
    },
    add: function (object) {
        model.create(object, view.profile);
    },
    edit: function(id){
        model.read(id, view.edit);
    },
    update: function (id, object) {
        model.update(id, object, view.profile);
    },
    delete: function (id) {
        model.remove(id, view.home);
    },
    home: function () {
        view.home(Object.assign({}, model.db));
    }
};