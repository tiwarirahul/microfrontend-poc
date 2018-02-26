# microfrontend-poc
Poc for the concept of microfrontend i.e. having multiple angular 5 applications on same page using NPM package apporach

Objective of POC to derive an approach to unify multiple application developed using angular 2+ framework into a single large application.
This means, providing each application as a package via (a private) npm registry or the monorepo approach and consuming it in a shell application.

This particulary shows what am I trying to achieve here.
https://github.com/tiwarirahul/microfrontend-poc/blob/master/Architecture.PNG

To demonstrate the concept, here
Created a Poc project in which a basic shell applicaiton with Header & navigation option to navigate through the applications.

The applications for which navigation links are provided, has been included as npm packages could be found in libs folder.
Along with applications, created one common-service lib as well to extend the idea of npm package to basic resuable services.

Here I have created basic logger & alert service and injected within the applications. 
One thing to notice though provide for common-services will be root module to kept services singelton.



