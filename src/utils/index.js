function convertToIST(utcString) {
	const isoString = utcString.replace(' ', 'T').replace(' +0000 UTC', 'Z')

	const utcDate = new Date(isoString)

	const istOffsetMinutes = 5.5 * 60
	const istDate = new Date(utcDate.getTime() + istOffsetMinutes * 60000)

	const options = {
		timeZone: 'Asia/Kolkata',
		year: 'numeric',
		month: 'short',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
	}
	let formatted = new Intl.DateTimeFormat('en-IN', options).format(istDate)

	formatted = formatted.replace(/\b(am|pm)\b/, (match) => match.toUpperCase())

	return formatted
}

export { convertToIST }
