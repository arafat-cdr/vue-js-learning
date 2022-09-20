var app = Vue.createApp({
	
	data (){
		return {
			num: "",
			result: "",
		}; // end of return 
	},

	// now we are learning methods in vue js
	methods: {
		/*getInput(e){
			this.num = e.target.value;
		},*/

		getDouble(){
			this.result = this.num * 2;
		}, 

		getSquare(){
			this.result = this.num * this.num;
		},

		addTen(){
			this.result = this.num +10;
		},

		reset(){
			this.num = '';
			this.result = '';
		}

	} // end of methods

});

app.mount("#app");
