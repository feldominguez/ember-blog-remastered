import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {

        //     var updatedInfo = data.map(function(each) {
        //         var date = each.createdAt.split('').slice(0, 7).join('');
        //         var shortext = '';
        //         if (each.text.length > 160) {
        //             shortext = each.text.split('').slice(0, 140).join('') + '...';
        //         } else {
        //             shortext = each.text;
        //         }

        //         return {
        //             id: each.id,
        //             title: each.title,
        //             text: shortext,
        //             imgUrl: each.imgUrl,
        //             date: date
        //         };
        //     });
        //     return updatedInfo;
        // });

        let promise = this.store.findAll('post');

        return promise;
    }
});