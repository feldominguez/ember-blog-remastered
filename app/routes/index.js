import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        var introCardsContent = [{
            sectionTitle: 'Latest Work',
            contentTitle: 'Simple Blog',
            contentText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen ',
            link: 'See Portfolio',
            other: ''
        }, {
            sectionTitle: 'Latest Blog Post',
            contentTitle: 'Learn to use helpers in Ember',
            contentText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen',
            link: 'Go to Blog',
            other: ''
        }, {
            sectionTitle: 'About Me',
            contentTitle: 'Front End Everything',
            contentText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen ',
            link: 'Get to Know Me',
            other: ''
        }];

        return introCardsContent
    }

});