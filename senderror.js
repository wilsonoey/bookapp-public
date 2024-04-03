const { nanoid } = require("nanoid");
const connection = require("./connection");
const { servererror, success } = require("./response");

async function senderror (req, res, errorparams, name) {
  const { stack } = errorparams;
  const id = nanoid(25);
  const createdat = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
  const data = {
    iderror: id,
    detailerror: `Error at ${name} because ${stack}`,
    createdaterror: createdat,
  };
  const query = 'INSERT INTO error SET ?';
  const { languageCode } = req.params;
  const setLang = languageCode === 'id' ? 'id' : 'en';
  if (req.i18n.setLocale(setLang)) {
    connection.query(query, data, (error) => {
      res.response(success(req.i18n.__('status-finish'), req.i18n.__('message-add-error-success'))).code(201);
    });
  }
  return res.response(servererror(stack));
}

module.exports = { senderror };
