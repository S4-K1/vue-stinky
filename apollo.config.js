// apollo.config.js

// eslint-disable-next-line no-undef
module.exports = {
	client: {
		service: {
			name: 'vueTest',
			url: 'http://localhost:5173,graphql'
		},
		includes: [
			'src/views/HomeView.vue'
		],
	},
}