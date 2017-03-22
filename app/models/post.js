import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    text: DS.attr('string'),
    imgUrl: DS.attr('string'),
    createdAt: DS.attr('date'),
    updatedAt: DS.attr('number')
});