const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Only change code below this line
  let onlineUsers = 0;
  for (let user in usersObj) {
    let onlineStatus = usersObj[user]["online"];
    if (onlineStatus) {
      onlineUsers += 1;
    }
  }
  return onlineUsers;
  // Only change code above this line
}

console.log(countOnline(users));