function buat_login() {
  var a = document.getElementById('X')
  a.parentElement.removeChild(a);
  var b = document.createElement("p")
  b.className = "tulisan_login";
  b.innerHTML = "SILAHKAN MENDAFTAR";
  var element = document.getElementsByTagName('div')[0];
  element.appendChild(b)
  var form = document.createElement("FORM");
  element.appendChild(form);
  var label = document.createElement("label");
  label.innerHTML = "Nama User";
  form.appendChild(label);
  var input_username = document.createElement("input");
  input_username.type = "text";
  input_username.name = "username";
  input_username.className = "form_login";
  input_username.placeholder = "Nama User..";
  form.appendChild(input_username);
  var label2 = document.createElement("label");
  label2.innerHTML = "Nomor Handphone";
  form.appendChild(label2);
  var input_password = document.createElement("input");
  input_password.type = "tel";
  input_password.name = "tel";
  input_password.className = "form_login";
  input_password.placeholder = "Nomor Handphone..";
  form.appendChild(input_password);
  var user = document.createElement("label");
  user.innerHTML = "Username"
  form.appendChild(user);
  var name = document.createElement("input");
  name.type = "text";
  name.name = "username";
  name.className = "form_login";
  name.placeholder = "Username atau email..";
  form.appendChild(name);
  var pas = document.createElement("label");
  pas.innerHTML = "password";
  form.appendChild(pas);
  var word = document.createElement("input");
  word.type = "password";
  word.name = "password";
  word.className = "form_login";
  word.placeholder = "password...";
  form.appendChild(word);
  var tombol = document.createElement("input");
  tombol.type = "submit";
  tombol.className = "tombol_login";
  form.appendChild(tombol);
}
