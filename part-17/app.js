var app = Vue.createApp({
	
	data (){
		return {
			firstName: "",
			lastName: "",
			fullName: "",
		}; // end of return 
	},


	computed:{ 
	// it will only call when related variable cnge
		/*fullName(){
			return this.firstName+" "+this.lastName;
		}*/
	},

	// now we are learning methods in vue js
	methods: { 
	// this will call for all variable in data mthodss
	// fullName(){
	// 	return this.firstName+" "+this.lastName;
	// }
		
	}, // end of methods

	// we wanna watch ...
	watch:{
		// If we wanan check how a property value change or wanna perform 
		// data validation then we will use watch property ..
		firstName(newVal){
			this.fullName = newVal;
		},

		lastName(newVal){
			this.fullName = this.firstName+" "+ newVal;
		}

	}

});

app.mount("#app");
