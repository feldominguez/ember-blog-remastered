import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        var introCardsContent = [{
            sectionTitle: 'LATEST PROJECT',
            contentTitle: 'Simple Blog',
            contentText: 'An API based blog application with CRUD operations and JWT authentication based on Ember.',
            link: 'See All Projects',
            other: '',
            theme: 'yellow',
            img: '/images/blog-screen.png',
            state: 'login',
            params: false
        }, {
            sectionTitle: 'LAST BLOG',
            contentTitle: 'Learn a Framework By Writting A Blog',
            contentText: 'Buidling a blog app to get the basics and insights of any framework',
            link: 'Go to Blog',
            theme: 'green',
            img: 'http://i.imgur.com/FaP3aA1.png',
            state: 'blog.post',
            params: 75
        }, {
            sectionTitle: 'ABOUT ME',
            contentTitle: 'Hi I\'m Phil,',
            contentText: 'LA Based front end engineer',
            other: '',
            link: 'Learn More',
            theme: 'blue',
            img: 'http://i.imgur.com/GKPMjkr.jpg',
            state: 'blog',
            params: false
        }];

        return introCardsContent
    }

});