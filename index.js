const Handlebars = require("handlebars");
const fs = require('fs')

const context = { title: "My New Post", body: "This is my first post!" };

const source = fs.readFileSync('assets/index.handlebars', 'utf8');
console.log(source);
const template = Handlebars.compile(source);
const html = template(context);

const writer = fs.createWriteStream('new.html')
writer.write(html)