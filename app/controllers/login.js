import Ember from 'ember';

export default Ember.Controller.extend({
    // session: Ember.inject.service(),
    checkingAuths: function() {
        return localStorage.token ? true : false;
    }.property(),
    actions: {
        authenticate: function(e) {

            e.preventDefault();

            var promise = Ember.$.ajax({
                type: 'post',
                url: 'https://paper-blog-api.herokuapp.com/authenticate',
                data: {
                    name: this.get('name'),
                    password: this.get('password')
                }
            });

            promise.then((res) => {

                if (!res.token) {
                    alert('not really!')

                } else {
                    localStorage.setItem('token', res.token);
                    this.transitionToRoute('index');
                    window.location.reload(true);
                    
                    //console.log(localStorage.token)
                }

            }, function() {
                alert('error');
            }, function() {

            });
        }
    }
});
