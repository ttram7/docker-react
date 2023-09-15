# Full Stack React with Docker

This repository combines the code from `create-react-app` with a Node.js Express server.

## Setup

1. Use Template to make a copy of this repository.
2. Clone the repository to your computer.
3. `docker-compose up`

## Localhost

When referencing a docker image from your application (e.g. connecting to the db), you will need to reference the image by name instead of `localhost`. 

## Misc

`docker-compose up --build` reinstalls node modules and rebuilds the application.



