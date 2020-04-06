$(".navbar-nav>li").click(function() {
    $(this).addClass("v-active").siblings().removeClass("v-active")
})

$(".dropdown").hover(
    function() {
        $(this).addClass("open");
    },
    function() {
        $(this).removeClass("open");
    }
);