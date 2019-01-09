const crypto = require('crypto');
function validatePassword(secret, format) {
    let parts = format.split('$')
    return parts[4] == crypto.pbkdf2Sync(secret, Buffer.from(parts[3].replace(/\./g, '+') + '='.repeat(parts[3].length % 3), 'base64'),
        +parts[2], 64, parts[1].split('-')[1]).toString('base64').replace(/=/g, '').replace(/\+/g, '.');
};
console.log(validatePassword('test','$pbkdf2-sha512$25000$i3Fu7f2f07qXEgKgFKK09g$87C6ELXYSfJ70VuKwgGuJSglVmi0rLJGwv7lEFR1H0JabfsX0kFrSULImFjP4HHibsYolgas5rVqEO9X8WpLxA'));
