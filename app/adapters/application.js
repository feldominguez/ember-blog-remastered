import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'https://paper-blog-api.herokuapp.com',
    namespace: 'blog',
    headers: {
        'x-access-token': localStorage.token
    },
});