# microfrontend-poc
Poc for the concept of microfrontend i.e. having multiple angular 5 applications on same page using NPM package apporach

Objective of POC to derive an approach to unify multiple application developed using angular 2+ framework into a single large application.
This means, providing each application as a package via (a private) npm registry or the monorepo approach and consuming it in a shell application.

This particulary shows what am I trying to achieve here.
https://github.com/tiwarirahul/microfrontend-poc/blob/master/Architecture.PNG

To demonstrate the concept, here
Created a angular-cli project in which a basic shell application with Header & navigation option to navigate through the applications.

The applications for which navigation links are provided, has been included as npm packages could be found in libs folder https://github.com/tiwarirahul/microfrontend-poc/tree/master/Shell/libs.

Along with applications, there is one common-service lib as well just to extend the idea of npm package to resuable services across all the applications including shell.

Here I have basic logger & alert service which are injected into one of the applications. 
One thing to notice though provider for common-services via shared module has been done through root module to keep services singleton.







Other references on Similar note.

https://medium.freecodecamp.org/reusable-web-application-strategies-d51517ea68c8
https://softwarearchitekt.at/post/2017/12/28/a-software-architect-s-approach-towards-using-angular-and-spas-in-general-for-microservices-aka-microfrontends.aspx
