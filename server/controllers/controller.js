const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const { username, password } = req.body;
        const { session } = req;
        const db = req.app.get('db');
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        let newUser = await db.user.register({username: username, password: hash, profile_pic: `https://robohash.org/${username}.png`})
        newUser = newUser[0];
        session.user = {...newUser};
        res.status(201).send(session.user);
    },
    login: async (req, res) => {
        const { username, password } = req.body;
        const { session } = req;
        const db = req.app.get('db');
        let user = await db.user.login({username: username});
        user = user[0];
        if (!user) {
            return res.sendStatus(404)
        }
        const foundUser = bcrypt.compareSync(password, user.password);
        if (foundUser) {
            delete user.password;
            session.user = user;
            res.status(200).send(session.user);
        } else {
            res.sendStatus(401)
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    },
    getUser: (req, res) => {
        const { user } = req.session;
        if (user) {
            res.status(200).send(user)
        } else {
            res.sendStatus(401)
        }
    },
    getPosts: (req, res) => {
        const db = req.app.get('db');
        db.user.get_posts()
        .then(posts => {res.status(200).send(posts)})
        .catch(err => {res.status(500).send('error getting posts')})
    },
    getPost: (req, res) => {
        const db = req.app.get('db');
        const id = Number(req.params.id);
        console.log(id)
        db.user.get_post([id])
        .then(post => {res.status(200).send(post)})
        .catch(err => {res.status(500).send('error getting post')})
    }
}