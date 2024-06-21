const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require("./modals/User")
const bcrypt = require('bcrypt');
const path = require('path');
const router = express.Router();
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
const cpanelToken = 'CC8IC50H1B1RJISRRW81K21DFV4ICTIR';
const emailQuota = 1024; // Quota in MB

router.post("/register", async (req, res) => {
    const { username, password } = req.body
    const userDoc = await User.create({ username: username, password: bcrypt.hashSync(password, salt) })
    res.json(userDoc)
})

router.post('/login', async (req, res) => {
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

router.post('/addEmail', async (req, res) => {
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
        res.status(500).json(error);
    }
})


router.get('/emails', async (req, res) => {
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
            res.status(200).json(response?.data?.data);
        } else {
            res.status(400).json(response.data);
        }
    } catch (error) {
        res.status(500).json(error);
    }
})

router.post('/deleteEmail', async (req, res) => {
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
            res.status(200).json(response?.data?.data);
        } else {
            res.status(400).json(response.data);
        }
    } catch (error) {
        res.status(500).json(error);
    }
})

router.get('/profile', (req, res) => {
    const { token } = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) throw err;
        res.json(info);
    })
});

app.use("/api", router)

app.use(express.static(path.join(__dirname, 'react-app/build')));

app.use((req, res, next) => {
    if (/(.ico|.js|.css|.jpg|.png|.map)$/i.test(req.path)) {
        next();
    } else {
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        res.header('Expires', '-1');
        res.header('Pragma', 'no-cache');
        res.sendFile(path.join(__dirname, 'react-app/build', 'index.html'));
    }
});

app.listen('8080', () => {
    console.log("app started");
    // console.log(Register_Route)
})