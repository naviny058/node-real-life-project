const notifier = require('node-notifier');
const path = require('path');

function remindToDrinkWater() {
    notifier.notify({
        title: 'Drink Water Reminder',
        message: 'Navin It\'s time to drink water! Stay hydrated.',
        icon: path.join(__dirname, "./", 'water.jpg'), // Replace with the actual path to your custom icon
    });
}

// Set a reminder every 15 minutes (in milliseconds)
const reminderInterval = 20 * 60 * 1000;

// Initial reminder
remindToDrinkWater();

// Schedule reminders every 15 minutes
setInterval(remindToDrinkWater, reminderInterval);
