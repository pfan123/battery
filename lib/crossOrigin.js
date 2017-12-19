/**
 * [setHeaderCrossOrigin 设置跨域中间件]
 * @param {[type]} ctx 
 */
function setHeaderCrossOrigin (ctx) {
	ctx.set('Access-Control-Allow-Origin', '*')
	ctx.set('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS,PATCH')
	ctx.set('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization')
}

module.exports = () => {
	return async (ctx, next) => {
		setHeaderCrossOrigin( ctx )
		console.log("next", next)
		await next()
	}
}