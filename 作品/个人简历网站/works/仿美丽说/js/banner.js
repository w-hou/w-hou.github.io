window.onload = function () {
    // 获取banner对象
    var banner = document.querySelector(".main .banner");
    //  获取左右箭头按钮对象
    var left_btn = document.querySelector(".main .banner .btn1");
    var right_btn = document.querySelector(".main .banner .btn2");
    // 获取ul对象
    var ul = document.querySelector(".main .banner ul");
    // 获取banner的宽度
    // var banner_width = banner.offsetWidth;
    // 绑定移入banner事件
    banner.onmouseover = function () {
        left_btn.style.display = "block";
        right_btn.style.display = "block";
        // 移上banner之后停止自动播放
        clearInterval(timer);
        timer = null;
    }
    // 绑定移出banner事件
    banner.onmouseout = function () {
        left_btn.style.display = "none";
        right_btn.style.display = "none";
        // 移出banner之后继续自动播放
        if (timer == null) {
            timer = setInterval(function () {
                right_btn.click();
            }, 2000);
        }
    }
    // 获取li对象
    var oLi = document.querySelectorAll(".main .banner ul li");
    // 获取ol对象
    var ol = document.querySelector(".main .banner ol");
    for (var i = 0; i < oLi.length; i++) {
        // 创建li节点
        var lis = document.createElement("li");
        // 添加节点到ol
        ol.appendChild(lis);
        // 设置自定义属性
        lis.setAttribute("index", i);
        // 绑定点击事件  选中被点击的小圆点
        lis.onclick = function () {
            // 排他思想  先清掉所有人,在设置自己
            for (var j = 0; j < ol.children.length; j++) {
                ol.children[j].removeAttribute("class");
            }
            this.classList.add("present");
            // 点击小圆点滚动到对应图片
            var index = this.getAttribute("index");
            num = index;
            circle = index;
            animation(ul, -banner.offsetWidth * index);
            // 调用动画函数
        }
    }
    // 给ol下的第一个li添加一个present类名
    ol.children[0].classList.add("present");

    // 克隆ul下面的第一个li
    var first = oLi[0].cloneNode(true);
    // 将克隆的第一个li添加到ul下面的最后一个
    ul.appendChild(first);
    // 设置ul的宽度
    ul.style.width = ul.children.length * 100 + "%";
    // 定义一个变量num,保存现在是第几张图片
    var num = 0;
    // 定义一个变量circle,保存当前是第几个小圆圈
    var circle = 0;
    // 点击右侧按钮一次，就让图片滚动一张
    right_btn.onclick = function () {
        if (num == ul.children.length - 1) {
            // 让ul不做动画的跳到最左侧
            ul.style.left = 0;
            num = 0;
        }
        num++;
        // 调用动画 
        animation(ul, -banner.offsetWidth * num);
        // 点击右侧按钮,让小圆圈跟随变化
        circle++;
        if (circle == ol.children.length) {
            circle = 0;
        }

        for (var k = 0; k < ol.children.length; k++) {
            ol.children[k].removeAttribute("class");
        }
        ol.children[circle].classList.add("present");
    }
    // 点击左侧按钮一次，就让图片滚动一张
    left_btn.onclick = function () {
        if (num == 0) {
            ul.style.left = -banner.offsetWidth * oLi.length;
            num = oLi.length;
        }
        num--;
        // 调用动画 
        animation(ul, -banner.offsetWidth * num);
        // 点击右侧按钮,让小圆圈跟随变化
        circle--;
        if (circle == -1) {
            circle = ol.children.length - 1;
        }
        for (var k = 0; k < ol.children.length; k++) {
            ol.children[k].removeAttribute("class");
        }
        ol.children[circle].classList.add("present");
    }
    // 自动播放功能
    var timer = setInterval(function () {
        right_btn.click();
    }, 2000);
}