import Ember from 'ember';

export default Ember.Controller.extend({
    // text: function() {
    //     return this.get('model.text')

    // },
    // text: Ember.computed.alias('model.text'),
    checkingAuths: function() {
        return localStorage.token ? true : false;
    }.property(),
    actions: {
        editBlogPost: function(post) {
            // console.log('editing blogpost')

            event.preventDefault();
            var title = this.get('title');
            var text = this.get('text');
            var imgUrl = this.get('imgUrl')

            console.log(post)
                //     var promise = Ember.$.ajax({
                //         type: "PUT",
                //         url: 'https://paper-blog-api.herokuapp.com',
                //         headers: {
                //             'x-access-token': localStorage.token
                //         },
                //         data: {
                //             title: title,
                //             text: text,
                //             imgUrl: imgUrl
                //         }
                //     })

            // promise.then(() => {
            //     this.transitionToRoute('index');
            // }, function() {
            //     alert('error');
            // }, function() {

            // });
        }
    }
});