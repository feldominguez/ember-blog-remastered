import Ember from 'ember';

export default Ember.Route.extend({
    model: function(projectParam) {
        const projectCards = [{
            name: 'simple-blog',
            contentTitle: 'Simple Blog',
            shortText: 'API based blog application with CRUD operations and JWT authentication based on Ember.',
            detailText: '',
            currentLink: 'See Project',
            img: '/images/blog-screen.png',
            state: 'simple-blog',
            params: false,
            project: 'simple-blog',
        }, {
            name: 'simple-blog',
            contentTitle: 'Simple Blog',
            shortText: 'API based blog application with CRUD operations and JWT authentication based on Ember.',
            detailText: '',
            currentLink: 'See Project',
            img: '/images/blog-screen.png',
            state: 'simple-blog',
            params: false,
            project: 'simple-blog',
        }, {
            name: 'simple-blog',
            contentTitle: 'Simple Blog',
            shortText: 'API based blog application with CRUD operations and JWT authentication based on Ember.',
            detailText: '',
            currentLink: 'See Project',
            img: '/images/blog-screen.png',
            state: 'simple-blog',
            params: false,
            project: 'simple-blog',
        }, {
            name: 'simple-blog',
            contentTitle: 'Simple Blog',
            shortText: 'API based blog application with CRUD operations and JWT authentication based on Ember.',
            detailText: '',
            currentLink: 'See Project',
            img: '/images/blog-screen.png',
            state: 'simple-blog',
            params: false,
            project: 'simple-blog',
        }, ];


        let project = projectCards.reduce((targetProject, currentProject) => {
            if (currentProject.name == projectParam.project) {
                targetProject = currentProject;
            }
            return targetProject;
        }, {});

        return project;
    }
});