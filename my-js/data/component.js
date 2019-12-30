// #panel-365048
Vue.component('first-todo-item', {
	props: ['todo'],
	template: '<a class="panel-title collapsed" data-toggle="collapse" >{{todo.name}}</a>'
});
var app = new Vue({
	el: '#panel-365048',
	data: {
		groceryList: [
			{
				name:'ES6',
				id: 'ES6',
				text: 'Vegetables',
				html:'es6-main.html'
			},
			{
				name:'Vue',
				id: 'Vue',
				text: 'Cheese',
				html: 'vue-main-show.html'
			},
			{
				name:'Node',
				id: 'Node',
				text: 'Whatever else humans are supposed to eat',
				html: 'null'
			}
		],
		parent: ['#panel-365049']
	}
});
// #panel-365049
var app = new Vue({
	el: '#panel-365049',
	data: {
		groceryList: [
			{
				name: 'C#',
				id: 'CSHARP',
				text: 'Vegetables',
				html: 'es6-main.html',
			},
			{
				name: 'JAVA',
				id: 'JAVA',
				text: 'Cheese',
				html: 'null',
			},
			{
				name: 'NET',
				id: 'NET',
				text: 'Whatever else humans are supposed to eat',
				html: 'null',
			}
		],
		parent:['#panel-365049']
	}
});
