import Ember from 'ember';


export default Ember.Route.extend({
  model: function(params){
    var postID = params.id;

    var url = 'https://paper-blog-api.herokuapp.com/blog/'+ postID;

    var promise = Ember.$.ajax({
      type:'get',
      url: url
    }).then(function(data){
        var updatedInfo = data.data.map(function(each) {
          var date = each.createdAt.split('').slice(0, 7).join('');

          return {
            id: each.id,
            title: each.title,
            text: each.text,
            imgUrl: each.imgUrl,
            date: date
          };
        });
      return updatedInfo;
    });
    // console.log(promise);
    return promise;
  }
});
