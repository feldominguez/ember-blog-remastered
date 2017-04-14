import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        var introCardsContent = [{
            sectionTitle: 'LATEST PROJECT',
            contentTitle: 'Simple Blog',
            contentText: 'API based blog application with CRUD operations and JWT authentication based on Ember.',
            currentLink: 'See Project',
            link: 'See All Projects',
            other: '',
            theme: 'yellow',
            img: '/images/blog-screen.png',
            state: 'blog',
            params: false
        }, {
            sectionTitle: 'LAST BLOG',
            contentTitle: 'Learn a Framework By Writting A Blog',
            contentText: 'In this last blog I talk about building a blog application to get the basics and insights of any framework.',
            currentLink: 'Read Post',
            link: 'Go to Blog',
            theme: 'green',
            img: 'http://i.imgur.com/FaP3aA1.png',
            state: 'blog.post',
            params: 75
        }, {
            sectionTitle: 'ABOUT ME',
            contentTitle: 'Hi I\'m Phil,',
            contentText: 'LA based engineer focused on the UI and Front-End of Applications. Rookie basketball player and strong soccer competency. A film fanatic with a knack for science fiction.',
            currentLink: '',
            other: '',
            link: 'Learn More',
            theme: 'blue hide-link-after',
            img: 'http://i.imgur.com/GKPMjkr.jpg',
            state: 'index',
            params: false
        }];

        return introCardsContent;
    }

});