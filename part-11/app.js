var app = Vue.createApp({
	
	data (){
		return {
			skills: [
			{name: "html", exp: 3},
			{name: "css", exp: 3},
			{name: "js", exp: 3},
			{name: "php", exp: 3},
			],
			new_skill: {name: '', exp: '3'}
		}; // end of return 
	},

	// now we are learning methods in vue js
	methods: {
		addSkill(){
			this.skills.push(this.new_skill);
			this.new_skill = {name: '', exp: '3'};
		},

		removeMe(index){
			this.skills.splice(index, 1);
		}

	} // end of methods

});

app.mount("#app");
