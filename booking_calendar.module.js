(function (app) {
// var forms_1 = require('../../libraries/node_modules/%40booking_calendar/forms/bundles/forms.umd.js');
    app.AppModule =
        ng.core.NgModule({
            imports: [ng.platformBrowser.BrowserModule
                // , forms_1.FormsModule
            ],
            declarations: [app.AppComponent],
            bootstrap: [app.AppComponent]
        })
            .Class({
                constructor: function () {
                }
            });
})(window.app || (window.app = {}));
