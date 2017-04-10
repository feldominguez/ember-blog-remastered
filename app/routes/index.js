import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        var introCardsContent = [{
            sectionTitle: 'Latest Work',
            cardTitle: 'Simple Blog',
            text: '',
            follow: 'See Portfolio',
            other: ''
        }, {
            sectionTitle: 'Latest Blog Post',
            cardTitle: 'Learn to use helpers in Ember',
            text: '',
            follow: 'Go to Blog',
            other: ''
        }, {
            sectionTitle: 'About Me',
            cardTitle: 'Front End Everything',
            text: '',
            follow: 'Get to Know Me',
            other: ''
        }];

        return introCardsContent
    }

});