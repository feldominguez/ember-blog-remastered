import Ember from 'ember';

export default Ember.Route.extend({
    model: function(projectParam) {
        const projectCards = [{
            name: 'simple-blog',
            contentTitle: 'Simple<br>Blog',
            shortText: 'API based blog application with CRUD operations and JWT authentication based on Ember.',
            liveProject: 'https://google.com',
            currentLink: 'See Project',
            img: 'https://i.imgur.com/a84juZn.png',
            params: false,
            projectTech: ['CSS', 'JS', 'jQuery', 'HTML', 'EMBER']
        }, {
            name: 'weather-widget',
            contentTitle: 'Weather<br>Widget',
            shortText: 'Responsive Weather Widget created with the Aeris API and Meterial-y designed.',
            liveProject: 'https://google.com',
            currentLink: 'See Project',
            img: 'http://i.imgur.com/UtZxCMG.png',
            params: false
        }, {
            name: 'reddit-search',
            contentTitle: 'Reddit Search',
            shortText: 'Responsive sub-reddit search created with Handlebars.js, Reddit API, and Bootstrap.',
            liveProject: 'https://google.com',
            currentLink: 'See Project',
            img: 'http://i.imgur.com/VjR28iU.png',
            params: false
        }, {
            name: 'twitch-staus-check',
            contentTitle: 'Twitch Status Checker',
            shortText: 'Responsive Twitch TV App built with the Twitch API.',
            liveProject: 'https://google.com',
            currentLink: 'See Project',
            img: 'http://i.imgur.com/V86LCEd.png',
            params: false
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