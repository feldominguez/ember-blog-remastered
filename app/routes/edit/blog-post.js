import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        var postID = params.id;

        var url = 'https://paper-blog-api.herokuapp.com/blog/' + postID;

        var promise = Ember.$.ajax({
            url: url,
        }).then(function(data) {

            var updatedInfo = data.data.map(function(each) {

                return {
                    id: each.id,
                    title: each.title,
                    text: each.text,
                    imgUrl: each.imgUrl,
                };
            });
            return updatedInfo;
        });

        return promise
    },
    afterModel: function(r) {
        console.log(r.title)
    }
});