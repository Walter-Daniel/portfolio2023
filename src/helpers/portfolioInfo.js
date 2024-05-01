import journalIMG from '../assets/journal.jpg';
import turismoIMG from '../assets/turismo.jpg';
import astrowikiIMG from '../assets/astrowiki.png';

export const portfolioInfo = [
    {
        title: 'ASTROWIKI',
        img: astrowikiIMG,
        description: 'AstroWiki es un sitio web educativo donde puedes consultar información sobre asteroides cercanos a la Tierra y exoplanetas. Este proyecto frontend utiliza la API de la NASA e incluye una página de inicio, contacto, formularios, y un componente hecho con three.js que compara el radio de la Tierra con el exoplaneta más grande.',
        tecnology:'HTML, TailwindCSS, TypeScript, React, Three.js',
        path: 'https://astrowiki-purpledev.vercel.app/',
        github: 'https://github.com/Walter-Daniel/curso-next/tree/main/clase-1',
        githubBack: null
    },
    {
        title: 'Journal App',
        img: journalIMG,
        description: 'Journal App es una aplicacion fullstack, en la cual podrás crear, editar, eliminar notas y agregar imagenes. Las rutas se encuentran protegidas por lo que tendrás que registrarte en la app y luego loguearte.',
        tecnology: 'HTML, CSS, React-Redux-Toolkit, MIU, NodeJs, Express, MongoDB, Cloudinary',
        path: 'https://purple-journal-app.netlify.app/',
        github: 'https://github.com/Walter-Daniel/JournalProyect',
        githubBack: 'https://github.com/Walter-Daniel/JournalProyect-Backend'
    },
    // {
    //     title: 'Bon Appétit',
    //     img: bonIMG,
    //     description: 'Bon Appétit es una aplicación fullstack responsiva de pedidos de comida. Cada usuario deberá crearse una cuenta antes de realizar un pedido. El administrador puede crear, editar, eliminar productos y dar de alta a los pedidos.',
    //     tecnology: 'HTML, CSS, React, Ant Design, NodeJs, Express, MongoDB',
    //     path: 'https://restaurant-frontend-virid.vercel.app/',
    //     github: 'https://github.com/Walter-Daniel/restaurant-proyect',
    //     githubBack: 'https://github.com/Walter-Daniel/backend'
    // },
    {
        title: 'Turismo Argentina',
        img: turismoIMG,
        description: 'Turismo Argentina es un blog responsivo destinado a brindar información de lugares turísticos de la República Argentina. Cuenta con páginas estáticas: inicio, galería, contacto, inicio de sesión y acerca de nosotros.' ,
        tecnology: 'HTML, CSS y bootstrap5',
        path: 'https://turismo-arg.netlify.app/',
        github: 'https://github.com/Walter-Daniel/turismo-argentina',
        githubBack: null
    },
]