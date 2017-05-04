import Ember from 'ember';

export default Ember.Route.extend({
    model: function(projectParam) {
        const projectCards = [{
            name: 'simple-blog',
            contentTitle: 'Simple<br>Blog',
            shortText: 'API based blog application with CRUD operations and JWT authentication based on Ember.',
            liveProject: 'https://phil.surge.sh/blog',
            codepen: '',
            github: 'https://github.com/philgetz/ember-blog-remastered',
            currentLink: 'See Project',
            img: 'https://i.imgur.com/a84juZn.png',
            params: false,
            projectTech: ['EmberJS', 'Node/ExpressJS', 'SASS', 'HTML', 'JavaScript/ES6', 'jQuery']
        }, {
            name: 'weather-widget',
            contentTitle: 'Weather<br>Widget',
            shortText: 'Responsive Weather Widget created with the Aeris API and Meterial-y designed.',
            liveProject: 'https://philgetz.github.io/material-weather-widget/',
            codepen: 'https://codepen.io/philgetz/pen/kXxxPb',
            github: 'https://github.com/philgetz/material-weather-widget',
            currentLink: 'See Project',
            img: 'http://i.imgur.com/UtZxCMG.png',
            params: false,
            projectTech: ['Aeris API', 'JavaScript', 'jQuery', 'HTML', 'CSS']
        }, {
            name: 'reddit-search',
            contentTitle: 'Reddit Search',
            shortText: 'Responsive sub-reddit search created with Handlebars.js, Reddit API, and Bootstrap.',
            liveProject: 'https://philgetz.github.io/reddit-search/',
            codepen: 'https://codepen.io/philgetz/pen/pEPOwN',
            github: 'https://github.com/philgetz/reddit-search',
            currentLink: 'See Project',
            img: 'http://i.imgur.com/VjR28iU.png',
            params: false,
            projectTech: ['Bootstrap', 'HandlebarsJS', 'Reddit API', 'JavaScript', 'jQuery', 'CSS', 'HTML']
        }, {
            name: 'twitch-staus-check',
            contentTitle: 'Twitch Status Checker',
            shortText: 'Responsive Twitch TV App built with the Twitch API.',
            liveProject: 'https://philgetz.github.io/Twitch.tv-status-watch/',
            codepen: 'https://codepen.io/philgetz/pen/YWvOzk',
            github: 'https://github.com/philgetz/Twitch.tv-status-watch',
            currentLink: 'See Project',
            img: 'http://i.imgur.com/V86LCEd.png',
            params: false,
            projectTech: ['Twitch.TV API', 'JavaScript', 'jQuery', 'CSS', 'HTML']
        }, ];


        let project = projectCards.reduce((targetProject, currentProject) => {
            if (currentProject.name === projectParam.project) {
                targetProject = currentProject;
            }
            return targetProject;
        }, {});

        return project;
    }
});