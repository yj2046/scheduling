var app = new Vue({
    el:"#app",
    data:{
        dayList:[
            {name:"11111",text:"aaaaa"},
            {name:"22222",text:"bbbbb"},
            {name:"33333",text:"ccccc"},
            {name:"44444",text:"ddddd"},
            {name:"55555",text:"eeeee"},
        ],
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
            {name:"温泉",status:0},
            {name:"滑雪",status:0},
            {name:"购物",status:0},
            {name:"美食",status:0},
            {name:"常态",status:0},
            {name:"自驾",status:0},
            {name:"摄影",status:0}
        ],
        pageShow:0,
        destationSelected: false,
        timeSelected: false,
        num: 0,
        tempTitle: '北京五日游',
        journeyList: [
            '天安门广场-前门大街-故宫博物院',
            '天坛-雍和宫-孔庙和国子监-簋街',
            '恭王府-什刹海- 南锣鼓巷-什刹海',
            '八达岭长城-明十三陵',
            '无行程安排'
        ]

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
        },
        onEnd:function (day,index) {

            var indexNew = this.numberText(index);
        },
        /**
         * 阿拉伯数字转汉字
         * @param numberText
         * @returns {*}
         */
        translateNumber: function (numberText) {
            var CHINESE_NEGATIVE = "负";
            var CHINESE_ZERO = "零";
            var CHINESE_DIGITS = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
            var CHINESE_UNITS = ["", "十", "百", "千"];
            var CHINESE_GROUP_UNITS = ["", "万", "亿", "兆", "京", "垓", "杼", "穰", "溝", "澗", "正", "載", "極"];
            if (numberText === "") {
                return "";
            }
            numberText = numberText.toString().replace(/^0+/g, "");
            numberText = numberText.toString().replace(/^-0+/g, "-");
            if (numberText === "" || numberText === "-") {
                return CHINESE_ZERO;
            }
            var result = "";
            if (numberText[0] === "-") {
                result += CHINESE_NEGATIVE;
                numberText = numberText.substring(1);
            }

            var groupIsZero = true;
            var needZero = false;
            for (var i = 0; i < numberText.length; ++i) {
                var position = numberText.length - 1 - i;
                var digit = parseInt(numberText[i]);
                var unit = position % CHINESE_UNITS.length;
                var group = (position - unit) / CHINESE_UNITS.length;

                if (digit !== 0) {
                    if (needZero) {
                        result += CHINESE_ZERO;
                    }

                    if (digit !== 1 || unit !== 1 || !groupIsZero || (group === 0 && needZero)) {
                        result += CHINESE_DIGITS[digit];
                    }

                    result += CHINESE_UNITS[unit];
                }

                groupIsZero = groupIsZero && (digit === 0);

                if (unit === 0 && !groupIsZero) {
                    result += CHINESE_GROUP_UNITS[group];
                }

                needZero = (digit === 0 && (unit !== 0 || groupIsZero));

                if (unit === 0) {
                    groupIsZero = true;
                }
            }
            return result;
        },
        deleteJourney: function (index) {
            this.journeyList.splice(index, 1);
        }
    }
});