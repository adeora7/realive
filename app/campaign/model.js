import DS from 'ember-data';

var attr= DS.attr;

var Campaigns= DS.Model.extend({
	response: DS.hasMany('response', { async:true }),
	user: DS.belongsTo('user'),
	title: attr('string'),
	end_date: attr('date'),
	city: attr('string'),
	budget: attr('string'),
	move_in_date: attr('date'),
	locality_preference: attr('string'),
	hobbies: attr('string'),
	priorities: attr('string'),
	message: attr('string')

});

Campaigns.reopenClass({
	FIXTURES: [
	{id:1, user: '1', title: 'Need a fun & silent place', city: 'allahabad',
	budget: '5000', locality_preference: 'IIITA',
	hobbies: 'football',
	priorities: 'bar',
	message: 'new friendly atmosphere', move_in_date: '18-6-2015'},
	{id:2, user: '1', title: 'second post', city: 'jalandhar',
	budget: '10000', locality_preference: 'MD',
	hobbies: 'm a foodie',
	priorities: 'silent',
	message: 'hey there ... please find me a place', move_in_date: '18-6-2015'}
	]
});

export default Campaigns;
