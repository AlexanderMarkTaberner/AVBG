# AVBG (A Very Basic Gallery)

### Quickstart

install all dependencies using:
`yarn install`

To run place all images you wish to display in:
`./public/pics`

Configure the server using environment variables:
```
NEXT_PUBLIC_HOST=<server_url>
NEXT_PUBLIC_PRIMARY_COLOUR_LIGHT=<Primary_light_theme_colour>
NEXT_PUBLIC_SECONDARY_COLOUR_LIGHT=<Secondary_light_theme_colour>
NEXT_PUBLIC_PRIMARY_COLOUR_DARK=<Primary_dark_theme_colour>
NEXT_PUBLIC_SECONDARY_COLOUR_DARK=<Secondary_dark_theme_colour>
NEXT_PUBLIC_GALLERY_NAME=<Web_page_title>
```

run the server using `yarn run dev`

### Docker

You can build a docker container to run the application.

The docker container mounts images from a directory into the pics folder for the application.

Enviroment variable configurations can be passed through a .env file.

To build and run the container for your gallery run the following:
```
docker build -t avbg .

docker run -d -p 3000:3000 \
-v /local/pics/location:/app/public/pics \
-e my.env \
--name container_name \
avbg
```