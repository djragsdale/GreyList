'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.send({
		'items': [
			{
				'id': 1,
				'text': 'Something'
			},
			{
				'id': 2,
				'text': 'Nothing'
			}
		]
	});
});

module.exports = router;
