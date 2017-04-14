import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        const introCardsContent = [{
            link: 'simple-blog',
            contentTitle: 'Simple Blog',
            shortText: 'API based blog application with CRUD operations and JWT authentication based on Ember.',
            detailText: '',
            currentLink: 'See Project',
            linsk: 'See All Projects',
            other: '',
            theme: 'yellow',
            img: '/images/blog-screen.png',
            state: 'simple-blog',
            params: false
        }];

        return introCardsContent;
    }
});