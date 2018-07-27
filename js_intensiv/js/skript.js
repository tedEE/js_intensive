function myFirstApp(name, age, num) {
	alert("Привет, меня зовут " + name + " и это моя первая программа!");

	function showSkills() {
		let skills = [
			'html',
			'css',
			'php',
			'mnemonik'
		];

		document.write('Я владею : <ul>');

		for (let i = 0; i < skills.length; i++) {
			document.write('<li>'+skills[i]+'</li>');
		}

		document.write(' </ul>');
	}

	showSkills();

	function checkAge() {
		if (age > 18) {
			document.write("И я совершеннолетний)))");
		}else {
			document.write('Я спиногрыз(((');
		}
	}

	checkAge();

	function calc() {
		let res = num*num;
		alert(res);
	}

	calc();
}


myFirstApp('stas', 13, 3);