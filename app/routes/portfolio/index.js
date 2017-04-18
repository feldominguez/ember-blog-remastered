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
            name: 'simple-blog',
            contentTitle: 'Simple Blog',
            shortText: 'API based blog application with CRUD operations and JWT authentication based on Ember.',
            detailText: '',
            currentLink: 'See Project',
            img: '/images/blog-screen.png',
            params: false
        }, {
            name: 'simple-blog',
            contentTitle: 'Simple Blog',
            shortText: 'API based blog application with CRUD operations and JWT authentication based on Ember.',
            detailText: '',
            currentLink: 'See Project',
            img: '/images/blog-screen.png',
            params: false
        }, {
            name: 'simple-blog',
            contentTitle: 'Simple Blog',
            shortText: 'API based blog application with CRUD operations and JWT authentication based on Ember.',
            detailText: '',
            currentLink: 'See Project',
            img: '/images/blog-screen.png',
            params: false
        }, ];

        return projectCards;
    }


});