const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require("./modals/User")
const bcrypt = require('bcrypt');
const salt = 10;
const app = express();
const jwt = require('jsonwebtoken');
const secret = "gsjhkldafsdghfbjkladsbvjklbxcljnvzbjhzsdbjlvsjhdfbgasjkdfh";
const dbURL = "mongodb+srv://nafeelaaqib:K0tJZsEHXTvMOxpb@cluster0.jfsbu9f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
app.use(cors());
app.use(express.json())

mongoose.connect(dbURL);


const axios = require('axios');

// Replace these with your actual cPanel details
const cpanelUrl = 'https://hwsrv-1223902.hostwindsdns.com:2083';
const cpanelUser = 'salesdriver';
const cpanelToken = 'ZVZ64YCZZYLDZ9NC02TGSOAFSAL7TQGD';
const emailQuota = 1024; // Quota in MB

app.post("/register", async (req, res) => {
    const { username, password } = req.body
    const userDoc = await User.create({ username: username, password: bcrypt.hashSync(password, salt) })
    res.json(userDoc)
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const userDoc = await User.findOne({ username });
    console.log(userDoc, username)

    if (userDoc) {
        const passOk = bcrypt.compareSync(password, userDoc.password);
        if (passOk) {
            jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json({ id: userDoc._id, username });
            })
        }
    }
    else {
        res.status(400).json('Wrong credentials')
    }
});

app.post('/addEmail', async (req, res) => {
    const { user, domain, password } = req.body
    try {
        const response = await axios({
            method: 'POST',
            url: `${cpanelUrl}/execute/Email/add_pop`,
            headers: {
                'Authorization': `cpanel ${cpanelUser}:${cpanelToken}`,
                'Content-Type': 'application/json'
            },
            data: {
                email: user,
                domain: domain,
                password: password,
                quota: emailQuota
            }
        });

        if (response.data.status === 1) {
            res.status(200).json(response.data);
        } else {
            res.status(400).json(response.data);
        }
    } catch (error) {
        console.error('Error:', error);
    }
})


app.get('/emails', async (req, res) => {
    try {
        const response = await axios({
            method: 'GET',
            url: `${cpanelUrl}/execute/Email/list_pops`,
            headers: {
                'Authorization': `cpanel ${cpanelUser}:${cpanelToken}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.data.status === 1) {
            res.status(200).json(response.data.data);
        } else {
            res.status(400).json(response.data);
        }
    } catch (error) {
        console.error('Error:', error);
    }
})

app.post('/deleteEmail', async (req, res) => {
    const { email } = req.body;

    try {
        const response = await axios({
            method: 'POST',
            url: `${cpanelUrl}/execute/Email/delete_pop`,
            headers: {
                'Authorization': `cpanel ${cpanelUser}:${cpanelToken}`,
                'Content-Type': 'application/json'
            },
            data: {
                email: email,
            }
        });

        if (response.data.status === 1) {
            res.status(200).json(response.data.data);
        } else {
            res.status(400).json(response.data);
        }
    } catch (error) {
        console.error('Error:', error);
    }
})

app.get('/profile', (req, res) => {
    const { token } = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) throw err;
        res.json(info);
    })
});

app.listen('4000', () => {
    console.log("app started");
    // console.log(Register_Route)
})