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
	{id:1, user: '1', title: 'new post', city: 'allahabad',
	budget: '5000', locality_preference: 'IIITA',
	hobbies: 'something',
	priorities: 'something',
	message: 'something'},
	{id:2, user: '1', title: 'second post', city: 'jalandhar',
	budget: '10000', locality_preference: 'MD',
	hobbies: 'something more',
	priorities: 'something more',
	message: 'something more'}
	]
});

export default Campaigns;
