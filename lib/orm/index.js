const adminOrm = require('./admin_orm');
const servantOrm = require('./servant_orm');
const authOrm = require('./auth_orm');
const menuOrm = require('./menu_orm');
const classOrm = require('./classes_orm');
const attendeesOrm = require('./attendees_orm');
module.exports = {
    admin:adminOrm,
    servant:servantOrm,
    auth: authOrm,
    menu:menuOrm,
    class: classOrm,
    attendees: attendeesOrm
}
   