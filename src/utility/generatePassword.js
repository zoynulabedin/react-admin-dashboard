const generateRandomPassword = (length = 16, options = {}) => {
	const defaults = {
		uppercase: true,
		lowercase: true,
		numbers: true,
		symbols: true,
		excludeSimilar: true,
		excludeAmbiguous: true,
		customCharset: "",
	};

	const charset = {
		uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
		lowercase: "abcdefghijklmnopqrstuvwxyz",
		numbers: "0123456789",
		symbols: "!@#$%^&*()-_=+",
		custom: options.customCharset,
	};

	const settings = { ...defaults, ...options };
	let availableCharset = "";

	if (settings.uppercase) availableCharset += charset.uppercase;
	if (settings.lowercase) availableCharset += charset.lowercase;
	if (settings.numbers) availableCharset += charset.numbers;
	if (settings.symbols) availableCharset += charset.symbols;
	if (settings.customCharset) availableCharset += settings.customCharset;

	if (settings.excludeSimilar) {
		availableCharset = availableCharset.replace(/[iIlLoO01]/g, "");
	}

	if (settings.excludeAmbiguous) {
		availableCharset = availableCharset.replace(
			/[{}[]()\/\\'`"~<>|;:,.?]/g,
			""
		);
	}

	let password = "";

	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * availableCharset.length);
		password += availableCharset[randomIndex];
	}

	return password;
};

export default generateRandomPassword;
