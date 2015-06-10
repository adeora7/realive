import DS from 'ember-data';

var attr= DS.attr;

var User= DS.Model.extend({
	response: DS.hasMany('response'),
	campaign: DS.hasMany('campaign'),
	name: attr('string'),
	password: attr('string'),
  	age: attr('integer'),
  	gender: attr('string'),
 	occupation: attr('string')
});

User.reopenClass({
	FIXTURES: [
	{id:1, name: 'adeora7', password: 'password', age: '19',
	gender: 'male', occupation: 'student'},
	{id:2, name: 'anonymous', password: 'password', age: '20',
	gender: 'male', occupation: 'student'}
	]
});

export default User;