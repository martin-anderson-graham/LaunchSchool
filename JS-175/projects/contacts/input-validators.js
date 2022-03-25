const { builtinModules } = require("module");

function validatorArray(contactData) {
  return [
  (req, res, next) => {
    res.locals.errorMessages = [];
    req.body.firstName = req.body.firstName.trim();
    req.body.lastName = req.body.lastName.trim();
    req.body.phoneNumber = req.body.phoneNumber.trim();
    next();
  }, 
  (req, res, next) => {
    let validName = (name) => {
      return /^[a-z]+$/i.test(name)
    };

    if(!(validName(req.body.firstName) && validName(req.body.lastName))) {
      res.locals.errorMessages.push("Names can only contain letters or '-'");
    }
    next();
  },
  (req, res, next) => {
    if (req.body.firstName.length === 0) {
      res.locals.errorMessages.push("First name is required.");
    } else if (req.body.firstName.length > 25) {
      res.locals.errorMessages.push(`First name is too long (25 character limit)`);
    } else {
      res.locals.validFirstName = req.body.firstName;
    }

    next();
  },
  (req, res, next) => {
    if (req.body.lastName.length === 0) {
      res.locals.errorMessages.push("Last name is required.");
    } else if (req.body.lastName.length > 25) {
      res.locals.errorMessages.push("Last name is too long (25 character limit)");
    } else {
      res.locals.validLastName = req.body.lastName;
    }

    next();
  },
  (req, res, next) => {
    if (req.body.phoneNumber.length === 0) {
      res.locals.errorMessages.push("Phone number is required.");
    } else if (!/^\d\d\d-\d\d\d-\d\d\d\d$/.test(req.body.phoneNumber)) {
      res.locals.errorMessages.push("Invalid phone number format. Use ###-###-####.");
    } else {
      res.locals.validPhoneNumber = req.body.phoneNumber;
    }

    next();
  },
  (req, res, next) => {
    contactData.forEach(contact => {
      if(`${req.body.firstName} ${req.body.lastName}`=== 
            `${contact.firstName} ${contact.lastName}`){
              res.locals.errorMessages.push("That contact already exists.")
            }
    }) 
    next();
  },
  (req, res, next) => {
    if (res.locals.errorMessages.length > 0) {
      let dataToPass = {
        errorMessages: res.locals.errorMessages,
      };
      dataToPass.firstName = res.locals.validFirstName || '';
      dataToPass.lastName = res.locals.validLastName || '';
      dataToPass.phoneNumber = res.locals.validPhoneNumber || '';
      
      res.render("new-contact", dataToPass);
    } else {
      next();
    }
  },
  (req, res) => {
    contactData.push({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
    });

    res.redirect("/contacts");
  }
];
}

module.exports = validatorArray;