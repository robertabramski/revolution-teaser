$(document).ready(function() {
  var selectedLanguage = 'fr';
  var languageOptions = {
    fr: {
      buttons: [{fr:'Fran&ccedil;ais'}, {en:'Anglais'}],
      text: 'Vive la r&eacute;volution!',
      cta: 'Voir la source pour les exigences de salaire.'
    },
    en: {
      buttons: [{fr:'French'}, {en:'English'}],
      text: 'Long live the revolution!',
      cta: 'View source for salary requirements.'
    }
  };

  var body = $('body');
  var stars = body.append('<div class="stars" />');
  var mainHeading = $('h1');
  var languageOptionContainer = $('div.languages');
  var viewSourceMessage = $('small');
  var languageButtons = $('a.lang');
  var viewSourceTimer = null;

  viewSourceMessage.fadeOut(0);
  setLanguage();

  $(document).on('mousemove', function(event) {
    if(viewSourceTimer) {
      clearTimeout(viewSourceTimer);
    }

    viewSourceMessage.fadeIn(300);
    viewSourceTimer = setTimeout(function() {
      viewSourceMessage.fadeOut(300);
      clearTimeout(viewSourceTimer);
    }, 3000);
  });

  function setLanguage() {
    var selectedLang = languageOptions[selectedLanguage];

    body.removeClass().addClass(selectedLanguage);
    mainHeading.html(selectedLang.text);
    viewSourceMessage.html(selectedLang.cta);
    languageOptionContainer.empty();

    selectedLang.buttons.forEach(function(buttonName) {
      var link = $('<a />');
      var newSelectedLanguage = Object.keys(buttonName)[0];

      link.appendTo(languageOptionContainer)
        .html(buttonName[Object.keys(buttonName)[0]])
        .attr('href', 'javascript:void(0)')
        .on('click', function() {
          selectedLanguage = newSelectedLanguage;
          setLanguage();
        });

      if(selectedLanguage === newSelectedLanguage) {
        link.addClass('active');
      }
    });
  }
});
