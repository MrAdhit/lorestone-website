import { browser } from "$app/environment";
import { writable } from "svelte/store";

const storedUsername = (browser ? (localStorage.getItem("username") == undefined ? "" : localStorage.getItem("username")) : "");
export const username = writable(storedUsername);

if (browser) {
    username.subscribe((value) => {
        localStorage.setItem("username", value as string);
    });
}