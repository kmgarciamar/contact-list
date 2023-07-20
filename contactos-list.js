let contactos = [
    {
        id: "001"
        nombre: "Angie",
        apellido:  "Garcia",
        teléfono: "310-456-7890"
        ciudad: "Bogota"
        direccion: "calle 105#78-09" 
    },
    {
        id: "001"
        nombre: "Julieth",
        apellido: "martinez"
        teléfono: "350-654-3210"
        ciudad: "Sogamoso"
        direccion: "carrera2#5a-17"
    },
    {
        id: "003"
        nombre: "Francy",
        apellido: "Salamanca",
        teléfono: "350-654-3210"
        ciudad: "Bogota"
        direccion: "carrera26#10b-77"
        
    },
    {
        id: "004"
        nombre: "Carlos",
        apellido: "Polanco"
        teléfono: "320-412-7800"
        ciudad: "Cali"
        direccion: "tranversal5#80a-70"
    },
    {
        id: "005"
        nombre: "Santiago",
        apellido "pastrana"
        teléfono: "311-784-0875"
        ciudad: "Bogota"
        direccion: "calle50#08-32"
    },
];

function crearContacto(id, nombre, apellido, telefono, ciudad, direccion) {
    const contacto = {
      nombre: nombre,
      apellido: apellido,
      teléfono: teléfono,
      ciudad: ciudad,
      direccion: direccion,
    };
    contactos.push(contacto);
  }

  function eliminarContacto(id) {
    contactos = contactos.filter((contacto) => contacto.id !== id);
  }
// Supongamos que queremos actualizar el contacto con email "angie.g@gmail.com"
const emailActualizar = "angie.g@gmail.com";
const nuevosDatos = {
  nombre: "Angie García",
  telefono: "310-123-4567",
};

actualizarContacto(emailActualizar, nuevosDatos);

  function actualizarContacto(email, nuevosDatos) {
    const contactoIndex = contactos.findIndex((contacto) => contacto.email === email);
  
    if (contactoIndex !== -1) {
      contactos[contactoIndex] = {
        ...contactos[contactoIndex],
        ...nuevosDatos,
      };
    } else {
      console.log("El contacto no fue encontrado.");
    }
  }
  
// Si queremos actualizar el contacto con email "angie.g@gmail.com"
const emailActualizar = "angie.g@gmail.com";
const nuevosDatos = {
  nombre: "Angie García",
  telefono: "310-123-4567",
};

actualizarContacto(emailActualizar, nuevosDatos);

