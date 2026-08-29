# Anime Store

Single Page Application (SPA) de e-commerce desarrollada con **React JS** como proyecto académico.

La aplicación permite visualizar un catálogo de productos relacionados con anime, consultar el detalle de cada producto, agregarlos al carrito y realizar una compra. Los productos y las órdenes se gestionan mediante **Firebase Firestore**.

## Funcionalidades

* Visualización del catálogo de productos.
* Filtrado de productos por categorías:
  * Figuras
  * Mangas
  * Accesorios
* Vista de detalle de cada producto.
* Selección de cantidad de productos según el stock disponible.
* Agregar productos al carrito.
* Visualización del contenido del carrito.
* Cálculo de subtotales y total de la compra.
* Formulario de checkout.
* Generación de órdenes de compra.
* Actualización del stock de los productos después de una compra.
* Visualización del ID de la orden generada.
* Navegación entre las diferentes vistas sin recargar la página.

## Tecnologías utilizadas

### Frontend

* **React JS** — desarrollo de la interfaz y componentes.
* **Vite** — herramienta de desarrollo y build.
* **React Router** — navegación dentro de la SPA.
* **Tailwind CSS** — estilos y diseño responsive.
* **CSS Modules** — estilos específicos de componentes.
* **React Context** — manejo del estado global del carrito.
* **Lucide React** — iconos utilizados en la interfaz.
* **Sonner** — notificaciones al usuario.

### Backend / Base de datos

* **Firebase**
* **Cloud Firestore**

Firestore se utiliza para:

* Almacenar el catálogo de productos.
* Consultar los productos desde la aplicación.
* Registrar las órdenes realizadas.
* Actualizar el stock disponible después de una compra.

## Requisitos

Para ejecutar el proyecto es necesario tener instalado:

* [Node.js](https://nodejs.org/)
* npm

También es necesario contar con las credenciales de Firebase utilizadas por el proyecto.

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/RVargasCamacho/AnimeStore.git
```

Ingresar a la carpeta del proyecto:

```bash
cd AnimeStore
```

Instalar las dependencias:

```bash
npm install
```

## Variables de entorno

El proyecto utiliza variables de entorno para la configuración de Firebase.

Crear un archivo `.env` en la raíz del proyecto:

```env
VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain
VITE_FIREBASE_PROJECT_ID=tu_project_id
VITE_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
VITE_FIREBASE_APP_ID=tu_app_id
```

Los valores deben corresponder al proyecto de Firebase utilizado para la aplicación.

> El archivo `.env` no debe subirse al repositorio.

## Ejecutar el proyecto

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Luego abrir en el navegador la dirección indicada por Vite, normalmente:

```text
http://localhost:5173
```

## Build de producción

Para generar la versión optimizada para producción:

```bash
npm run build
```

Para comprobar localmente el build:

```bash
npm run preview
```