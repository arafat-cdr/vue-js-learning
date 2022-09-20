var app1 = Vue.createApp({
	
	data (){
		return {
			name : ""
		}; // end of return 
	},

	template: `<h3>Enter your Name</h3>
    		<input type="text" name="name" id="name" v-model="name">
    		<br>
    		<p>Your Name {{name}}</p>`
});

app1.mount("#app1");

// vue app 2
var app2 = Vue.createApp({
	
	data (){
		return {
			message : "Hello World form app 2"
		}; // end of return 
	},

	template: `<h3>Your Message </h3>
    		<p> {{message}} </p>`
});

app2.mount("#app2");
