import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Header from '../pages/headerArticle';
import BlogContent from '../pages/blogContent';
import CodeContainer from '../pages/codeContainer';
import Footer from '../pages/footer';
import Gist from 'react-gist';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
}));

const header = {
    title:"Hola Mundo Django Rest Framework, Docker, Nginx y Gunicorn",
    author:"Santiago Castañón Arvizu",
    date:"3 Enero, 2022",
    profile:"/images/me.jpg",
    description:'En este blog aprenderás a realizar un  "Hola Mundo" usando Django Rest Framework, Docker, Nginx y Gunicorn; también aprenderás a configurar el proyecto con una base de datos PostgreSQL.',
};

function DockerDjangoBlog() {
    const classes = useStyles();

    return (
        <>
            <Header title={header.title} author={header.author} date={header.date} profile={header.profile} description={header.description}/>
            <BlogContent
                image="/images/docker-large.png"
            >
                <Typography
                    variant="subtitle1"
                    align="left"
                >
                    <p>Para poder seguir este pequeño tutorial de cómo "Dockerizar" un "Hola mundo" de <a href="https://www.django-rest-framework.org/" target="_blank" rel="noreferrer">Django Rest Framework</a>.  debes contar con <a href="https://docs.docker.com/get-docker/" target="_blank" rel="noreferrer">Docker</a> y <a href="https://docs.docker.com/compose/" target="_blank" rel="noreferrer">Docker Compose</a>. Al final de la página se encuentra un link al repositorio de este tutorial.</p> 
                    <p>Lo primero que necesitamos es crear un archivo <strong>requirements.txt</strong> dentro de nuestro proyecto, en el cual listaremos todas las dependencias python de nuestro proyecto.</p>
                </Typography>
                <h3>requirements.txt</h3>
                <Gist id='7d47865f56531dbbb4089effb3c48827' />
                <Typography
                    variant="subtitle1"
                    align="left"
                >
                    Después debemos crear un archivo <strong>Dockerfile</strong>, el cual nos ayudará a seleccionar la versión de python que deseamos, además de establecer el directorio de trabajo.
                </Typography>
                <h3>Dockerfile</h3>
                <Gist id='fecd326c2bda94d4076bca8713de1002' />
                <Typography
                    variant="subtitle1"
                    align="left"
                >
                    Ahora crearemos un archivo <strong>docker-compose.yml</strong>, el cual usaremos para listar las imágenes Docker que vamos a usar en nuestro proyecto.
                </Typography>
                <h3>docker-compose.yml </h3>
                <Gist id='3886367f11f5419c358ae8f3bb2a4ceb' />
                <Typography
                    variant="subtitle1"
                    align="left"
                >
                    <p>Ahora crearemos los archivos de configuración que necesitamos para gunicorn y nginx, los cuales colocaremos al mismo nivel que nuestro <strong>Dockerfile</strong>.Crearemos una carpeta llamada <strong>config</strong> desntro de la cual crearemos otras dos carpeta <strong>gunicorn</strong> y <strong>nginx</strong>.</p>
                    <p>Dentro de la carpeta <strong>gunicorn</strong> vamos crear un archivo <strong>config.py</strong> con el siguiente contenido:</p>
                </Typography>
                <h3>conf.py </h3>    
                <Gist id='d0fc896d944ae848dbd8aadfba802b92' />
                <Typography
                    variant="subtitle1"
                    align="left"
                >
                    <p>Ahora dentro de la carpeta <strong>nginx</strong> creamos un archivo <strong>local.conf</strong> con el siguiente contenido:</p>
                </Typography>
                <h3>local.conf </h3>
                <Gist id='76df2bdebb67c014e80bdf23a59cf884' />
                <Typography
                    variant="subtitle1"
                    align="left"
                >
                    Abrimos una consola en el directorio donde se encuentra nuestro <strong>Dockerfile</strong> y <strong>docker-compose.yml</strong> y ejecutamos el siguiente comando:
                </Typography>
                <CodeContainer>
                    $ docker-compose up --build <br />
                </CodeContainer>
                <h3>views.py</h3>
                <Gist id='7b47eeab13e59769289dce4803d22f8f' />
                <h3>.env</h3>
                <Gist id='48923359d0caf1d11e84d2e487dca0ec' />
                {/*
                    $ django-admin startproject mysite
                    agregar django-dotenv y agregar lo que se ocupa en el WSGI <br />
                    archivos de configuracion de gunicorn y nginx <br />
                    Crear archivo de variables de entorno, tiene que estar al mismo nivel que el manage.py <br />
                    agregar el .env al .gitignore <br />
                    $django-admin startproject mysite <br />
                    configuramos la base de datos <br />
                    python manage.py startapp helloWorld / django-admin startapp helloWorld <br />
                    despues de crear la app entonces hacemos el hello world <br />
                    importart url en 
                    */}
                <Button
                    variant="contained"
                    color="default"
                    startIcon={<GitHubIcon />}
                    href="https://github.com/santiago120600/django-rest-hello-world-docker-nginx-gunicorn-postgres"
                    target="_blank" 
                    rel="noreferrer"
                >
                    Repositorio
                </Button>
            </BlogContent>

            <Footer/>
        </>
    );
}
export default DockerDjangoBlog;
