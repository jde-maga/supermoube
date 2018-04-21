const cron = require('cron');

const cronUpdateStudents = new cron.CronJob('* * * * * *', () => {
    console.log('updating cron');
}, () => {
    console.log('updated students')
}, true, 'Europe/Paris');

module.exports = {
    cronUpdateStudents,
}