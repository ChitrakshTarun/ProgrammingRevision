// Allows for describing a value which could be one of a set of possible named constants.
enum StreamingService {
	Spotify,
	AppleMusic,
	AmazonMusic,
	YouTubeMusic,
}

const App = StreamingService.Spotify;

// Can initialise values. If not, it will start from 0. Can also set number values manually.
enum StreamingService2 {
	Spotify = 10,
	AppleMusic, // Initialised to 11
	AmazonMusic = 20,
	YouTubeMusic, // Initialised to 21
}

// Sometimes a good idea to add const at the start to reduce the amount of code JavaScript generates.
// Also, can also assign strings etc. as values.
const enum StreamingService3 {
	Spotify = "Spotify",
	AppleMusic = "Apple Music",
	AmazonMusic = "Amazon Music",
	YouTubeMusic = "YouTube Music",
}
