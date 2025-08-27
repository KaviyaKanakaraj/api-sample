const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const app = express();
const port = process.env.PORT || 3000;
const host = "65.0.199.244";
app.use(express.json());
app.use(cors());

const data = require('./data/user-data');

app.get("/getDataById/:id", (req, res) => {
    const id = parseInt(req.params.id);
    console.log(`Received request for ID: ${id}`);
    const item = data.find((obj) => obj.id === id);
    if (item) {
        console.log(`Found item: ${JSON.stringify(item)}`);
        res.json(item);
    } else {
        console.log(`ID ${id} not found`);
        res.status(404).json({ error: "ID not found" });
    }
});

app.get("/getData", (req, res) => {
    console.log("Received request for all data");
    res.json(data);
});

const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "API Sample",
            version: "1.0.0",
            description: "API documentation for the sample project",
        },
        servers: [
            {
                url: `http://${host}:${port}`,
            },
        ],
    },
    apis: [__filename],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

/**
 * @swagger
 * /getDataById/{id}:
 *   get:
 *     summary: Get data by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the item to retrieve
 *     responses:
 *       200:
 *         description: Item found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       404:
 *         description: ID not found
 */

/**
 * @swagger
 * /getData:
 *   get:
 *     summary: Get all data
 *     responses:
 *       200:
 *         description: A list of all data
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use((req, res) => {
    console.log(`404 Error - Path not found: ${req.originalUrl}`);
    res.status(404).sendFile(__dirname + "/frontend/error.html");
});

app.listen(port, () => {
    console.log(`Server running att http://${host}:${port}`);
    console.log(`Swagger docs available at http://${host}:${port}/api-docs`);
});
