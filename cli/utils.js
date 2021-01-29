const fs = require('fs');
const path = require('path');
const contacts_location = path.join(__dirname, './contacts.json');

const getContacts = () => {
	const contacts = fs.readFileSync(contacts_location).toString();
	return JSON.parse(contacts);
};
const saveContacts = contacts => {
	fs.writeFileSync(contacts_location, JSON.stringify(contacts, null, 2));
};

saveContacts();

module.exports = { saveContacts, getContacts, saveContacts };
