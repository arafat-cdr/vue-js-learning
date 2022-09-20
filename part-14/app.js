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

	// now we are learning methods in vue js
	methods: {
		toggle(){
			this.show = !this.show;
		}
	} // end of methods

});

app.mount("#app");
