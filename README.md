# task.ify-frontend
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]




<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Takeoff-Tec/task.ify-frontend">
    <img src="https://i.imgur.com/rMdsZcE.png" alt="Logo" width="800" height="300">
  </a>

  <p align="center">
    Task.ify: Streamlining your tasks with AI-curated playlists in a click.
    <br />
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Task.ify is a productivity-focused music application that harnesses the power of AI. Users log in via Spotify OAuth, fill out a task form specifying the desired vibe and duration, and the app then curates a tailored playlist, that is also inserted into the user's spotify account, for that task. Once the playlist is ready, users simply click the "Start Activity" button, which streams the playlist accompanied by a timer. Task.ify streamlines the tedious process of making playlists for activities in user's lives by using a simple user input form to ai curate the perfect playlist for each activity!

Take a Look @ Task.ify: https://taskify-frontendhost-2277661894f3.herokuapp.com/

### Built With

* ![React](https://img.shields.io/badge/React-%5E18.2.0-blue?logo=react&logoColor=white)
* ![TypeScript](https://img.shields.io/badge/TypeScript-%5E5.0.2-blue?logo=typescript&logoColor=white)
* ![Material-UI](https://img.shields.io/badge/Material--UI-%5E5.14.1-blue?logo=material-ui&logoColor=white)
* ![Vite](https://img.shields.io/badge/Vite-%5E4.4.8-blue?logo=vite&logoColor=white)
* ![Docker](https://img.shields.io/badge/Docker-%5E3.0.1-blue?logo=docker&logoColor=white)
* ![Axios](https://img.shields.io/badge/Axios-%5E1.4.0-blue?logo=axios&logoColor=white)
* ![Express](https://img.shields.io/badge/Express-%5E4.18.2-blue?logo=express&logoColor=white)
* ![Jest](https://img.shields.io/badge/Jest-%5E29.6.1-blue?logo=jest&logoColor=white)
* ![Enzyme](https://img.shields.io/badge/Enzyme-%5E3.11.0-blue?logo=enzyme&logoColor=white)





<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Installation

1. Follow the instruction in the https://github.com/Takeoff-Tec/task.ify-backend](https://github.com/Takeoff-Tec/task.ify-backend) `README.md`
2. Clone the repo
   ```sh
   git clone https://github.com/Takeoff-Tec/task.ify-frontend
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
3. Setup Backend Server connection in `/services/constants.ts`
   ```sh
   export const PRODUCTION_API_BASE_URL = 'YOUR BACKEND HOST URL'
   ```


<!-- USAGE EXAMPLES -->
## Usage





<!-- ROADMAP -->
## Roadmap

- [x] Landing Page with Login button route to Spotify OAuthentication
- [x] Task Deck
- [x] Creation of Playlist with Tracks inserted in Spotify API
- [x] Timer and Tracks play through iFrame
    - [x] Plays song directly from Spotify

See the [open issues](https://github.com/Takeoff-Tec/task.ify-frontend/issues) for a full list of proposed features (and known issues).




<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request




<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Pierre Johnson - [linkedin](https://www.linkedin.com/in/pierrelasaine) - pierrelasaine@gmail.com 

Camila Naranjo - [linkedin](https://www.linkedin.com/in/camilavnaranjo) - camilavnaranjoa@gmail.com 

Maria Fernanda Palacios Martinez - [linkedin](https://www.linkedin.com/in/maria-fernanda-palacios-14998518a?trk=contact-info) - 03fernanda.palacios@gmail.com

## Project Links

Backend Project Link: [https://github.com/Takeoff-Tec/task.ify-backend](https://github.com/Takeoff-Tec/task.ify-backend) 

Frontend Project Link: [https://github.com/Takeoff-Tec/task.ify-frontend](https://github.com/Takeoff-Tec/task.ify-frontend)

Deployed Site Link: https://taskify-frontendhost-2277661894f3.herokuapp.com/




<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [A'shuan Thomas](https://github.com/lasagnamassage)
* [Sammy Au](https://github.com/samau3)
* [Paige Godfrey](https://github.com/paigegodfrey)
* Nilesh Patel (Salesforce Mentor)
* Samuel Paramar (Salesforce Mentor)
* Ryan Warnock (Salesforce Mentor)
* Salesforce FTL Cohort 2023




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Takeoff-Tec/task.ify-frontend.svg?style=for-the-badge
[contributors-url]: https://github.com/Takeoff-Tec/task.ify-frontend/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Takeoff-Tec/task.ify-frontend.svg?style=for-the-badge
[forks-url]: https://github.com/Takeoff-Tec/task.ify-frontend/network/members
[stars-shield]: https://img.shields.io/github/stars/Takeoff-Tec/task.ify-frontend.svg?style=for-the-badge
[stars-url]: https://github.com/Takeoff-Tec/task.ify-frontend/stargazers
[issues-shield]: https://img.shields.io/github/issues/Takeoff-Tec/task.ify-frontend.svg?style=for-the-badge
[issues-url]: https://github.com/Takeoff-Tec/task.ify-frontend/issues
[license-shield]: https://img.shields.io/github/license/Takeoff-Tec/task.ify-frontend.svg?style=for-the-badge
[license-url]: https://github.com/Takeoff-Tec/task.ify-frontend/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555

[product-screenshot]: images/screenshot.png
