import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        const projectCards = [{
            name: 'simple-blog',
            contentTitle: 'Simple Blog',
            shortText: 'API based blog application with CRUD operations and JWT authentication based on Ember.',
            detailText: '',
            currentLink: 'See Project',
            img: '/images/blog-screen.png',
            params: false
        }, {
            name: 'weather-widget',
            contentTitle: 'Weather Widget',
            shortText: 'Responsive Weather Widget created with the Aeris API and Meterial-y designed.',
            detailText: '',
            currentLink: 'See Project',
            img: '/images/blog-screen.png',
            params: false
        }, {
            name: 'reddit-search',
            contentTitle: 'Reddit Search',
            shortText: 'Responsive sub-reddit search created with Handlebars.js, Reddit API, and Bootstrap.',
            detailText: '',
            currentLink: 'See Project',
            img: '/images/blog-screen.png',
            params: false
        }, {
            name: 'twitch-staus-check',
            contentTitle: 'Twitch Status Checker',
            shortText: 'Responsive Twitch TV App built with the Twitch API.',
            detailText: '',
            currentLink: 'See Project',
            img: '/images/blog-screen.png',
            params: false
        }, ];

        return projectCards;
    }


});