var app = Vue.createApp({
	
	data (){
		return {
			name: ""
		}; // end of return 
	},

	// now we are learning methods in vue js
	methods: {
		handleKeyUp(e){
			// set it in name
			this.name = e.target.value;
		},

		formHandle(){
			console.log("form Submitted!");
		},

		cardClickHandle(){
			console.log("card Click Fire");
		},

		buttonClickHandle(){
			console.log("Click Me Fire");
		}

	} // end of methods

});

app.mount("#app");
