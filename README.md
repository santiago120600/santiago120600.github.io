# Programundo

### Build container
`docker build . -t santiagod/programundo`
### Run container
`docker run -it -p 3000:3000 santiagod/programundo`
### Interactive mode
`docker exec -it santiagod/programundo ../bin/sh`

`docker run -it -d santiagod/programundo ../bin/sh`