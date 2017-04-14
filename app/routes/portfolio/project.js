import Ember from 'ember';

export default Ember.Route.extend({
    model: function(projectParam) {
        const introCardsContent = [{
            name: 'simple-blog',
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
            params: false,
            project: 'simple-blog',
        }];


        let project = introCardsContent.reduce((targetProject, currentProject) => {
            if (currentProject.name == projectParam.project) {
                targetProject = currentProject;
            }
            return targetProject;
        }, {});

        return project;
    }
});