const moment = require('moment');

module.exports = {
  format_date: function (date) {
    return moment(date).format('MMMM Do YYYY, h:mm a');
  },
};
