const BIN_ID = "6926e1acd0ea881f400142a8 ";
const MASTER_KEY = "$2a$10$Dsw5WesUiibOPEPQObFxCO2vRTM7eXLTbZQZKjDG/aSqAk9g0y4xG";

// --------------- HĂRȚĂ BIN ---------------
/*
users: []       -> pentru login/register
bookings: []    -> rezervările utilizatorilor
reviews: []     -> evaluările destinațiilor
favorites: []   -> favorite ale utilizatorilor
*/

// --------------- FUNCTII UTILE ---------------

// Fetch actual bin data
async function getBinData() {
  const res = await fetch(`https://api.jsonbin.io/v3/bins/${BIN_ID}/latest`, {
    headers: {
      "X-Master-Key": MASTER_KEY
    }
  });
  const data = await res.json();
  return data.record;
}

// Update bin with new data
async function updateBin(newData) {
  const res = await fetch(`https://api.jsonbin.io/v3/bins/${BIN_ID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key": MASTER_KEY
    },
    body: JSON.stringify(newData)
  });
  return await res.json();
}

// Simple password hash function (SHA-256)
async function hashPassword(password) {
  const msgUint8 = new TextEncoder().encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// --------------- USERS ---------------

async function registerUser(username, email, password) {
  const data = await getBinData();
  const users = data.users;

  if(users.find(u => u.username === username)) {
    alert("Username already exists!");
    return false;
  }

  const hashed = await hashPassword(password);
  users.push({ username, email, password: hashed });

  await updateBin({...data, users});
  alert("Registration successful!");
  return true;
}

async function loginUser(username, password) {
  const data = await getBinData();
  const users = data.users;
  const hashed = await hashPassword(password);

  const user = users.find(u => u.username === username && u.password === hashed);
  if(user) {
    sessionStorage.setItem("currentUser", username);
    alert("Login successful!");
    return true;
  } else {
    alert("Invalid username or password!");
    return false;
  }
}

// --------------- BOOKINGS ---------------

async function addBooking(destination, date, persons, price) {
  const currentUser = sessionStorage.getItem("currentUser");
  if(!currentUser) { alert("You must be logged in"); return; }

  const data = await getBinData();
  const bookings = data.bookings;

  bookings.push({ user: currentUser, destination, date, persons, price });

  await updateBin({...data, bookings});
  alert("Booking added!");
}

async function getBookings() {
  const data = await getBinData();
  const currentUser = sessionStorage.getItem("currentUser");
  return data.bookings.filter(b => b.user === currentUser);
}

// --------------- REVIEWS ---------------

async function addReview(destination, rating, comment) {
  const currentUser = sessionStorage.getItem("currentUser");
  if(!currentUser) { alert("You must be logged in"); return; }

  const data = await getBinData();
  const reviews = data.reviews;

  reviews.push({ user: currentUser, destination, rating, comment });

  await updateBin({...data, reviews});
  alert("Review added!");
}

async function getReviews(destination) {
  const data = await getBinData();
  return data.reviews.filter(r => r.destination === destination);
}

// --------------- FAVORITES ---------------

async function addFavorite(destination) {
  const currentUser = sessionStorage.getItem("currentUser");
  if(!currentUser) { alert("You must be logged in"); return; }

  const data = await getBinData();
  const favorites = data.favorites;

  if(!favorites.find(f => f.user === currentUser && f.destination === destination)) {
    favorites.push({ user: currentUser, destination });
    await updateBin({...data, favorites});
    alert("Added to favorites!");
  } else {
    alert("Already in favorites!");
  }
}

async function getFavorites() {
  const data = await getBinData();
  const currentUser = sessionStorage.getItem("currentUser");
  return data.favorites.filter(f => f.user === currentUser);
}

// --------------- LOGOUT ---------------
function logout() {
  sessionStorage.removeItem("currentUser");
  alert("Logged out!");
}