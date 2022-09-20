var app = Vue.createApp({
	
	data (){
		return {
			count: 0
		}; // end of return 
	},

	// now we are learning methods in vue js
	methods: {
		getCurrentTime() {
			let ct = new Date();
			return ct;
		},

		increase(){
			// accesing the data property ..
			this.count++;
		},

		decrease(){
			// accessing data property...
			this.count--;
		},

		test(eve, val){
			console.log("test "+val);
			console.log(eve);
		}

	} // end of methods

});

app.mount("#app");
