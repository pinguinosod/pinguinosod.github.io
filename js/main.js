$(document).ready(function() {
	// detect the browser's language
	var userLang = navigator.language || navigator.userLanguage; 
	// if the browser's language is in the website available languages
	if ($("#selLocale option[value="+userLang.substring(0,2)+"]").length >0) {
		// set the website language to the browser's language
		$("#selLocale option[value="+userLang.substring(0,2)+"]").prop('selected', true);
		updateLocale();
	}
	// Starting animations
	$("#top-banner").css('transform', 'translate(0px, 0px)');
	var time = 400;
	$(".card").each(function() {
		var obj = $(this)
		setTimeout( function(){ $(obj).css('transform', 'translate(0px, 0px)'); }, time);
		time += 400;
	});
});

// Ready translated locale messages
const messages = {
  en: {
  	languageName: 'English',
    myShortDescription: 'My name is David Cautin. I currently work at the IT department of <a href="http://www.unap.cl/" target="_blank">Arturo Prat University</a> as part of the software development team. I work as frontend web developer, role in which i have been able to affect the experience of hundreds of students and employees of the university.'
  },
  es: {
  	languageName: 'Español',
    myShortDescription: 'Mi nombre es David Cautin. Actualmente trabajo en la unidad de informática de la <a href="http://www.unap.cl/" target="_blank">Universidad Arturo Prat</a>, como parte del equipo de desarrollo de software. Trabajo como desarrollador web, rol en el que he podido beneficiar la experiencia de cientos de estudiantes y empleados de la universidad.'
  },
  it: {
  	languageName: 'Italiano',
  	myShortDescription: 'Mi chiamo David Cautin. Attualmente lavoro presso il dipartimento IT della <a href="http://www.unap.cl/" target="_blank">Università Arturo Prat</a> come parte del team di sviluppo del software. Lavoro come sviluppatore web frontend, ruolo in cui sono stato in grado di influenzare l\'esperienza di centinaia di studenti e dipendenti dell\'università.'
  }
  /*de: {
  	languageName: 'Deutsch',
  	jobRole: 'Web-Entwickler',
  	myShortDescription: ''
  },*/
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en', // set default locale
  messages, // set locale messages
})

var localesList = [];
for(var propertyName in messages) {
  // propertyName is what you want
  // you can get the value like this: myObject[propertyName]
  localesList.push({
    code: propertyName,
    languageName: messages[propertyName].languageName
  });
}

// Create a Vue instance with `i18n` option
new Vue({
  i18n,
  data: {
    selected: i18n.locale,
    locales: localesList
  }
}).$mount('#app');
// Now the app has started!

function updateLocale() {
	i18n.locale = document.getElementById('selLocale').value;
}
