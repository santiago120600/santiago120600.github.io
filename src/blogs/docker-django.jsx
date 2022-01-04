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
import ImageComponent from '../pages/imageComponent';

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
                    <p>Ahora crearemos los archivos de configuración que necesitamos para gunicorn y nginx, los cuales colocaremos al mismo nivel que nuestro <strong>Dockerfile</strong>.Crearemos una carpeta llamada <strong>config</strong> dentro de la cual crearemos otras dos carpeta <strong>gunicorn</strong> y <strong>nginx</strong>.</p>
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
                    La estructura de archivos sería la siguiente:
                </Typography>
                <CodeContainer>
                    config/<br />
                    -------nginx/<br/>
                    ------------local.conf<br/> 
                    -------gunicorn/<br/>
                    ------------conf.py<br/> 
                    docker.compose.yml <br />
                     Dockerfile<br />
                     requirements.txt<br />
                </CodeContainer>
                <Typography
                    variant="subtitle1"
                    align="left"
                >
                    Abrimos una consola en el directorio donde se encuentra nuestro <strong>Dockerfile</strong> y <strong>docker-compose.yml</strong> y ejecutamos el siguiente comando:
                </Typography>
                <CodeContainer>
                    $ docker-compose run web django-admin startproject mysite
                </CodeContainer>
                <Typography
                    variant="subtitle1"
                    align="left"
                >
                    <p>Este comando nos ayudará a crear nuestro proyecto Django.</p>
                    <p>Después de ejecutar ese comando se habrá creado una carpeta <strong>mysite/</strong>, la cual contendrá nuestros archivos Django.</p>
                    <p>Ahora podemos crear nuestra app "Hola mundo".</p>
                </Typography>
                <CodeContainer>
                    $ mkdir mysite\helloWorld<br/>
                    $ docker-compose run web django-admin startapp helloWorld ./mysite/helloWorld
                </CodeContainer>
                <Typography
                    variant="subtitle1"
                    align="left"
                >
                    <p>Ahora vamos a agregar nuestra app helloWorld a nuestro proyecto; para ello agregáremos el nombre de nuestra app en nuestro caso "helloWorld" a la lista INSTALLED_APPS dentro de el archivo settings.py que se encuentra en <strong>mysite/mysite/settings.py</strong>. También agregaremos "rest_framework" a esa lista para poder usar DRF en nuestro proyecto.</p> 
                    <p>Ahora tendrás algo como lo siguiente:</p>
                </Typography>
                <Gist id='60fb1a972328fee87044a16e12de8bb3' />
                <Typography
                    variant="subtitle1"
                    align="left"
                >
                    <p>Ahora crearemos un archivo <strong>.env</strong>. Lo colocaremos dentro de la carpeta <strong>mysite</strong>, al mismo nivel que el archivo <strong>manage.py</strong>. Este archivo  nos servirá para guardar toda la información "secreta", como puede ser la base de datos o contraseñas.</p>
                </Typography>
                <h3>.env</h3>
                <Gist id='48923359d0caf1d11e84d2e487dca0ec' />
                <Typography
                    variant="subtitle1"
                    align="left"
                >
                    <p>Este archivo lo agregaremos a nuestro <strong>.gitignore</strong> para que no sea tomado en cuenta en nuestro sistema de control de versiones.</p>
                </Typography>
                <h3>.gitignore</h3>
                <CodeContainer>
                    # Environment<br/>
                    .env
                </CodeContainer>
                <Typography
                    variant="subtitle1"
                    align="left"
                >
                    <p>Para poder usar este archivo .env haremos uso de <a href="https://github.com/jpadilla/django-dotenv" target="_blank" rel="noreferrer">django-dotenv</a>, el cual ya se encuentra en nuestro archivo <strong>requirements.txt</strong></p>
                    <p>Además debemos agregar unas líneas a el archivo <strong>wsgi.py</strong> que se encuentra en <strong>mysite/mysite/wsgi.py</strong>, como nos indica la documentación. </p>
                </Typography>
                <CodeContainer>
                    import os 
                    <p style={{color:"green"}}>import dotenv</p>
                    from django.core.wsgi import get_wsgi_application <br />
                    <br />
                    <p style={{color:"green"}}>dotenv.read_dotenv(os.path.join(os.path.dirname(os.path.dirname(__file__)), '.env'))</p> 
                    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "project.settings") <br />
                    <br />
                    application = get_wsgi_application()
                    <br />
                </CodeContainer>
                <Typography
                    variant="subtitle1"
                    align="left"
                >
                    <p>Ahora, en nuestro archivo <strong>settings.py</strong> debemos sustituir los valores de las variables que queremos guaradar en nuestro <strong>.env</strong>. Primero importaremos os.</p>
                </Typography>
                <h3>settings.py</h3>
                <CodeContainer>
                    import os
                </CodeContainer>
                <Typography
                    variant="subtitle1"
                    align="left"
                >
                    <p>Ahora, cambiaremos el valor de las variables DEBUG, ALLOWED_HOSTS, SECRET_KEY, ALLOWED_HOSTS, además de las variables dentro del DATABASES, osea, todas las variables que vamos a guardar en nuestro <strong>.env</strong>. Los valores que agregaremos serán como el siguiente:</p>
                </Typography>
                <CodeContainer>
                    variable = os.environ.get('VARIABLE')
                </CodeContainer>
                <Typography
                    variant="subtitle1"
                    align="left"
                >
                    <p>En este ejemplo <strong>variable</strong> es el nombre de la variable de nuestro archivo settings.py, mientras que <strong>VARIABLE</strong> es el nombre que lleva esta variable en el archivo <strong>.env</strong></p>
                    <p>Un ejemplo sería:</p>
                </Typography>
                <CodeContainer>
                    SECRET_KEY = os.environ.get('SECRET_KEY')
                </CodeContainer>
                <Typography
                    variant="subtitle1"
                    align="left"
                >
                    <p>Con la base de datos haríamos lo siguiente:</p>
                </Typography>
                <h3>settings.py</h3>
                <Gist id='13a8ca656e25ca46c965e0b70618da22' />
                <Typography
                    variant="subtitle1"
                    align="left"
                >
                    <p>Ahora, modificaremos el archivo <strong>views.py</strong> que se encuentra en <strong>mysite/helloWorld/views.py</strong> y cambiaremos su contenido por lo siguiente:</p>
                </Typography>
                <h3>views.py</h3>
                <Gist id='7b47eeab13e59769289dce4803d22f8f' />
                <Typography
                    variant="subtitle1"
                    align="left"
                >
                    <p>Esta función nos devolverá un <strong>Hello, world!</strong> cada que sea llamada.</p>
                    <p>Ahora, crearemos un archivo <strong>urls.py</strong> dentro de la carpeta <strong>helloWorld</strong>. </p>
                </Typography>
                <CodeContainer>
                    from django.urls import path <br/>
                    from helloWorld import views<br/>
                    <br/>
                    urlpatterns = [
                        path('',views.helloApi,name="helloApi"),
                    ]
                </CodeContainer>
                <Typography
                    variant="subtitle1"
                >
                    <p>En este archivo listaremos las url de nuestra app helloWorld</p>
                    <p>Después tenemos que importart estas url en <strong>mysite/mysite/urls.py</strong></p>
                </Typography>
                <Gist id="4c6a1625e8da9f42701ab1dd1aea564e"/>
                <Typography
                    variant="subtitle1"
                >
                    <p>Ahora sólo debemos ponerlo en marcha.</p>
                </Typography>
                <CodeContainer>
                    $ docker-compose up <br />
                </CodeContainer>
                <Typography
                    variant="subtitle1"
                    align="left"
                >
                    <p>Este comando construye la imagen si la imagen no existe e inicia el contenedor.</p> 
                    <p>Podemos probar la funcionalidad usando <a href="https://www.postman.com/" target="_blank" rel="noreferrer">Postman</a> o <a href="https://curl.se/" target="_blank" rel="noreferrer">Curl</a>. Solo debemos enviar una petición GET a <strong>http://localhost:8000</strong> o <strong>http://0.0.0.0:8000</strong></p>
                    <ImageComponent image="/images/cmd.png"/>
                    <ImageComponent image="/images/postman.png"/>
                </Typography>
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
