# This presentation uses the Spectacle Boilerplate

## Reference

The Spectacle core API is available at [https://github.com/FormidableLabs/spectacle/blob/master/README.markdown](https://github.com/FormidableLabs/spectacle/blob/master/README.markdown).

## Running in Docker

Build the image: `docker build . -t app/react-talk-fa`

Run the image as a container: `docker run -p 3333:3333 -t app/react-talk-fa`

## Development

After cloning make sure to have node 6.+ and use `yarn` command to install the required packages. (`npm i yarn -g` if it is missing)

Then, to start up the local server, run `npm start`

Open a browser and hit [http://localhost:3333](http://localhost:3333), and we are ready to roll

## Build & Deployment

Building the dist version of the project is as easy as running `npm run build`
