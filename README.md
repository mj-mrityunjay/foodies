# foodie - steps to MicroFrontend with Piral

Many modern backend system landscapes follow the architecture pattern of microservices, while the frontends are still mostly implemented as single applications, which integrate with the entire backend as a kind of monolithic solution.

The Piral ecosystem offers the framework for building microfrontend solutions, which allows the creation of distributed web applications reflecting the flexibility and modularized structure of a microservice backend.

This application is a steps towards building a microfrontend application using monolithic application design.

## Overview

<p align="center">
    <img  alt="Designing Micro Frontend with Piral" src="https://tireades.sirv.com/img/MJ/foodie-app.PNG" class="img-responsive">
</p>

## Demo

Click here to see the demo [foodie - steps to MicroFrontend with Piral](https://mrityunjaykfoodie.netlify.app/)

## Components
Piral - Host App with basic services
  - foodie
  
Pilets - distributes apps with independent features published to feed service
  - foodies-menu-pilet
  - foodies-login-pilet
  - foodies-home-pilet
  - foodies-checkout-pilet
  - foodies-dynamic-checkout-pilet
  - foodies-dynamic-thanks-pilet
  - foodies-invoice-pilet
  - foodies-myaccount-addresses-pilet
  - foodies-myaccount-favourites-pilet
  - foodies-myaccount-offers-pilet
  - foodies-myaccount-orders-pilet
  - foodies-myaccount-payments-pilet
  - foodies-myaccount-pilet
  - foodies-offers-pilet
  - foodies-resturants-pilet
  - foodies-thanks-pilet
  - foodies-track-orders-pilet



## install, debug, Build, publish

To install piral cli
```
> npm i piral-cli -g
```

To install packages, piral and for pilets, please go to respective directory and use below command
```
> npm install
```

To debug piral application
```
> piral debug
```

To debug individual pilet application
```
> pilet debug
```

To build piral app. The build artifacts will be stored in the `dist/` directory. 
```
> piral build
```

To build pilet app. The build artifacts will be stored in the `dist/` directory. 
```
> pilet build
```

To publish piral app.  
```
> piral publish
```

To publish pilet app. After publish, application will be uploaded to given feedservice and available via feeds. 
```
> pilet publish --fresh --url https://feed.piral.cloud/api/v1/pilet/<your-feed> --api-key <your-api-key>
```

## Read More
To know more about the approach and usage, [check the blog](https://mks-mrityunjay.medium.com/a-walk-towards-micro-frontend-using-piral-bd8c0361ad31).

To know more about Piral and Pilet, [Check piral.io](https://docs.piral.io/)

## Credits
Piral (https://piral.io)

## License
MIT
