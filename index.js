const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
const { MongoClient, ServerApiVersion } = require('mongodb');

const userName = "rukonbds";
const password = "XTr09jKwugPv4br7"

const uri = `mongodb+srv://${userName}:${password}@cluster0.eyuymmu.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        const blogCollection = client.db("mongodb-practice").collection("blogs");

        app.post('/blogs', async (req, res) => {
            let blog = req.body;
            const result = await blogCollection.insertOne(blog);
            console.log(result);

        })

        app.get('/blogs', async (req, res) => {
            const cursor = blogCollection.find({})
            const blogs = await cursor.toArray()
            console.log(blogs);
            res.send(blogs);
        })

    } finally {
        //await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send("Server is running");
})







app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})