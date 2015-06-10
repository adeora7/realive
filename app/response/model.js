import DS from 'ember-data';

var attr= DS.attr;

export default DS.Model.extend({
	user: DS.belongsTo('user'),
	campaign: DS.belongsTo('campaign'),
	suggestion1: attr('string'),
	suggestion2: attr('string'),
});