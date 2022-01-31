import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Header from '../pages/headerArticle';
import BlogContent from '../pages/blogContent';
import Footer from '../pages/footer';
import Gist from 'react-gist';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import ImageComponent from '../pages/imageComponent';
import { CodeBlock, dracula } from "react-code-blocks";

const useStyles = makeStyles((theme) => ({
}));

const header = {
    title:"Hola Mundo Django Rest Framework, Docker, Nginx y Gunicorn",
    author:"Santiago Castañón Arvizu",
    date:"6 Enero, 2022",
    profile:"/images/me.jpg",
    description:'En este blog aprenderás a realizar un  "Hola Mundo" usando Django Rest Framework, Docker, Nginx y Gunicorn; también aprenderás a configurar el proyecto con una base de datos PostgreSQL.',
};

const codeblock = {
    "showLineNumbers":false,
    "startingLineNumber":1
};

const copyblock = {
    "showLineNumbers":true,
    "startingLineNumber":1
};

const code = [`config/
-------nginx/
------------conf.d/
-------------------local.conf
-------gunicorn/
------------conf.py
docker.compose.yml
Dockerfile
requirements.txt`,
`docker-compose run web django-admin startproject mysite
docker-compose build `,`docker-compose up`,
`mkdir mysite\\helloWorld
docker-compose run web django-admin startapp helloWorld ./mysite/helloWorld`,
`# Environment
.env`,
`import os 
import dotenv
from django.core.wsgi import get_wsgi_application

dotenv.read_dotenv(os.path.join(os.path.dirname(os.path.dirname(__file__)), ".env"))
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "project.settings")
application = get_wsgi_application()`,
`import os
import sys
import dotenv


def main():
    dotenv.read_dotenv()
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mysite.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()
`,
`import os`,
`variable = os.environ.get('VARIABLE')`,
`SECRET_KEY = os.environ.get('SECRET_KEY')
DEBUG = os.environ.get('DEBUG')
ALLOWED_HOSTS = os.environ.get('ALLOWED_HOSTS').split(",")`,
`docker-compose run web mysite/manage.py migrate`,
`docker-compose exec db psql --username=postgres --dbname=postgres
postgres=# \dt`,
`from django.urls import path
from helloWorld import views

urlpatterns = [ path('',views.helloApi,name="helloApi"), ]`
,`docker-compose up `];

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
                    <p>Para poder seguir este pequeño tutorial de cómo "Dockerizar" un "Hola mundo" de <a href="https://www.django-rest-framework.org/" target="_blank" rel="noreferrer">Django Rest Framework</a>,  debes contar con <a href="https://docs.docker.com/get-docker/" target="_blank" rel="noreferrer">Docker</a> y <a href="https://docs.docker.com/compose/" target="_blank" rel="noreferrer">Docker Compose</a>. Al final de la página se encuentra un link al repositorio de este tutorial.</p> 
                    <p>Lo primero que necesitamos es crear un archivo <strong>requirements.txt</strong> dentro de nuestro proyecto, en el cual listaremos todas las dependencias python de nuestro proyecto.</p>
                    <h3>requirements.txt</h3>
                    <Gist id='7d47865f56531dbbb4089effb3c48827' />
                    <p>Después debemos crear un archivo <strong>Dockerfile</strong>, el cual nos ayudará a seleccionar la versión de python que deseamos, además de establecer el directorio de trabajo.</p>
                    <h3>Dockerfile</h3>
                    <Gist id='fecd326c2bda94d4076bca8713de1002' />
                    <p>Ahora crearemos un archivo <strong>docker-compose.yml</strong>, el cual usaremos para listar las imágenes Docker que vamos a usar en nuestro proyecto.</p>
                    <h3>docker-compose.yml </h3>
                    <Gist id='3886367f11f5419c358ae8f3bb2a4ceb' />
                    <p>Ahora crearemos los archivos de configuración que necesitamos para gunicorn y nginx, los cuales colocaremos al mismo nivel que nuestro <strong>Dockerfile</strong>.Crearemos una carpeta llamada <strong>config</strong> dentro de la cual crearemos otras dos carpeta <strong>gunicorn</strong> y <strong>nginx</strong>.</p>
                    <p>Dentro de la carpeta <strong>gunicorn</strong> vamos crear un archivo <strong>conf.py</strong> con el siguiente contenido:</p>
                    <h3>conf.py </h3>    
                    <Gist id='d0fc896d944ae848dbd8aadfba802b92' />
                    <p>Ahora dentro de la carpeta <strong>nginx</strong> crearemos otro directorio llamado <strong>conf.d</strong>, dentro de este directorio crearemos un archivo <strong>local.conf</strong> con el siguiente contenido:</p>
                    <h3>local.conf </h3>
                    <Gist id='76df2bdebb67c014e80bdf23a59cf884' />
                    <p>La estructura de archivos sería la siguiente:</p>
                    <CodeBlock
                        text={code[0]}
                        language={'text'}
                        showLineNumbers={codeblock['showLineNumbers']}
                        startingLineNumber={codeblock['startingLineNumber']}
                        theme={dracula}
                    />
                    <p>Abrimos una consola en el directorio donde se encuentra nuestro <strong>Dockerfile</strong> y <strong>docker-compose.yml</strong> y ejecutamos el siguiente comando:</p>
                    <CodeBlock
                        text={code[1]}
                        language={'text'}
                        showLineNumbers={codeblock['showLineNumbers']}
                        startingLineNumber={codeblock['startingLineNumber']}
                        theme={dracula}
                    />
                    <p>Este comando nos ayudará a crear nuestro proyecto Django.</p>
                    <p>Después de ejecutar ese comando se habrá creado una carpeta <strong>mysite/</strong>, la cual contendrá nuestros archivos Django.</p>
                    <p>Ahora podemos ejecutar el siguiente comando y después abrir un navegador en la dirección <strong>http://localhost:8000</strong> para asegurarnos que todo funcione adecuadamente.</p>
                    <CodeBlock
                        text={code[2]}
                        language={'text'}
                        showLineNumbers={codeblock['showLineNumbers']}
                        startingLineNumber={codeblock['startingLineNumber']}
                        theme={dracula}
                    />
                    <br />  
                    <ImageComponent image="/images/welcome-screen-django.png"/>
                    <p>Si todo salió bien nos deberá mostrar esta pantalla en el navegador.</p>
                    <p>Ahora podemos crear nuestra app "Hola mundo".</p>
                    <CodeBlock
                        text={code[3]}
                        language={'text'}
                        showLineNumbers={codeblock['showLineNumbers']}
                        startingLineNumber={codeblock['startingLineNumber']}
                        theme={dracula}
                    />
                    <p>Ahora vamos a agregar nuestra app helloWorld a nuestro proyecto; para ello agregáremos el nombre de nuestra app en nuestro caso "helloWorld" a la lista INSTALLED_APPS dentro de el archivo settings.py que se encuentra en <strong>mysite/mysite/settings.py</strong>. También agregaremos "rest_framework" a esa lista para poder usar DRF en nuestro proyecto.</p> 
                    <p>Ahora tendrás algo como lo siguiente:</p>
                    <Gist id='60fb1a972328fee87044a16e12de8bb3' />
                    <p>Ahora crearemos un archivo <strong>.env</strong>. Lo colocaremos dentro de la carpeta <strong>mysite</strong>, al mismo nivel que el archivo <strong>manage.py</strong>. Este archivo  nos servirá para guardar toda la información "secreta", como puede ser la base de datos o contraseñas.</p>
                    <h3>.env</h3>
                    <Gist id='48923359d0caf1d11e84d2e487dca0ec' />
                    <p>Este archivo lo agregaremos a nuestro <strong>.gitignore</strong> para que no sea tomado en cuenta en nuestro sistema de control de versiones.</p>
                    <h3>.gitignore</h3>
                    <CodeBlock
                        text={code[4]}
                        language={'text'}
                        showLineNumbers={codeblock['showLineNumbers']}
                        startingLineNumber={codeblock['startingLineNumber']}
                        theme={dracula}
                    />
                    <p>Para poder usar este archivo .env haremos uso de <a href="https://github.com/jpadilla/django-dotenv" target="_blank" rel="noreferrer">django-dotenv</a>, el cual ya se encuentra en nuestro archivo <strong>requirements.txt</strong></p>
                    <p>Además debemos agregar unas líneas a el archivo <strong>wsgi.py</strong> que se encuentra en <strong>mysite/mysite/wsgi.py</strong>, como nos indica la documentación. </p>
                    <CodeBlock
                        text={code[5]}
                        language={'python'}
                        showLineNumbers={copyblock['showLineNumbers']}
                        startingLineNumber={copyblock['startingLineNumber']}
                        theme={dracula}
                    />
                    <p>También agregaremos unas líneas a el archivo <strong>manage.py</strong> que se encuentra en <strong>mysite/manage.py</strong>. Agregaremos la líneas 3 y 7 del siguiente script:</p>
                    <CodeBlock
                        text={code[6]}
                        language={'python'}
                        showLineNumbers={copyblock['showLineNumbers']}
                        startingLineNumber={copyblock['startingLineNumber']}
                        theme={dracula}
                    />
                    <p>Ahora, en nuestro archivo <strong>settings.py</strong> debemos sustituir los valores de las variables que queremos guaradar en nuestro <strong>.env</strong>. Primero importaremos os.</p>
                    <h3>settings.py</h3>
                    <CodeBlock
                        text={code[7]}
                        language={'python'}
                        showLineNumbers={copyblock['showLineNumbers']}
                        startingLineNumber={copyblock['startingLineNumber']}
                        theme={dracula}
                    />
                    <p>Ahora, cambiaremos el valor de las variables DEBUG, ALLOWED_HOSTS, SECRET_KEY, ALLOWED_HOSTS, además de las variables dentro del DATABASES, osea, todas las variables que vamos a guardar en nuestro <strong>.env</strong>. Los valores que agregaremos serán como el siguiente:</p>
                    <CodeBlock
                        text={code[8]}
                        language={'python'}
                        showLineNumbers={copyblock['showLineNumbers']}
                        startingLineNumber={copyblock['startingLineNumber']}
                        theme={dracula}
                    />
                    <p>En este ejemplo <strong>variable</strong> es el nombre de la variable de nuestro archivo settings.py, mientras que <strong>VARIABLE</strong> es el nombre que lleva esta variable en el archivo <strong>.env</strong></p>
                    <p>Las variables quedarían de la siguiente forma:</p>
                    <CodeBlock
                        text={code[9]}
                        language={'python'}
                        showLineNumbers={copyblock['showLineNumbers']}
                        startingLineNumber={copyblock['startingLineNumber']}
                        theme={dracula}
                    />
                    <p>Con la base de datos haríamos lo siguiente:</p>
                    <h3>settings.py</h3>
                    <Gist id='13a8ca656e25ca46c965e0b70618da22' />
                    <p>Ahora aplicaremos las migraciones para corroborar que la configuración de la base de datos sea correcta.</p>
                    <CodeBlock
                        text={code[10]}
                        language={'text'}
                        showLineNumbers={codeblock['showLineNumbers']}
                        startingLineNumber={codeblock['startingLineNumber']}
                        theme={dracula}
                    />
                    <p>Después de haber aplicado las migraciones podemos entrar a nuestra base de datos para corroborar que las tablas se hayan creado.</p>
                    <CodeBlock
                        text={code[11]}
                        language={'python'}
                        showLineNumbers={codeblock['showLineNumbers']}
                        startingLineNumber={codeblock['startingLineNumber']}
                        theme={dracula}
                    />
                    <p>Ahora, modificaremos el archivo <strong>views.py</strong> que se encuentra en <strong>mysite/helloWorld/views.py</strong> y cambiaremos su contenido por lo siguiente:</p>
                    <h3>views.py</h3>
                    <Gist id='7b47eeab13e59769289dce4803d22f8f' />
                    <p>Esta función nos devolverá un <strong>Hello, world!</strong> cada que sea llamada.</p>
                    <p>Ahora, crearemos un archivo <strong>urls.py</strong> dentro de la carpeta <strong>helloWorld</strong>. </p>
                    <CodeBlock
                        text={code[12]}
                        language={'python'}
                        showLineNumbers={copyblock['showLineNumbers']}
                        startingLineNumber={copyblock['startingLineNumber']}
                        theme={dracula}
                    />
                    <p>En este archivo listaremos las url de nuestra app helloWorld</p>
                    <p>Después tenemos que importart estas url en <strong>mysite/mysite/urls.py</strong></p>
                    <p>Ahora sólo debemos ponerlo en marcha.</p>
                    <CodeBlock
                        text={code[13]}
                        language={'text'}
                        showLineNumbers={codeblock['showLineNumbers']}
                        startingLineNumber={codeblock['startingLineNumber']}
                        theme={dracula}
                    />
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
