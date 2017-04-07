import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function() {
    this.route('create-new-blogPost', { path: '/new-post' });


    this.route('blog', function() {
        this.route('post', { path: "/post/:id" });
        this.route('home', { path: "" });
    });
    this.route('login');
    this.route('loading');

    this.route('index', { path: '/' }
        // this.route('posts');
    );
    this.route('some', function() {
        this.route('nested');
    });

    this.route('edit', function() {
        this.route('blog-post', { path: "/blog-post/:id" });
    });
});

export default Router;