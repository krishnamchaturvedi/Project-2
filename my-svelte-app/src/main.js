import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;


if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/service-worker.js')
	  .then((registration) => {
		console.log('Service worker registered:', registration);
	  })
	  .catch((error) => {
		console.error('Error registering service worker:', error);
	  });
  }