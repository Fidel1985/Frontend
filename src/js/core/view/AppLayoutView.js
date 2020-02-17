define(
    [
        'text!js/core/template/AppLayoutTemplate.html',
        'backbone.marionette'
    ], function (template, Marionette) {
        return Marionette.View.extend({
            el : '[data-view]',
            template : _.template(template),
            regions: {
                headerRegion: '[data-header-region]',
                notificationRegion: '[data-notification-region]',
                mainRegion: '[data-main-region]',
                footerRegion: '[data-footer-region]'
            }
        });
    });
