import { ContactCollection } from '../db/models/contact.js';

export const getAllContacts = async () => {
  try {
    const contacts = await ContactCollection.find();
    console.log('Contacts:', contacts);
    return contacts;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
};
export const getContactByID = async (contactId) => {
  const contact = await ContactCollection.findById(contactId);
  return contact;
};
