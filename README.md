## Description:

Entry test, based on my boilerplate https://github.com/OscarGuerreroLopez/node_boiler_plate . Since I didn’t have much time to complete this task I just grabbed this boilerplate to start coding, hope that is ok

The boiler plate includes route handling, error handling, and also logging. I removed the rate limiter with redis just in case you run into issues while trying to execute it.

I have also included some light test due to lack of time

if you have any issues running it please contact me. I ran it locally and with docker in different machines here and seems to be working correctly, but do not hesitate to contact me if you run into issues.

## The challenge

Estimado Comandante,
Apreciamos la labor que ha realizado durante todos estos años en Varn y Kessel para la Nueva República. Es notablemente conocida su habilidad en la creación de droides y armamento. Es por ello que necesitamos su ayuda para terminar el nuevo droide de combate YVH al que aún le falta el módulo de selección de objetivos a atacar.
Los módulos del YVH disponen de un sofisticado sistema de comunicación entre ellos mediante peticiones a un API HTTP.
El objetivo de la misión es desarrollar unendpoint HTTP que acepte datosJSON y devuelva datosJSON.

El módulo de visión enviará una peticiónPOST a /radar con la información que recibe de su entorno, y el módulo que usted debe desarrollar deberá devolver cuales son las coordenadas del objetivo visible que debe de ser atacado.

Un ejemplo de cuerpo de envío sería:
protocols : Protocolo o lista de protocolos que han de ser usados para determinar cual de los siguientes puntos debe de atacarse primero.
scan : Lista de puntos extraidos del módulo de visión, que es un array de puntos con el número de objetivos de esa posición, y los siguientes subvalores:
: Coordenadas x e y del punto.
: Tipo de enemigo type y número number . Los posibles valores de type serán:soldier
{"protocols":["avoid-mech"],"scan":[{"coordinates":
{"x":0,"y":40},"enemies":{"type":"soldier","number":10}}]}
coordinates

enemies
y mech.
(optional) allies : Número de aliados que hay en dicha posición. Si no está presente este valor, significa que no hay aliados en la zona.
La respuesta debe de contener las coordenadas x e y del siguiente punto a destruir.
Un ejemplo de cuerpo de respuesta para el ejemplo anterior sería: {"x":0,"y":40}
De esa manera, nuestro droide de combateYVH sabría cual es el siguiente elemento que debe destruir.
Para determinar cual es el siguiente punto a destruir, deben de tenerse en cuenta cuales son los protocolos solicitados, y actuar según sus reglas.
Protocolos disponibles:
closest-enemies : Se deberá priorizar el punto más cercano en el que haya enemigos.
furthest-enemies : Se deberá priorizar el punto más lejano en el que haya enemigos.
assist-allies : Deberan de priorizarse los puntos en los que exista algún aliado.
avoid-crossfire : No debe de atacarse ningún punto en el que haya algún aliado.
prioritize-mech : Debe de atacarse unmech si se encuentra. En caso negativo, cualquier otro tipo de objetivo será válido.
avoid-mech : No debe de atacarse ningún enemigo del tipomech
Es importante denotar que podrán proporcionarse varios protocolos en la petición. A modo de ejemplo, si recibiésemos los protocolos closest-enemies y assist-allies, deberíamos buscar el punto más cercano que tuviese aliados presentes.
En todo caso se proporcionarán protocolos compatibles entre sí. Puede asumirse que en ningún caso el módulo recibirá, por ejemplo, los protocolos closest-enemies y furthest-enemies en la misma petición.
Finalmente es importante tener en cuenta que los objetivos a una distancia superior a100m se consideran demasiado alejados para ser atacados y por lo tanto deben ser ignorados.

## Run it

You should create an .env file following .example.env although it should run without one.

npm install and then npm run start:dev or start:tsnode

npm run test to run the test suit

Also you can just build it and run it as it is

```bash
$ npm install

$ npm run start:tsnode

$ npm run start:dev

$ npm run build

$ node ./dist/src/index.js


```

you can also run it in docker

```bash
$ docker-compose build && docker-compose up

```
