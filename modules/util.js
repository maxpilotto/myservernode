module.exports = {
	isEmpty: function(json){
		let str = JSON.stringify(json)

		return str === '{}' || str === '' || str === '[]'
	}
}