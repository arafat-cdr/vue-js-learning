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

app.mount("#app");

