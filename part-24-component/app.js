var app = Vue.createApp({
	
	data (){
		return {
			name : ""
		}; // end of return 
	},
	methods:{
		clear(){
			this.name = '';
		}
	}
});

app.component('contact-details', {
	data(){
		return {
			name: "yeasir Arafat"
		}
	},
	template: `<h3>Contact Details</h3>
    		<p><strong>Name:</strong>Yeasir Arafat</p>
    		<p><strong>website:</strong>www.thewlweb.com</p>
    		<p><strong>Address:</strong>Dhaka, Bangladesh</p>`
});

app.mount("#app");

