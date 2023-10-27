async function saveRun() {
	const username = document.querySelector('#username').value;
  const timer2 = document.querySelector('#timer2').textContent;
	const timer= convertTimeToMilliseconds(timer2)

	const run = {
		username,
		time: timer,
	};

	const response = await fetch('https://gamingnlearning.vercel.app/api/runs/speedrun/register', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(run),
	})

	if (response.ok) {
		alert('Run saved!');
	}

	window.location.href = 'ranking.html';
}

function convertTimeToMilliseconds(timeString) {
  const parts = timeString.split(':');
  const hours = parseInt(parts[0]) * 60 * 60 * 1000;
  const minutes = parseInt(parts[1]) * 60 * 1000;
  const seconds = parseInt(parts[2]) * 1000;
  const milliseconds = parseInt(parts[3]);

  const totalTimeInMilliseconds = hours + minutes + seconds + milliseconds;
  return totalTimeInMilliseconds;
}
