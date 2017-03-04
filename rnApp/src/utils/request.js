var superagent = require('superagent');

function Request({
	url,
	data,
	success,
	fail,
	error,
	type
}) {
	type = this.getType(type),
		url = this.getUrl(url);
	this.url = url;
	var request = new superagent.Request(type, url);
	this.request = request;
	this.addClientType();
	this.addAuthInfo();
	// request.set('Content-Type', 'application/x-www-form-urlencoded');
	request.set('Accept', 'application/json');
	if (type === 'GET') {
		request.query(data);
	} else {
		request.send(data);
	}
	this.execute({
		success,
		fail,
		error,
		data
	});
}

Request.prototype = {
	constructor: Request,

	getUrl: function(url) {
		if (/^http/.test(url)) {
			return url;
		}
    return url[0] === '/' ? 'http://localhost:3000' + url : 'http://localhost:3000' + '/' + url
	},
	getType: function(type) {
		type = type ? type.toUpperCase() : 'POST';
		return type === 'GET' ? 'GET' : 'POST';
	},
	addClientType: function() {
		this.request.query({
			p: Platform.OS
		});
	},

	addAuthInfo: function() {
		this.request.query({
			t: Date.now()
		});
	},
	execute: function({
		success,
		fail,
		error,
		data
	}) {
		this.startTime = Date.now();
		this.request.end(function(err, res) {
			if (err) {
				console.log('request err:', err);
				NetInfo.isConnected.fetch().done((isConnected) => {
					if (!isConnected) {
						if (Platform.OS === 'android') {
							ToastAndroid.show('网络好像有问题', ToastAndroid.SHORT);
						}
					}
				});
				error && error();
				return;
				// throw err;
			}
			log.saveAPI({
				url: this.url,
				time: Date.now() - this.startTime
			});
			var body = res.body;
			var errcode = body.errcode;
			if (errcode !== 0) {
				log.saveBuss({
					errcode: errcode,
					errmsg: body.errmsg,
					url: this.url
				});
				return fail && fail(body);
			}
			return success && success(body);
		}.bind(this));
	}
};

var Index = {
	get: function(options) {
		options.type = 'GET';
		new Request(options);
	},
	post: function(options) {
		options.type = 'POST';
		new Request(options);
	},
	ajax: function(options) {
		new Request(options);
	}
};

module.exports = Index;
