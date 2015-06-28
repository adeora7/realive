import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('campaigns', function () {
    	this.resource('campaign', {path : ':campaignid'});
    });
  this.route('user');
});

export default Router;
