import { Client, Account, Databases } from "appwrite";
const APPWRITE_PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;

console.log(APPWRITE_PROJECT_ID);


export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(APPWRITE_PROJECT_ID); 

export const account = new Account(client);
export const database = new Databases(client);
export { ID } from "appwrite";
