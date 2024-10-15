const aboutController = (req, res) => {
    const name = "Abhay";
    const branch = "IT";

    // Construct the HTML response dynamically
    const htmlResponse = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>Hello, this is a template</h1>
            <h2>${name}</h2>
            <h2>${branch}</h2>
        </body>
        </html>
    `;

    // Send the HTML response
    res.send(htmlResponse);
};

module.exports = aboutController;
