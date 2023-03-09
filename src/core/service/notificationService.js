function createNotification(title) {
  if (!("Notification" in window)) {
    // Check if the browser supports notifications
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    // Create and show the notification
    const img = '/task-logo.png';
    const text = `HEY! Your task "${title}" is now overdue.`;
    const notification = new Notification('To do list', { body: text, icon: img });
    return true;
    // We need to update the value of notified to 'yes' in this particular data object, so the
    // notification won't be set off on it again
  } else if (Notification.permission !== "denied") {
    // We need to ask the user for permission
    Notification.requestPermission().then((permission) => {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        const notification = new Notification("Hi there!");

        // …
      }
    });
    return false;
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them anymore.
}

function askNotificationPermission() {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    console.log("This browser does not support notifications.");
  } else if (checkNotificationPromise()) {
    Notification.requestPermission().then((permission) => {
    });
  } else {
    Notification.requestPermission((permission) => {
    });
  }
}

function checkNotificationPromise() {
  try {
    Notification.requestPermission().then();
  } catch (e) {
    return false;
  }
  return true;
}


// Check whether the deadline for each task is up or not, and responds appropriately
function checkDeadlines(reminder) {
  // First of all check whether notifications are enabled or denied
  if (Notification.permission === 'denied' || Notification.permission === 'default') {
    return;
  }

  // Grab the current time and date
  const now = new Date();

  // From the now variable, store the current minutes, hours, day of the month, month, year and seconds
  const minuteCheck = now.getMinutes();
  const hourCheck = now.getHours();
  const dayCheck = now.getDate(); // Do not use getDay() that returns the day of the week, 1 to 7
  const monthCheck = now.toLocaleString('default', { month: 'long' });
  const yearCheck = now.getFullYear(); // Do not use getYear() that is deprecated.

  const { hr, min, day, month, year, title } = reminder;
  let matched = parseInt(hr) === hourCheck;
  matched &&= parseInt(min) === minuteCheck;
  matched &&= parseInt(day) === dayCheck;
  matched &&= month === monthCheck;
  matched &&= parseInt(year) === yearCheck;
  if (matched) {
    // If the numbers all do match, run the createNotification() function to create a system notification
    // but only if the permission is set
    if (Notification.permission === 'granted') {
      return createNotification(title);
    }
  }
};

export { askNotificationPermission, checkDeadlines };