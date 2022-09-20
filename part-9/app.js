var app = Vue.createApp({
	
	data (){
		return {
			activeClass: "red"
		}; // end of return 
	},

	// now we are learning methods in vue js
	methods: {
		setClass(className){
			this.activeClass = className;
		}

	} // end of methods

});

app.mount("#app");
