/**
 * 数组去重
 */
export const unqieArr = (arr) => { 
	if(Object.prototype.toString.call(arr) != "[object Array]"){
		arr = []
	}
  	var len=arr.length, obj={}, newArr=[];      

	  while(len--){ 
	           if(obj[ arr[len] ] !== arr[len]){ 
	                obj[arr[len]] = arr[len];   
	                newArr.push( arr[len]); 
	          }  
	  } 
	return newArr.reverse(); 
}


/**
 * 数组去初undefined、null、‘’
 */
export const cleanArr = (arr) => { 
	if(Object.prototype.toString.call(arr) != "[object Array]"){
		arr = []
	}
   
	for(let i = 0; i < arr.length; i++ ){
		if(arr[i] === undefined || arr[i] === null || arr[i] == 'undefined' || arr[i] == ''){
			arr.splice(i,1)
			i--
		}
	}
	return arr; 
}



/**
*
* @param fn {Function}   实际要执行的函数
* @param threshhold {Number}  执行间隔，单位是毫秒（ms）
* @param type {String}  是否第一次执行
* @return {Function}     返回一个“节流”函数
*/

export const throttle = (fn, threshhold, type) => {
  // 记录是否可执行
  var isRun = true;

  // 定时器
  var timer;

  type = type || true;

  // 默认间隔为 200ms
  threshhold || (threshhold = 200)

  // 返回的函数，每过 threshhold 毫秒就执行一次 fn 函数
  return function () {

    // 保存函数调用时的上下文和参数，传递给 fn
    var context = this;
    var args = arguments;

    //第一次执行
    if(type && 'undefined' == typeof timer){
    	fn()  
    }

    if(!isRun)return;

    isRun = false;

    //保证间隔时间内执行
	timer = setTimeout(function () {
	   fn.apply(context, args)
	   isRun = true;
	}, threshhold)    

    var now = +new Date()

  }
}


/**
 *
 * @param fn {Function}   实际要执行的函数
 * @param delay {Number}  延迟时间，单位是毫秒（ms）
 *
 * @return {Function}     返回一个“防反跳 debounce”了的函数
 */

export const debounce = (fn, delay) => {

	// 定时器，用来 setTimeout
	var timer
  
	// 返回一个函数，这个函数会在一个时间区间结束后的 delay 毫秒时执行 fn 函数
	return function () {
  
	  // 保存函数调用时的上下文和参数，传递给 fn
	  var context = this
	  var args = arguments
  
	  // 每次这个返回的函数被调用，就清除定时器，以保证不执行 fn
	  clearTimeout(timer)
  
	  // 当返回的函数被最后一次调用后（也就是用户停止了某个连续的操作），
	  // 再过 delay 毫秒就执行 fn
	  timer = setTimeout(function () {
		fn.apply(context, args)
	  }, delay || 0)
	}
  }
  