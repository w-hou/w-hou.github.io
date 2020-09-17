function Slideshow(selector) {
    // console.log($(selector))
    // 根  最大的盒子
    this.$root = $(selector);
    // 获取最大盒子的宽高
    this.$width = this.$root.width();
    this.$height = this.$root.height();

    this.$wrap = this.$root.find(".swiper-wrapper")
    this.$list = this.$root.find(".swiper-slide");

    // 小圆点
    this.$pagination = this.$root.find(".swiper-pagination");

    // 向左向右按钮
    this.$prevBtn = this.$root.find(".swiper-button-prev");
    this.$nextBtn = this.$root.find(".swiper-button-next");

    this.current = 0;

    // 初始化
    this.init();

}
// 初始化
Slideshow.prototype.init = function() {
    // 设置整个总宽度
    this.$wrap.css("width", this.$width * this.$list.length + "px");
    // 每个图片的宽高
    this.$list.css({
        "width": this.$width + "px",
        "height": this.$height + "px",
    });

    //  添加圆点
    this.addDots();

    // 给圆点添加点击事件
    this.dotsClick();

    // 点击上一张
    this.clickPrev();

    // 点击下一张
    this.clickNext();

    // 自动轮播
    // this.autoPlay();

}

// 添加小圆点
Slideshow.prototype.addDots = function() {
    for (var i = 0; i < this.$list.length; i++) {
        // 添加元素
        this.$pagination.append("<div></div>");
        // 将第一个默认高亮
        this.$pagination.find("div").eq(0).addClass("active");
    }
}

// 小圆点点击事件
Slideshow.prototype.dotsClick = function() {
    var _this = this;
    // 添加事件
    this.$pagination.find("div").click(function() {

        var index = $(this).index();
        // console.log(index)

        _this.move(index);
    })
}

Slideshow.prototype.move = function(index) {

    // 高亮圆点
    this.highlight(index);

    // 准备下一张
    this.showPic(index);

    // 改变当前索引
    this.current = index;

}

// 小圆点高亮
Slideshow.prototype.highlight = function(index) {
    this.$pagination.find("div").eq(index).addClass("active").siblings().removeClass("active");
}

// 准备下一张图
Slideshow.prototype.showPic = function(index) {
    if (this.current < index) {
        // 如果将要显示的在后面, 就准备后面的图片
        this.$list.eq(this.current).after(this.$list.eq(index));

        // 小圆点下一张
        this.next();

    } else {
        // 如果将要显示的在前面, 就准备前面的图片
        this.$list.eq(this.current).before(this.$list.eq(index));

        // 小圆点上一张
        this.prev();
    }
}

// 小圆点上一张
Slideshow.prototype.prev = function() {
    this.$wrap.css("left", -this.$width + "px").animate({
        "left": "0px",
    }, 500)
}

// 小圆点下一张
Slideshow.prototype.next = function() {
    var _this = this;
    this.$wrap.animate({
        "left": -this.$width + "px",
    }, 500, function() {
        _this.$wrap.append(_this.$root.find(".swiper-slide").eq(0)).css("left", "0px");
    });
}

// 点击按钮上一张
Slideshow.prototype.clickPrev = function() {
    var _this = this;
    this.$prevBtn.click(function() {

        var prevIndex = _this.current - 1 < 0 ? _this.$list.length - 1 : _this.current - 1;
        _this.move(prevIndex);

    })
}

// 点击按钮下一张
Slideshow.prototype.clickNext = function() {
    var _this = this;
    this.$nextBtn.click(function() {

        var prevIndex = _this.current + 1 > _this.$list.length - 1 ? 0 : _this.current + 1;
        _this.move(prevIndex);

    })
}

// 自动轮播
Slideshow.prototype.autoPlay = function(time) {
    // this.next();
    var _this = this;
    if (time === undefined) {
        time = 3000;
    }
    setInterval(function() {
        _this.next();
    }, time);
}