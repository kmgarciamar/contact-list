let contactos = [
    {
        nombre: "Angie Garcia",
        email: "angie.g@gmail.com",
        teléfono: "310-456-7890"
    },
    {
        nombre: "Julieth Martinez",
        email: "jmartinez@gmail.com",
        teléfono: "350-654-3210"
    },
    {
        nombre: "Francy Salamanca",
        email: "francy.23@hotmail.com",
        teléfono: "350-908-9875"
    },
    {
        nombre: "Carlos Polanco",
        email: "polanco.c@outlook.com",
        teléfono: "320-412-7800"
    },
    {
        nombre: "Santiago pastrana",
        email: "santiago_pastrana@gmail.com",
        teléfono: "311-784-0875"
    },
    {
        nombre: "Milena Perez",
        email: "milena.ps@gmail.com",
        teléfono: "310-604-0810"
    },
    {
        nombre: "Alexander Martinez",
        email: "alex.martinez19@hotmail.com",
        teléfono: "319-621-9765"
    },
    {
        nombre: "Yeimy Moreno",
        email: "yeimymoreno0@outlook.com",
        teléfono: "311-984-2290"
    }
];

function agregarContacto(nombre, email, teléfono) {
  contactos.push({
    nombre: nombre,
    email: email,
    teléfono: teléfono
  });
}

function eliminarContacto(nombre) {
  for (let i = 0; i < contactos.length; i++) {
    if (contactos[i].nombre === nombre) {
      contactos.splice(i, 1);
      break;
    }
  }
}

function imprimirContactos() {
  for (let contacto of contactos) {
    console.log(contacto.nombre);
    console.log(contacto.email);
    console.log(contacto.teléfono);
  }
}
