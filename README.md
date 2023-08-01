# web

## Arquitect
```js
my-app/
  |- backend/
  |   |- controllers/
  |   |- models/
  |   |- routes/
  |   |- services/
  |   |- app.js
  |   |- server.js
```
---------------------------------------------------------------------------------------

## Backend (Node.js):

```html
controllers/: Contiene controladores que manejan la lógica de negocio y responden a las solicitudes de la API.
models/: Define los modelos de datos y la interacción con la base de datos si es necesario.
routes/: Define las rutas de la API y su relación con los controladores.
services/: Si hay lógica compartida entre los controladores, como autenticación o validaciones, puede ir aquí.
app.js: Configura la aplicación Express y establece middleware común.
server.js: Inicializa el servidor y escucha las solicitudes. 
```