var app = Vue.createApp({
	
	data (){
		return {
			// retun property we can acces in html
			msg: "welcome to vue js 3 bangla tuitorial",
			tutorialInfo: {
				name: "Vue js 3 Bangla tutorial",
				githubLink: "https://soundcloud.com/discover",
			},

			htmlCode: "<a href='https://www.youtube.com/watch?v=AWQKaMyrNa0&list=PLZ8kLhUbDAhADR0nUr2rwhOD0smxVZX-x&index=3'>Youtube Link</a>",
		}; // end of return 
	}
});

app.mount("#app");
