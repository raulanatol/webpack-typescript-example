function hello(username: string) {
  return `Hello ${username}`;
}

document.body.innerHTML = '<h1>' + hello('pepe') + '</h1>';
