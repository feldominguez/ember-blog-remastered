import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        var introCardsContent = [{
            sectionTitle: 'Recent Creation',
            contentTitle: 'Simple Blog',
            contentText: 'An API based blog with CRUD operations and JWT authentication based on Ember.',
            link: 'See Portfolio',
            other: '',
            theme: 'yellow'
        }, {
            sectionTitle: 'Latest Blog',
            contentTitle: 'Learn a Framework By Writting A Blog',
            contentText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen',
            link: 'Go to Blog',
            theme: 'green'
        }, {
            sectionTitle: 'About Me',
            contentTitle: 'Hi I\'m Phil,',
            contentText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen ',
            link: 'Know Some More',
            other: '',
            theme: 'blue'
        }];

        return introCardsContent
    }

});