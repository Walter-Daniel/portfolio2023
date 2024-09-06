import journalIMG from '../assets/journal.jpg';
import turismoIMG from '../assets/turismo.jpg';
import astrowikiIMG from '../assets/astrowiki.png';
import purpleShopIMG from '../assets/pshop1.png';
import APIIMG from '../assets/back1.jpeg';

export const portfolioInfo = [
    {
        title: 'PURPLE SHOP',
        img: purpleShopIMG,
        description: 'Purple Shop es un e-commerce de venta de indumentaria donde puedes seleccionar tus prendas, elegir el tamaño y la cantidad, añadir una dirección de entrega y pagar de forma segura a través de una pasarela de pago integrada con PayPal. Dispone de un panel de administración exclusivo para el administrador, quien puede crear, editar y eliminar productos, así como supervisar el estado de las órdenes y la gestión de usuarios',
        tecnology:'Next.js, TypeScript, Auth.js',
        path: 'https://purple-shop-theta.vercel.app/',
        github: 'https://github.com/Walter-Daniel/purple-shop',
        githubBack: null
    },
    {
        title: 'ASTROWIKI',
        img: astrowikiIMG,
        description: 'AstroWiki es un sitio web educativo donde prodrás consultar información sobre asteroides cercanos a la Tierra y exoplanetas. Este proyecto frontend consume la API de la NASA e incluye una página de inicio, contacto, formularios, y un componente hecho con three.js que compara el radio de la Tierra con el exoplaneta más grande.',
        tecnology:'HTML, TailwindCSS, TypeScript, React, Three.js',
        path: 'https://astrowiki-purpledev.vercel.app/',
        github: 'https://github.com/Walter-Daniel/curso-next/tree/main/clase-1',
        githubBack: null
    },
    {
        title: 'Journal App',
        img: journalIMG,
        description: 'Journal App es una aplicación fullstack que te permite crear, editar y eliminar notas, así como añadir imágenes. Todas las rutas están protegidas, por lo que es necesario registrarse en la aplicación y luego iniciar sesión para acceder a sus funcionalidades.',
        tecnology: 'HTML, CSS, React-Redux-Toolkit, MIU, NodeJs, Express, MongoDB, Cloudinary',
        path: 'https://journal-project.vercel.app/auth/login',
        github: 'https://github.com/Walter-Daniel/JournalProyect',
        githubBack: 'https://github.com/Walter-Daniel/JournalProyect-Backend'
    },
    {
        title: 'REST API NodeJs',
        img: APIIMG,
        description: 'Esta API permite realizar operaciones CRUD completas para la gestión de productos, desarrollada con Node.jsExpress y TypeScript para un desarrollo eficiente y seguro. Cuenta con documentación en Swagger, pruebas robustas con Jest y SuperTest, y validación de datos con express-validator.' ,
        tecnology: 'Noje.js, TypeScript, Swagger, Prisma, Jest, SuperTest, express-validator',
        path: null,
        github: null,
        githubBack: 'https://github.com/Walter-Daniel/BACKEND-PERN-Project?tab=readme-ov-file'
    },
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