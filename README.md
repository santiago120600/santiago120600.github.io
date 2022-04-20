# Programundo

### Build container
`docker build . -t santiagod/programundo`
### Run container
`docker run -p 3000:3000 -d santiagod/programundo`
### Interactive mode
`docker exec -it santiagod/programundo ../bin/sh`

`docker run -it -d santiagod/programundo ../bin/sh`
