import { ContactCollection } from '../db/models/contact.js';
import { SORT_ORDER } from '../contacts/index.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllContacts = async ({
  page = 1,
  perPage = 10,
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',
  filter = {},
}) => {
  try {
    const limit = perPage;
    const skip = (page - 1) * perPage;
    const contactQuery = ContactCollection.find();
    if (filter.type) {
      contactQuery.where('contactType').equals(filter.type);
    }
    if (filter.isFavourite !== undefined) {
      contactQuery.where('isFavourite').equals(filter.isFavourite);
    }

    const [contactsCount, contacts] = await Promise.all([
      ContactCollection.find().merge(contactQuery).countDocuments(),
      contactQuery
        .skip(skip)
        .limit(limit)
        .sort({ [sortBy]: sortOrder })
        .exec(),
    ]);

    const paginationData = calculatePaginationData(
      contactsCount,
      perPage,
      page,
    );

    return {
      date: contacts,
      ...paginationData,
    };
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
};

export const getContactByID = async (contactId) => {
  const contact = await ContactCollection.findOne({ _id: contactId });
  return contact;
};

export const createContacts = async (payload) => {
  const contact = await ContactCollection.create(payload);
  return contact;
};
export const updateContact = async (contactId, payload, options = {}) => {
  const opaResult = await ContactCollection.findByIdAndUpdate(
    { _id: contactId },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );
  if (!opaResult || !opaResult.value) return null;

  return {
    contact: opaResult.value,
    isNew: Boolean(opaResult?.lastErrorObject?.upserted),
  };
};

export const deleteContact = async (contactId) => {
  const contact = await ContactCollection.findByIdAndDelete({
    _id: contactId,
  });
  return contact;
};
