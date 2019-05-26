const fs = require('fs');

class User {
	constructor({data}) {
		this.id_old = data.id;
		this.id = Date.now().valueOf();
		this.email = data.email;
		this.first_name = data.first_name;
		this.last_name = data.last_name;
		this.avatar = data.avatar;
		this.name = data.first_name +' '+ data.last_name;
		this.pathIMG = 'db/images/' + this.first_name + '_' + this.last_name + '.jpg';
		this.loadIMG();
	}

	loadIMG() {	
		if(!fs.existsSync('./db')) {
		fs.mkdirSync('./db');
		fs.mkdirSync('./db/images');
		} else {
			if(!fs.existsSync('./db/images')) {
				fs.mkdirSync('./db/images');
			}
		}
		var https = require('https');
		var file = fs.createWriteStream(this.pathIMG);
		https.get(this.avatar, function(response) {
			file.on(response.pipe(file), function() {
			file.close();
			});
		}).on('error', function(err) {
			console.error(err);
			fs.unlink(this.pathIMG);
		});
		}
	importUser() {
		const imp = { id: this.id,
			name: this.name,
			avatar: this.pathIMG};
		fs.appendFileSync('./db/data.json', JSON.stringify(imp));

		return imp;
	}
}

module.exports = User;
