import React from "react";
import Header from './headerArticle';
import { makeStyles } from '@material-ui/core/styles';
import Gist from 'react-gist';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import CodeContainer from './codeContainer';
import Footer from './footer';
import BlogContent from './blogContent';

const useStyles = makeStyles((theme) => ({
}));

const header = {
    title:"Hola Mundo Django Rest Framework, Docker, Nginx y Gunicorn",
    author:"Santiago Castañón Arvizu",
    date:"27 Diciembre, 2021",
    profile:"/images/me.jpg",
    description:'En este blog aprenderás a realizar un  "Hola Mundo" usando Django Rest Framework, Docker, Nginx y Gunicorn; también aprenderás a configurar el proyecto con una base de datos PostgreSQL.',
};

function BlogTemplate() {
    const classes = useStyles();

    return (
        <>
            <Header title={header.title} author={header.author} date={header.date} profile={header.profile} description={header.description}/>
            <BlogContent
                image="/images/django-docker.webp"
            >
                <Typography
                    variant="subtitle1"
                    align="left"
                    component="p"
                >
                    creamos el dockerfile <br />
                    creamos docker-compose.yml <br />
                    $docker-compose up --build <br />
                    Instalamos las librerias  <br />
                    agregar django-dotenv y agregar lo que se ocupa en el WSGI <br />
                    archivos de configuracion de gunicorn y nginx <br />
                    Crear archivo de variables de entorno, tiene que estar al mismo nivel que el manage.py <br />
                    agregar el .env al .gitignore <br />
                    $django-admin startproject mysite <br />
                    configuramos la base de datos <br />
                    python manage.py startapp helloWorld / django-admin startapp helloWorld <br />
                    despues de crear la app entonces hacemos el hello world <br />
                    importart url en 
                </Typography>
                <CodeContainer>
                    $docker-compose up --build <br />
                    $django-admin startproject mysite
                </CodeContainer>
                <Gist id='fecd326c2bda94d4076bca8713de1002' />
                <Gist id='3886367f11f5419c358ae8f3bb2a4ceb' />
                <Gist id='7d47865f56531dbbb4089effb3c48827' />
                <Gist id='d0fc896d944ae848dbd8aadfba802b92' />
                <Gist id='76df2bdebb67c014e80bdf23a59cf884' />
                <Gist id='7b47eeab13e59769289dce4803d22f8f' />
                <Gist id='48923359d0caf1d11e84d2e487dca0ec' />
                <Button
                    variant="contained"
                    color="default"
                    startIcon={<GitHubIcon />}
                    href="https://github.com/santiago120600/django-rest-hello-world-docker-nginx-gunicorn-postgres"
                    target="_blank"
                >
                    Repositorio
                </Button>
            </BlogContent>

            <Footer/>
        </>
    );
}
export default BlogTemplate;
