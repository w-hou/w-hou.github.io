// obj代表需要做动画对象
// target目标位置
// callback回调函数
function animation(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        // 公式: (目标值 - 现在的位置) / 10 得到步长
        var step = (target - obj.offsetLeft) / 10;
        // 步长值如果是正数,需要向上取整 如果是负数,就需要向下取整
        step = step >= 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            // 动画执行完毕,如果有回调函数就调用回调函数
            // if (callback){
            //     callback();
            // }
            callback && callback() // 这种写法等同于上面if写法
        } else {
            obj.style.left = obj.offsetLeft + step + "px";
        }
    }, 15)
}
function animation_linear(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var step = target > obj.offsetLeft ? 1 : -1;
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            // 动画执行完毕,如果有回调函数就调用回调函数
            // if (callback){
            //     callback();
            // }
            callback && callback() // 这种写法等同于上面if写法
        } else {
            obj.style.left = obj.offsetLeft + step + "px";
        }
    }, 15)
}