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
            img: '/images/blog-screen.png',
            state: 'blog'
        }, {
            sectionTitle: 'Latest Blog',
            contentTitle: 'Learn a Framework By Writting A Blog',
            contentText: 'Buidling a blog app to get the basics and insights of any framework',
            link: 'Go to Blog',
            theme: 'green',
            img: 'http://i.imgur.com/FaP3aA1.png',
            state: 'blog'
        }, {
            sectionTitle: 'About Me',
            contentTitle: 'Hi I\'m Phil,',
            contentText: 'LA Based front end engineer',
            other: '',
            link: 'Learn More',
            theme: 'blue',
            img: 'http://i.imgur.com/GKPMjkr.jpg',
            state: 'blog'
        }];

        return introCardsContent
    }

});