const crypto = require('crypto')

const generateRandom = function(len){
	return crypto.randomBytes(Math.ceil(len*3/4))
			.toString('base64')
			.slice(0,len)
}

/**
 * [setCrsfToken 设置http自定义头部属性csrftoken，预防csrf跨站伪造请求]
 * @param {[type]} ctx 
 */
function setCrsfToken(ctx, len){
	ctx.set('csrf-token', generateRandom(len))
}

module.exports = (len) => {
	return async (ctx, next) => {
		setCrsfToken( ctx, len )
		await next()
	}
}

