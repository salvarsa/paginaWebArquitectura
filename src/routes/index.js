import {Router} from 'express'

const router = Router();


//rutas a paginas
router.get('/', (req, res) =>{
    res.render('index', {title : 'taller arquitectura'});
});

router.get('/about', (req, res) =>{
    res.render('about', {title : 'Sobre nosotros'});
});

router.get('/contact', (req, res) =>{
    res.render('contact', {title: 'contacto'});
});

router.get('/proyectos', (req, res) =>{
    res.render('proyectos', {title: 'Proyectos'})
})


export default router