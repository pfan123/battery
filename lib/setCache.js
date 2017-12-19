/**
 * [setCacheControl 设置服务器缓存,提供设置，Cache-Control, expires]
 * @param {[type]} ctx 
 */
function setCacheControl(ctx, opts = {'Cache-Control': 'max-age=31536000, public', 'expires': new Date((new Date()).getTime() + 31536000000)}){
	if(ctx.accepts('text/html'))return
	ctx.set('Cache-Control', opts['Cache-Control'])
	ctx.set('expires', opts['expires'])
}

module.exports = (opts) => {
	return async (ctx, next) => {
		setCacheControl( ctx, opts )
		await next()
	}
}

