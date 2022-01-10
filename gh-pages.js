import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/rsmith37/rsmith37.github.io', // Update to point to your repository
		user: {
			name: 'rsmith37', // update to use your name
			email: 'rsmith37@ggc.edu' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);