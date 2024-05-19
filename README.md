# Study CI/CD

![alt text](.github/img/banner.png)

This repository is a small study on the application of some techniques used in CI and CD using github actions and Typescript.

## Definitions

- CI (Continuous Integration) - Detect and fix integration issues quickly, ensuring code is always stable and functional
    - Automated testing
    - Style check

- CD (Continuous Delivery) - Delivers new features or bug fixes to users quickly, securely and reliably
    - Generation of automatic preview, if it is web
    - Prepare automatic build

## CI/CD Testing with User Project

I've implemented CI/CD with a user project structure where the front-end is located in the app/web directory and the back-end in app/api. Through GitHub Actions, I simulated a CI/CD pipeline to ensure smooth integration and continuous delivery.

In this setup, the CI process involves automated testing and style checks for both the front-end and back-end components. It ensures that any integration issues are swiftly identified and resolved.

For the CD aspect, automatic previews simularion are generated for web applications, allowing for quick validation of new features or bug fixes. Additionally, automatic builds are prepared for seamless deployment to users, ensuring a reliable and efficient delivery process.
