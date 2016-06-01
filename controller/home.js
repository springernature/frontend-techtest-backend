
'use strict';

var dataModel = require('../model/data');
/*
 * HOME
 * home page
 */
module.exports = function(req, res, next) {
	var response = {
		layout: {
			template: 'home'
		},
		data: {
			title: 'Follow Us',
			items: dataModel.all()
		}
	};
	res.status(200).send(response);
};
