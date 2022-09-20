var app = Vue.createApp({
	
	data (){
		return {
			mobile: "",
			name: {
				firstName: "",
				lastName: ""
			}
		}; // end of return 
	},

	// we wanna watch ...
	watch:{
		// If we wanan check how a property value change or wanna perform 
		// data validation then we will use watch property ..
		
		
		// same name 
		mobile( newValue, oldValue ){
			console.log(newValue);
			if(isNaN(newValue)){
				alert("Enter only Number");
				this.mobile = oldValue;
			}

			if(newValue.length == 11){
				alert("OTP is send");
			}
		},

		"name.firstName": function(newVal, oldVal){
			//console.log(newVal, oldVal);
		},

		// we can also watch the full object ...
		// The process is below ...
		name: {
			deep: true,
			handler: function(newVal, oldVal){
				console.log(newVal, oldVal);
			}
		}

	},

	computed:{ // it will only call when related variable cnge
		
	},

	// now we are learning methods in vue js
	methods: { // this will call for all variable in data mthodss
		
	} // end of methods

});

app.mount("#app");
