Vue.component('gooding', {
	template: '<button :class="{gooding:gooding}" v-on:click="good()"><i class="fa fa-heart-o"></i>赞{{goodnum}}</button>',
	data: function () {
		return {
			goodnum: 0,
			gooding: false,

		}
	},
	methods: {
		good: function () {
			if (!this.gooding)
				this.goodnum++;
			else
				this.goodnum--;
			this.gooding = !this.gooding;
		}
	}
});
Vue.component('baging', {
	template: '<button :class="{baging:baging}" v-on:click="bag()"><i class="fa fa-thumbs-o-down"></i>坑{{bagnum}}</button>',
	data: function () {
		return {
			bagnum: 0,
			baging: false,

		}
	},
	methods: {
		bag: function () {
			if (!this.baging) {
				this.bagnum++;
			} else {
				this.bagnum--;
			}
			this.baging = !this.baging;
		}
	}
});
Vue.component('told-say', {
	template: '<button :class="{tolded:tolded}" v-on:click="told()"><i class="fa fa-commenting"></i>评论{{toldnum}}</button>',
	data: function () {
		return {
			toldnum: 0,
			tolded: false,

		}
	},
	methods: {
		told: function () {
			if (!this.tolded) {
				this.toldnum++;
			} else {
				this.toldnum--;
			}
			this.tolded = !this.tolded;
		}
	}
});
var app = new Vue({
	el: '#main',
	data: {
		main: [{
				href: 'http://news.163.com/18/0723/11/DND75BVO0001899O.html',
				hreftext: '加拿大多伦多枪击案已造成2人死亡13人受伤',
				text: '海外网7月23日电据美联社报道，加拿大多伦多警察局长称，22日发生在该市的枪击案已经造成1名受害者身亡，另有13人受伤。'
				+'此前据美国全国广播公司、俄罗斯卫星通讯社等外媒报道，枪手也在枪击案中死亡。'
				+'报道称，当地时间周日（22日）晚上10点多，多伦多市丹福夫大道的一家餐厅外发生大规模枪击案。事发后，伤者被送往医院接受治疗。'
				+'有目击者告诉多伦多当地媒体，称事发时，一名身穿黑衣的男子多次开枪，有人估计他开了20枪，也有目击者称枪手开了15-20枪。',
			},
			{
				href: 'http://news.ifeng.com/a/20180723/59349179_0.shtml',
				hreftext: '酷热难熬！日本高温热浪致至少28人丧生 逾万人送医',
				text: '中新网7月23日电 综合报道，日本遭受高温酷暑天气，近三周内已造成至少28人丧生，并有12000多人就医。法新社援引官方数据显示，日本许多城市22日的温度逼近摄氏40度。'
				+'最新数据显示，7月8日止的一周内有3人中暑死亡，而到15日为止的一周中暑死亡人数增至12人。上周六21日又有13人中暑身亡，多数是年长者。',
			},
		],
	},
	
});