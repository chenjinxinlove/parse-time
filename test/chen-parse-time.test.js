var parsetime = require('../lib/chen-parse-time.js');
var expect = require('chai').expect;

describe('get timestamp',function(){
	it('get 1470735445 length',function(){
		expect(parsetime.getTimeStamp()).to.be.a('number');

	});
	it('get time',function(){
		expect(parsetime.getTime(1470736486,'YYYY-MM-dd')).to.be.equal('2016-08-09')
	})


})
