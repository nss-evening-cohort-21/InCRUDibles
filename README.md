# Pintwist
[View The App Here](https://pintwist.netlify.app/)

## Get Started
- [React Template Startup Readme](./templateReadMe.md)
- Or You can clone it and start editing here

`$ git clone git@github.com:nss-evening-cohort-21/InCRUDibles.git` 

`$ cd InCRUDibles`

## About the user
- The ideal user for Pintwist is anyone trying to keep track of their favorite collection of images
- They want to keep notes on project inspirations organized with pins of images in collections of boards

## Features
- Full CRUD
- Searches Pins
- Private and public pins/boards

## Video Walkthrough of Pintwist
https://www.loom.com/share/8331fafbc0ef4de49a8f81d9fd316573


## Relevant Links
- [Check out the deployed site](https://pintwist.netlify.app/)
- [Figma Wireframes](https://www.figma.com/file/WFw7x0oOBQEP4dRlcJmP9n/View-Pins%2FView-Community-Pins?node-id=0%3A1&t=jirkmuw0a5ElQ3E9-0)

<img width="400" alt="Pintwist Wireframe made using Figma" src="https://user-images.githubusercontent.com/114124374/215930863-2d30d1c5-e98f-45f2-8680-153095f64ff4.png">

- [ERD](https://dbdiagram.io/d/63d9b220296d97641d7d82da)
<img width="400" alt="Pintwist ERD made using dbDiagram" src="https://user-images.githubusercontent.com/114124374/216207529-5a8829d8-b70b-40bc-86f5-d419523997b7.png">

- Assumption: Each bin can fall under only one board. Boards can have many pins

- [Flowchart](https://docs.google.com/presentation/d/14K_78brmF34xRmJyRNIkDXiTfvUEtoJqHEhZ1VRxHyk/edit?usp=sharing)

## Code Snippet
```
  const getSearchResults = () => {
    getPins(user.uid).then((searchResultsArray) => {
      const filterResults = searchResultsArray.filter((pins) => pins.name.toLowerCase().includes(searchInput)
      || pins.description.toLowerCase().includes(searchInput)
      || pins.board_id.toLowerCase().includes(searchInput));
      setSearchResults(filterResults);
    });
  };
```

## Project Screenshots
<img width="1148" alt="Pintwist Home" src="https://user-images.githubusercontent.com/114124374/218232164-e926bcc1-e2f0-4c58-b63f-dca98d978a07.png">

### Tech/framework used
**Built with** 
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

### API Reference
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)

## Contributors

- [Dro Demby aka Dr. Dro](https://github.com/champayneblk)
- [DeAndre Hill aka Lil Dede](https://github.com/Dede-Git)
- [Angie Gonzalez aka Angie Badass](https://github.com/AngieMGonzalez)
- [Ryan Bigelow aka Ryan Thee $tallion](https://github.com/ryanmbigelow)
- [Wesley Vance aka A Tribe Called Wes aka TCDub](https://github.com/wesleybvance)
