const { format } = require('date-fns')

module.exports = {
  formatDate: (date) => format(new Date(date), 'MMMM dd, yyyy'),
}
