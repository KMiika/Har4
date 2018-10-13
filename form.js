function showLanguage() {
  var language=document.getElementById('language')
  var SelectedLanguage=language.options[language.selectedIndex].text;
  document.getElementById('selected_language').value=SelectedLanguage;
}

function showPhone(phone) {
  document.getElementById('selected_phone').value = phone;
}
