import BaseView from './baseView';

var two = BaseView.extend({
    
    initialize: function() {

    },

    events: {

    },

    render: function() {

        var template = JST['client/templates/two.hbs'];
        this.$el.html(template);
    },

    transitionIn: function(callback) {
        

        TweenLite.fromTo(this.$('h1'), .5, {
            x: -100,
            autoAlpha: 0
        }, {
            x: 0,
            autoAlpha: 1,
            ease: 'easeOutExpo'
        });

    },
    transitionOut: function(callback) {

        var self = this;

         TweenLite.to(this.$('h1'), .5, {
            x: 100,
            autoAlpha: 0,
            ease:'easeInExpo',
            onComplete: function(){
                callback();
                
            }
        });

    },

    hide: function() {

        this.$el.hide();
    },

    show: function() {
        this.$el.show();
    }

});

export default two;
