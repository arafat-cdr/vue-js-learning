var app = Vue.createApp({
	
	data (){
		return {
			show: false,
			skills: [
			{name: "html", exp: 3},
			{name: "css", exp: 5},
			{name: "js", exp: 5},
			{name: "php", exp: 7},
			],
		}; // end of return 
	},

	computed: {
		// computed property 
		// we can not use any argument inside computed methods..
		// This will only run when the used property change 
		// use property means the property we used inside computed
		// methods...
		// Normal methods call every type if any thing cnge inside data
		// methods....
		// So using computed property is a huge performacne boost ..
		totalCount1(){
			console.log("count Form method");
			return this.skills.length;
		},

		proNinja(){

			let es = this.skills.filter( (item) => {
				return item.exp >= 5 ;
			});

			return es;

		}

	},

	// now we are learning methods in vue js
	methods: {
		// data property te kisu gotlei run korbe method gula
		removeMe(i){
			this.skills.splice(i, 1);
		},

		totalCount(){
			console.log("count Form method");
			return this.skills.length;
		}

	} // end of methods

});

app.mount("#app");
