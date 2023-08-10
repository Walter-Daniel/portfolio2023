import journalIMG from '../assets/journal.jpg';
import turismoIMG from '../assets/turismo.jpg';
import bonIMG from '../assets/bon.jpg';

export const portfolioInfo = [
    {
        title: 'Journal App',
        img: journalIMG,
        description: 'Journal App es una aplicacion fullstack, en la cual podras crear, agregar imagenes, editar y eliminar notas. Las rutas se encuentran protegidas por lo que tendras que registrarte en la app y luego loguearte.',
        tecnology: 'HTML, CSS, React-Redux-Toolkit, MIU, NodeJs, Express, MongoDB, Cloudinary',
        path: 'https://purple-journal-app.netlify.app/',
        github: 'https://github.com/Walter-Daniel/JournalProyect',
        githubBack: 'https://github.com/Walter-Daniel/JournalProyect-Backend'
    },
    {
        title: 'Bon Appétit',
        img: bonIMG,
        description: 'Bon Appétit es una aplicación fullstack responsiva de pedidos de comida. Cada usuario deberá crearse una cuenta antes de realizar un pedido. El administrador puede crear, editar, eliminar productos y de dar dalta a los pedidos.',
        tecnology: 'HTML, CSS, React, Ant Design, NodeJs, Express, MongoDB',
        path: 'https://bon-appetit-rc.netlify.app/',
        github: 'https://github.com/Walter-Daniel/restaurant-proyect',
        githubBack: 'https://github.com/Walter-Daniel/backend'
    },
    {
        title: 'Turismo Argentina',
        img: turismoIMG,
        description: 'Turismo Argentina es un blog responsivo destinado a brindar información de lugares turísticos de la República Argentina. Cuenta con una páginas estáticas de: inicio, inicio de sesión, galería, contacto y acerca de nosotros.' ,
        tecnology: 'HTML, CSS y bootstrap5',
        path: 'https://turismo-arg.netlify.app/',
        github: 'https://github.com/Walter-Daniel/turismo-argentina',
        githubBack: null
    },
]