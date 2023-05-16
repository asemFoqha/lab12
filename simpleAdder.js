module.exports = function simple(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(`
    <!DOCTYPE html>
      <html>
      <head><meta charset=\"utf-8\"/>
      <title>Calculator Web Site</title>
      </head>
      <body>
      <form action="http://localhost:8080/add.js">
      <div>
        Enter two numbers <input type="text" name="first" /><br />
        <input type="text" name="second" /><br />
        <input type="submit" value="Click" />
      </div>
    </form>
      </body>
      </html>

       `);
  return res.end();
};
