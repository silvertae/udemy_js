function Encryptor() {
	let obj = {};

	let keyword = document.getElementById('keyword');
	let text = document.getElementById('normlaTxt');
	let encryption = true;

	const N_ALPHABET = 26;
	const extraCharacters = [' ', '.', '?', '!', '%', '#', "'", '&', '$', '@', ':', '/'];
	obj.chars = [];
	// 알파벳 대소문자 추가
	for (let c = 'a'.charCodeAt(0); c <= 'z'.charCodeAt(0); c++) {
		obj.chars.push(String.fromCharCode(c));
	}
	for (let c = 'A'.charCodeAt(0); c <= 'Z'.charCodeAt(0); c++) {
		obj.chars.push(String.fromCharCode(c));
	}
	// 숫자 추가
	for (let d = 0; d <= 9; d++) {
		obj.chars.push(d.toString());
	}
	// 특수문자 추가
	for (let j = 0; j < extraCharacters.length; j++) {
		obj.chars.push(extraCharacters[j]);
	}
	obj.nchars = obj.chars.length;

	obj.numberOf = function (ch) {
		let code = ch.charCodeAt(0);
		if (code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0)) {
			return code - 'a'.charCodeAt(0);
		} else if (code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0)) {
			return N_ALPHABET + code - 'A'.charCodeAt(0);
		} else if (code >= '0'.charCodeAt(0) && code <= '9'.charCodeAt(0)) {
			return 2 * N_ALPHABET + code - '0'.charCodeAt(0);
		} else {
			for (let k = 0; k < extraCharacters.length; k++) {
				if (ch === extraCharacters[k]) {
					return 2 * N_ALPHABET + 10 + k;
				}
			}
			return null;
		}
	};

	obj.shift = function (ch, n) {
		let num = this.numberOf(ch);
		if (num === null) return ch;
		num = (num + n + this.nchars) % this.nchars;
		return this.chars[num];
	};

	obj.encrypt = function (text, keyword, encryption) {
		let cipherText = '';
		let nkey = keyword.length;
		for (let i = 0, ikey = 0; i < text.length; i++, ikey++) {
			ikey %= nkey;
			let nshift = this.numberOf(keyword[ikey]);
			if (!encryption) nshift *= -1;
			cipherText += this.shift(text[i], nshift);
		}
		return cipherText;
	};

	return obj;
}
