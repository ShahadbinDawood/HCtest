import axios from "axios";
import * as fs from "fs";

interface User {
  id: number;
  name: string;
  email: string;
}

async function fetchUser() {
  try {
    const response = await axios.get<User[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = response.data;
    users.forEach((user) => {
      console.log(`name: ${user.name}, email: ${user.email}`);
    });
    // Save users to a file
    fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
    console.log("Users saved to users.json");
  } catch (error) {
    console.error("Error fetching user:", error);
  }
}

fetchUser();
// This code fetches user data from a public API, logs the names and emails of the users, and saves the data to a file named "users.json".
// It uses TypeScript for type safety and axios for making HTTP requests.
