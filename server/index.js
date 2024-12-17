import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = 3001;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Endpoint pour envoyer l'e-mail
app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Tous les champs sont requis.' });
    }

    try {
        // Configurer le transporteur Nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Utilise un service comme Gmail ou configure ton SMTP
            auth: {
                user: process.env.EMAIL, // Email depuis le fichier .env
                pass: process.env.EMAIL_PASSWORD, // Mot de passe ou app password
            },
        });

        // Contenu de l'e-mail
        const mailOptions = {
            from: email,
            to: process.env.RECIPIENT_EMAIL, // L'adresse qui recevra les messages
            subject: `Nouveau message de ${name}`,
            text: `Nom: ${name}\nEmail: ${email}\nMessage:\n${message}`,
        };

        // Envoyer l'e-mail
        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'E-mail envoyé avec succès !' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur est survenue lors de l\'envoi de l\'e-mail.' });
    }
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
