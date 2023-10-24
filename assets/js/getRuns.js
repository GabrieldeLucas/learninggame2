async function getRuns() {
	let runs;

	await fetch('https://gamingnlearning.vercel.app/api/runs/speedrun', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((response) => response.json())
		.then((data) => {
			runs = data;
			console.log(data)
		});
	
	if (runs) {
		runs.sort((a, b) => a.time - b.time)
		renderRuns(runs);
	}
}

function renderRuns(runs) {
	runs.map((run, index) => {
		const score = convertMillisecondsToTime(run.time);
		document.querySelector(`#name${index}`).textContent = run.user;
		document.querySelector(`#score${index}`).textContent = score;
	})
}

function convertMillisecondsToTime(ms) {
  const minutes = Math.floor(ms / (1000 * 60));
  const seconds = Math.floor((ms % (1000 * 60)) / 1000);
  const milliseconds = ms % 1000;

	const formattedMinutes = String(minutes).padStart(2, '0');
	const formattedSeconds = String(seconds).padStart(2, '0');
	const formattedMilliseconds = String(milliseconds).padStart(3, '0')

  const formattedTime = `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;

  return formattedTime;
}

getRuns();
