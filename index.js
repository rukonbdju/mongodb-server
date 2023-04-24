const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
const { MongoClient, ServerApiVersion } = require('mongodb');

const blogs = [
    {
        id: "1",
        timestamp: "Mon Apr 24 2023",
        title: "First Post",
        email: "firstpost@example.com",
        blog: "Remote work has become more popular in recent years, and I have had the opportunity to work remotely for the past year. While there are many benefits to working from home, such as the flexibility and lack of commute, there are also some challenges. One of the biggest challenges for me has been staying motivated and focused, but I have found that setting a schedule and creating a dedicated workspace can help. Overall, I have enjoyed my experience with remote work and would recommend it to others.",
    },
    {
        id: "2",
        timestamp: "Mon Apr 24 2023",
        title: "Second Post",
        email: "secondpost@example.com",
        blog: "Remote work has become more popular in recent years, and I have had the opportunity to work remotely for the past year. While there are many benefits to working from home, such as the flexibility and lack of commute, there are also some challenges. One of the biggest challenges for me has been staying motivated and focused, but I have found that setting a schedule and creating a dedicated workspace can help. Overall, I have enjoyed my experience with remote work and would recommend it to others.",
    },
    {
        id: "3",
        timestamp: "Mon Apr 24 2023",
        title: "Third Post",
        email: "thirdpost@example.com",
        blog: "Remote work has become more popular in recent years, and I have had the opportunity to work remotely for the past year. While there are many benefits to working from home, such as the flexibility and lack of commute, there are also some challenges. One of the biggest challenges for me has been staying motivated and focused, but I have found that setting a schedule and creating a dedicated workspace can help. Overall, I have enjoyed my experience with remote work and would recommend it to others.",
    },
    {
        id: "4",
        timestamp: "Mon Apr 24 2023",
        title: "Fourth Post",
        email: "fourthpost@example.com",
        blog: "Remote work has become more popular in recent years, and I have had the opportunity to work remotely for the past year. While there are many benefits to working from home, such as the flexibility and lack of commute, there are also some challenges. One of the biggest challenges for me has been staying motivated and focused, but I have found that setting a schedule and creating a dedicated workspace can help. Overall, I have enjoyed my experience with remote work and would recommend it to others.",
    },
    {
        id: "5",
        timestamp: "Mon Apr 24 2023",
        title: "Fifth Post",
        email: "fifthpost@example.com",
        blog: "Remote work has become more popular in recent years, and I have had the opportunity to work remotely for the past year. While there are many benefits to working from home, such as the flexibility and lack of commute, there are also some challenges. One of the biggest challenges for me has been staying motivated and focused, but I have found that setting a schedule and creating a dedicated workspace can help. Overall, I have enjoyed my experience with remote work and would recommend it to others.",
    },
    {
        id: "6",
        timestamp: "Mon Apr 24 2023",
        title: "Sixth Post",
        email: "sixthpost@example.com",
        blog: "Remote work has become more popular in recent years, and I have had the opportunity to work remotely for the past year. While there are many benefits to working from home, such as the flexibility and lack of commute, there are also some challenges. One of the biggest challenges for me has been staying motivated and focused, but I have found that setting a schedule and creating a dedicated workspace can help. Overall, I have enjoyed my experience with remote work and would recommend it to others.",
    },
    {
        id: "7",
        timestamp: "Mon Apr 24 2023",
        title: "Seventh Post",
        email: "seventhpost@example.com",
        blog: "Remote work has become more popular in recent years, and I have had the opportunity to work remotely for the past year. While there are many benefits to working from home, such as the flexibility and lack of commute, there are also some challenges. One of the biggest challenges for me has been staying motivated and focused, but I have found that setting a schedule and creating a dedicated workspace can help. Overall, I have enjoyed my experience with remote work and would recommend it to others.",
    },
    {
        id: "8",
        timestamp: "Mon Apr 24 2023",
        title: "Eighth Post",
        email: "eighthpost@example.com",
        blog: "Remote work has become more popular in recent years, and I have had the opportunity to work remotely for the past year. While there are many benefits to working from home, such as the flexibility and lack of commute, there are also some challenges. One of the biggest challenges for me has been staying motivated and focused, but I have found that setting a schedule and creating a dedicated workspace can help. Overall, I have enjoyed my experience with remote work and would recommend it to others.",
    },
    {
        id: "9",
        timestamp: "Mon Apr 24 2023",
        title: "Ninth Post",
        email: "ninthpost@example.com",
        blog: "Remote work has become more popular in recent years, and I have had the opportunity to work remotely for the past year. While there are many benefits to working from home, such as the flexibility and lack of commute, there are also some challenges. One of the biggest challenges for me has been staying motivated and focused, but I have found that setting a schedule and creating a dedicated workspace can help. Overall, I have enjoyed my experience with remote work and would recommend it to others.",
    },
    {
        id: "10",
        timestamp: "Mon Apr 24 2023",
        title: "Tenth Post",
        email: "tenthpost@example.com",
        blog: "Remote work has become more popular in recent years, and I have had the opportunity to work remotely for the past year. While there are many benefits to working from home, such as the flexibility and lack of commute, there are also some challenges. One of the biggest challenges for me has been staying motivated and focused, but I have found that setting a schedule and creating a dedicated workspace can help. Overall, I have enjoyed my experience with remote work and would recommend it to others.",
    }
]


//mongodb
const userName = "rukonbds";
const password = "XTr09jKwugPv4br7"

const uri = `mongodb+srv://rukonbds:${password}@cluster0.eyuymmu.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        //await client.connect();
        const blogCollection = client.db("mongodb-practice").collection("blogs");

        app.post('/blogs', async (req, res) => {
            let blog = req.body;
            const result = await blogCollection.insertOne(blog);
            console.log(result);

        })

        app.get('/blogs', async(req, res) => {
            const cursor = blogCollection.find({})
            const blogs=await cursor.toArray()
            console.log(blogs);
            res.send(blogs);
        })

    } finally {
        // Ensures that the client will close when you finish/error
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