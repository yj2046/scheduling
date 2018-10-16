Vue.directive("longtouch", function(el, binding) {
    var oDiv = el,
        value = binding.value,
        x = 0,
        y = 0,
        z = 0,
        timer = null;
    oDiv.addEventListener("touchstart", function(e) {
        if (e.touches.length > 1) {
            return false;
        }
        z = 0;
        timer = setTimeout(function() {
            z = 1;
        }, 500);
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
        e.preventDefault();
    }, false);
    document.addEventListener("touchmove", function(e) {
        if (x != e.touches[0].clientX || y != e.touches[0].clientY) {
            clearTimeout(timer);
            return false;
        }
    }, false);
    document.addEventListener("touchend", function(ev) {
        if (z != 1) {
            clearTimeout(timer);
            x = 0;
            y = 0;
            return false;
        } else {
            x = 0;
            y = 0;
            z = 0;
            alert("长按了啊")
        }
    }, false);
})

var app = new Vue({
    el:"#app",
    data:{
        playList:[
            {name:"赏花",status:0},
            {name:"骑行",status:0},
            {name:"高尔夫",status:0},
            {name:"踏青",status:0},
            {name:"登山",status:0},
            {name:"漂流",status:0},
            {name:"滑雪",status:0},
            {name:"冲浪",status:0},
            {name:"游学",status:0},
            {name:"赏花",status:0},
            {name:"骑行",status:0},
            {name:"高尔夫",status:0},
            {name:"踏青",status:0},
            {name:"登山",status:0},
            {name:"漂流",status:0},
            {name:"滑雪",status:0},
            {name:"冲浪",status:0},
            {name:"游学",status:0}

        ],
        pageShow:1,
        destationSelected: false,
        timeSelected: false,
        num: 0,

    },
    created:function () {

    },
    mounted:function () {

    },
    methods: {
        selectDestation: function () {
            this.pageShow = 1;
            this.destationSelected = true;
        },
        closeDestation: function () {
            this.pageShow = 1;
        },
        selectTime: function () {
            this.pageShow = 1;
            this.timeSelected = true;
        },
        triggerClick: function (e,data) {
            e.preventDefault();
            var _this = this;
            this.num++;
            setTimeout(function () {
                if (_this.num == 1) {
                    data.status = 1;
                }
                _this.num = 0;
            }, 300);
            if (_this.num > 1) {
               data.status = 2;
            }
        }

    }
});