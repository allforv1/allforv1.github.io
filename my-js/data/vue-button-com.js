Vue.component('gooding', {
	template: '<button :class="{gooding:gooding}" v-on:click="good()"><i class="fa fa-heart-o"></i>赞{{goodnum}}</button>',
	data: function() {
		return {
			goodnum: 0,
			gooding: false,

		}
	},
	methods: {
		good: function() {
			if(!this.gooding)
				this.goodnum++;
			else
				this.goodnum--;
			this.gooding = !this.gooding;
		}
	}
});
Vue.component('baging', {
	template: '<button :class="{baging:baging}" v-on:click="bag()" class="2"><i class="fa fa-thumbs-o-down"></i>坑{{bagnum}}</button>',
	data: function() {
		return {
			bagnum: 0,
			baging: false,

		}
	},
	methods: {
		bag: function() {
			if(!this.baging) {
				this.bagnum++;
			} else {
				this.bagnum--;
			}
			this.baging = !this.baging;
		}
	}
});
Vue.component('tolding', {
	template: '<button :class="{tolding:tolding}" v-on:click="told()""><i class="fa fa-commenting"></i>评论{{toldnum}}</button>',
	data: function() {
		return {
			toldnum: 0,
			tolding: false,

		}
	},
	methods: {
		told: function() {
			if(!this.tolding)
				this.toldnum++;
			else
				this.toldnum--;
			this.tolding = !this.tolding;
		}
	}
});