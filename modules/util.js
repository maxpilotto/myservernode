module.exports = {
	isEmpty: function(json){
		let str = JSON.stringify(json)

		return str === '{}' || str === '' || str === '[]'
	},
	E_404: {
		code: 404,
		message: "Not found"
	}
}