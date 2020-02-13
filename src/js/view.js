define(['underscore', 'backbone.marionette'],
    function (_, Marionette) {
        return Marionette.View.extend({
            template: _.template("YOLO there from Marionette!")
        })
    });