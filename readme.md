![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)

# Starter APP (Ionic 7)

Starter APP es la base para crear una aplicación con Ionic 7, ya que contiene los elementos básicos que usamos en J-PYRSA.

Este tabajo está basado en mmmm y mmmm

## Built with
* Ionic CLI 7.2.0
* Angular 17.3.7
* @ionic/angular 17.3.7
* Capacitor 6.0.0
* Swiper 11.1.3
* Animate.css 4.1.1
* Chart.js 6.0.1

```
Ionic:

   Ionic CLI                     : 7.2.0 (/opt/homebrew/lib/node_modules/@ionic/cli)
   Ionic Framework               : @ionic/angular 8.1.1
   @angular-devkit/build-angular : 17.3.7
   @angular-devkit/schematics    : 17.3.7
   @angular/cli                  : 17.3.7
   @ionic/angular-toolkit        : 11.0.1

Capacitor:

   Capacitor CLI      : 6.0.0
   @capacitor/android : 6.0.0
   @capacitor/core    : 6.0.0
   @capacitor/ios     : 6.0.0

Utility:

   cordova-res : not installed globally
   native-run  : 2.0.1

System:

   NodeJS : v20.10.0 (/usr/local/bin/node)
   npm    : 10.2.5
   OS     : macOS Unknown
```

## Authors

- [@erwinpalma](https://www.github.com/erwinpalma)

## Features

* **15+ Pages**
* Guards
* Tabs
* Services
* Lazy loading
* Android/iOS ready
* Components and Actions samples
* Authentication


## Instalación

Clonar el repositorio por medio de

```bash
git clone https://github.com/J-Pyrsa/starterApp.git
```

Install my-project with npm

```bash
  cd starterApp
  npm install

  # Iniciar la happ
  ionic serve --no-open --host=127.0.0.1    
```
    
## Deployment

To deploy this project run

```bash
  npm run deploy
```

### ios

```bash
   ionic build
   ionic cap add ios
   ionic cap open ios
```

### Android

```bash
   ionic build
   ionic cap add android
   ionic capacitor run android -l --external --target Pixel_4_API_33
```
## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Support

Para soporte, crea un issue.

## Related

Here are some related projects

[devdactic.com](https://devdactic.com/ionic-5-navigation-with-login)

