function showHide() {
  const form = document.getElementById('default_value');

  if (form.style.visibility === 'hidden') {
    form.style.visibility = 'visible';
  } else {
    form.style.visibility = 'hidden';
  }
}

function update() {
 default_valueSubtracted = document.getElementById('default_valueSubtracted').value;

}