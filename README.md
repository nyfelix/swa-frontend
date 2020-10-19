# Node-RED for SWA Meshup Server

## Installation and Deployment

### Folder structure
```

/frontend : frontend application for all usecases
/frontend-template : original template/boilerplate for the frontend

```


### Build for development

Run 
` docker-compose up `
to build all relevant containers


### Startup development environment

1. Get the .env file from the project owner and add it to root directory
2. To start the devleopment enviornment, run: 
` docker-compose up `

After succcessful start, the components can be reached on the follwing urls:
```
localhost:8080           Frontend
localhost:8081           Frontened Template

```

### Deployment

All pushes to the "relsease" branch will be deployed to appui automatically (test environment).

