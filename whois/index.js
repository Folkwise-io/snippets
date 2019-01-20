const whois = require('whois-api');

const DOMAIN_NAME = 'google.com';

whois.lookup(DOMAIN_NAME, (err, {updated_date, creation_date, expiration_date}) => {
  if (err) {
    console.error('Something went wrong', err);
    return;
  }

  console.log(`Queried ${DOMAIN_NAME}. Results:`);
  console.log(`Updated Date:  ${updated_date}`);
  console.log(`Creation Date: ${creation_date}`);
  console.log(`Expiration Date: ${expiration_date}`);
})

/*
Queried google.com. Results:
Updated Date:  2018-02-21T18:36:40Z
Creation Date: 1997-09-15T04:00:00Z
Expiration Date: 2020-09-14T04:00:00Z
*/