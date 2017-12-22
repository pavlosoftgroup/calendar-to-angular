(function (app) {
    Drupal.behaviors.booking_calendar = {
        attach: function (context, settings) {
            var xhr = new XMLHttpRequest();
            drupalDelete = function (userId) {
                xhr.open('GET', '/booking_calendar2/delete/' + userId, true);
                xhr.send();
                console.log(xhr.responseText);
            };
            drupalRename = function (userId, newName) {
                xhr.open('GET', '/booking_calendar2/rename/' + userId + '/' + newName, true);
                xhr.send();
                console.log(xhr.responseText);
            }


        }
    };
    // console.log(app.AppComponent.text);
    app.AppComponent =
        ng.core.Component({
            // moduleId: module.id,
            selector: 'my-app',
            templateUrl: './sites/all/modules/booking_calendar/booking_calendar.component.html',
            styleUrls: ['./sites/all/modules/booking_calendar/booking_calendar.component.css']

        })
            .Class({
                constructor: function () {
                    this.renameVal = true;
                    // this.name = Drupal.settings.booking_calendar.name;
                    // this.email = Drupal.settings.booking_calendar.mail;
                    this.userst = Array(Drupal.settings.users);
                    this.users = this.userst;
                    console.log(this.users[0]);
                    var usersArray = [];
                    for (var key in this.users[0]) {
                        var user = this.users[0][key];
                        user.renameVal = true;
                        console.log(user);
                        usersArray.push(user);
                    }
                    this.users = usersArray;

                    this.setDelete = function (user) {
                        this.index = this.users.indexOf(user);
                        this.users.splice(this.index, 1);
                        drupalDelete(user.uid);
                    };
                    this.setRename = function (user) {
                        user.renameVal = !user.renameVal;

                    };
                    this.getRename = function (user, newName) {
                        // drupalRename(user.uid,newName);
                        console.log(newName);
                        console.log(user);
                        user.name = newName;
                        user.renameVal = !user.renameVal;
                    }
                }
            });
})(window.app || (window.app = {}));