
import { writable } from 'svelte/store';


// Crear un store writable para el usuario
export const user = writable({
    username: '',
    password: '',
    logged: false,
    // Otros datos relacionados con el usuario
  });
