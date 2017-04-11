import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        var introCardsContent = [{
            sectionTitle: 'Recent Creation',
            contentTitle: 'Simple Blog',
            contentText: 'An API based blog with CRUD operations and JWT authentication based on Ember.',
            link: 'See Portfolio',
            other: '',
            theme: 'yellow',
            img: '/img/blog-screen.png'
        }, {
            sectionTitle: 'Latest Blog',
            contentTitle: 'Learn a Framework By Writting A Blog',
            contentText: 'Buidling a blog app to get the basics and insights of any framework',
            link: 'Go to Blog',
            theme: 'green'
        }, {
            sectionTitle: 'About Me',
            contentTitle: 'Hi I\'m Phil,',
            contentText: 'LA Based front end engineer',
            other: '',
            theme: 'blue'
        }];

        return introCardsContent
    }

});