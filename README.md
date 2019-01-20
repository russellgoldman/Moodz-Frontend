# Moodz
Promoting safe and legal consumption of cannabis products

## Tools
- Standard Library (Backend) implemented by Noah Houpt and Yernar Akimzhanov
- React Native (Frontend) implemented by Russell Goldman
- Figma (Design Mockups) implemented by Max Bardus

## Inspiration
On October 17th, 2018, Canada became the 2nd country in the world to legalize recreational cannabis. Not only was this a major historical moment but proved to be an economic game-changer as the Canadian cannabis market has been valued at upwards of [$31 billion dollars](https://business.financialpost.com/cannabis/spain-colombia-next-frontier-for-canadas-deal-hungry-pot-firms). 

As eager innovators, we are constantly exploring new ways to solve problems that were once dismissed as impossible. Unfortunately, legality can oftentimes get in the way of such innovation, but no longer. So we gathered and thought to ourselves, what are some of the most prevalent issues in the cannabis space?

According to an IPSOS poll, [over one-third of Canadians who purchased from legal sources have since gone back to the black market](https://globalnews.ca/news/4669761/legal-marijuana-black-market/). In Ontario specifically, the only current legal route is through the Ontario Cannabis Store. Through this project, our objective is to promote legal and safe cannabis consumption. Although there is nothing we can do to improve the OCS directly, we thought why not create further incentive for Canadians to purchase legal cannabis through a mobile service.

## What it does
We thought to ourselves, "if people are going to consume cannabis anyways, we might as well help ensure it is done safely." With that in mind, we created an app that does two things primarily. The first is through incentivizing users to purchase legal cannabis through the OCS exclusively. Our solution is a mobile service, whose features can only be unlocked fully if the user utilizes our image recognition and machine learning software to validate that the packaging that held their purchased cannabis is from the OCS directly. The features included behind this wall include a recommendation system that is personalized to the user, as well as a way to track what strains have been validated through the app in the past. In addition to all of this, the app includes a plethora of information about each strain available through the OCS in order to hopefully allow the user to make their most informed decision on their next purchase of legal cannabis. 

## How we built it
In order to make our idea a reality, a variety of technologies were utilized. Figma was a software used on the UI/UX side of things in order to create mock-ups of what the intended end product would look like. On the front end, React Native alongside Expo was utilized for its' strengths in cross-platform development in order to target as many users as possible in a small amount of time. We utilized Standard Library and Node.js for our backend - these technologies were chosen due to the amount they ease the development process, as well as their verbosity. The database utilized was JSONbin.io, which allowed for a straightforward way of housing our data. For image recognition and machine learning, we utilized the Google Vision API. 

## Challenges we ran into
Creating an application slated to help reduce the number of consumers of illegal cannabis is not an easy undertaking. That is why we believe the most challenge aspect of this project occurred during the design process. As a team, it took us many hours to come to a conclusion on what we felt would be a good way to tackle this problem. Many iterations occurred, but we are proud of our end product.

## Accomplishments that we're proud of
Overall, we are most proud of the amount of work that the team managed to pull off in the hours we had to hack. We developed a fully functional front-end that was designed with the help of a UI/UX designer. On the back-end, although the Google Vision API was not utilized to its fullest capabilities, we still managed to design a fully functional REST API that was wired to a database. This API contained valuable endpoints that could then be utilized by the front-end developer. We feel we were successful in splitting up our tasks to maximize efficiency, and yet still stay coordinated enough to bring our efforts together for a good final product.

## What we learned
In addition to increasing proficiency in the technologies utilized, we all feel our ability to work in a development team has improved. We learned the value in having a team from different technical backgrounds, and how this could lead to a stronger final product. 

## What's next for Moodz
There are many directions Moodz can go in from here. This app can expand in the number of features it holds easily, thus further incentivizing its use. For example, it could become a resource on how to consume cannabis safely and who to contact if something goes wrong. On the technical side, our use of the Google Vision API could become more sophisticated to further improve accuracy. Also, a web scrapper could be produced that allows for our database to be updated continuously. 