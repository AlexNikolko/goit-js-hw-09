const refs = {
	startBtn: document.querySelector('button[data-start]'),
	stoptBtn: document.querySelector('button[data-stop]'),
};

const colorChange = {
	intervalId: null,
	isActive: false,

	start() {
		if (this.isActive) {
			return;
		}

		this.isActive = true;

		this.intervalId = setInterval(() => {
			const color = getRandomHexColor();
			document.body.style.backgroundColor = color;

		}, 1000);
	},

	stop() {
		clearInterval(this.intervalId);
		this.isActive = false;
	},
};

refs.startBtn.addEventListener('click', () => {
	colorChange.start();
});

refs.stoptBtn.addEventListener('click', () => {
	colorChange.stop();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
