import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        var introCardsContent = [{
            title: 'Latest Work',
            text: '',
            follow: 'See Portfolio',
            other: ''
        }, {
            title: 'Latest Blog Post',
            text: '',
            follow: 'Go to Blog',
            other: ''
        }, {
            title: 'About Me',
            text: '',
            follow: 'Get to Know Me',
            other: ''
        }];

        return introCardsContent
    }

});