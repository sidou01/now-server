![GitHub Logo](https://www.gqlify.com/docs/assets/architecture/prisma-proxy.png)
### Steps to get it started:
1. clone this repo.
    ```bash
    git clone https://github.com/sidou01/now-server
    ```
1. install [docker](https://docs.docker.com/install/) and [docker-compose](https://docs.docker.com/compose/install/).
1. cd into the now-server folder and install the dependcies.
    ```bash
    cd now-server && yarn install 
    ```
1. start prisma server (server/db)
    ```bash
    docker-compose up
    ```
    __Notice that the prisma server will be running on port 4466 on your local machine so make sure that thats open and check the prisma.yml file to confirm that the endpoint is correct__.
    > you can check the prisma server at http://localhost:4466.
1. start the apollo server.
   ```bash
    yarn start
    ```
    > check it out by going to http://localhost:4000.

