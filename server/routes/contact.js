import express from 'express';
import { validateContact } from '../middleware/validateContact.js';
import { sendContactEmail } from '../services/emailService.js';

export const contactRouter = express.Router();

contactRouter.post('/', validateContact, async (req, res, next) => {
  try {
    const { name, email, message } = req.body;
    
    await sendContactEmail({
      name,
      email,
      message
    });

    res.status(200).json({ 
      success: true, 
      message: 'Message envoyé avec succès' 
    });
  } catch (error) {
    next(error);
  }
});