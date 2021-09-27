# RAM-RAM



## Project Description

RAM-RAM is a React and Airtable build that is decision based adventure game. At home screen it will prompt and ask the user for their Avatar's name. The home screen will also display Previous attempts which displays the names and status of the avatars that are within the airtable. Once you type in a name and press play, you will be prompted to another screen where you would be given multiple dialogues. Each one will have four decisions. Where some will prompt you to instant death and take you to a death screen, or affect the karmic system through a point system. 

## Wireframes

The wireframe below basically shows how RAM-RAM would be viewed on both a desktop and mobile version. Being that it is a similar setup it should feel at home wherever you access it. 

![imageAlt](https://i.ibb.co/6Yvfs7k/Screen-Shot-2021-09-20-at-3-22-45-PM.png)
![imageAlt](https://ibb.co/kG1KW88)
![imageAlt](https://ibb.co/QfpSGWF)
![imageAlt](https://ibb.co/XDB7WGc)
![imageAlt](https://ibb.co/xhmR5tN)

## Component Hierarchy

<!-- ![imageAlt](https://i.imgur.com/PhRA82l.png) -->

## API and Data Sample

https://airtable.com/shrTv92TftYf4SVZZ

Airtable is returning the data for this base as follows:

```
{
    "records": [
        {
            "id": "recRsfVl4V4Gq7U5j",
            "fields": {
                "name": "Steve",
                "rank": "Commander",
                "status": "Corporal"
            },
            "createdTime": "2021-09-17T13:11:34.000Z"
        }
    ],
    "offset": "recRsfVl4V4Gq7U5j"
}
```

### MVP/PostMVP

#### MVP

- Home screen lists the scoreboard and the name input with the play button. 
- Have functional dialogue that transitions after every choice selection.
- Have certian scenarios that can prompt the current player to instant death.
- Make sure death page has a button to return to home screen.
- Create a karmic system that determines a players rank
- Have a post request once the player dies or completes a chapter


#### PostMVP

- Finish Chapters 2 and 3
- Have images in the background of the dialogue to set the mood.
- Have a leaderboard page that shows a larger list of avatars.

## Project Schedule

| Day      | Deliverable                                | Status   |
| -------- | ------------------------------------------ | -------- |
| Sep 17-19 | Proposal Approval / Airtable Setup        | Complete |
| Sep 20   | Component Creation / Home and Chapter Page | InComplete |
| Sep 21   | Airtable recieving posts / Karmic system   | InComplete |
| Sep 22   | CSS outline / MVP / Chapter 2 and 3        | InComplete |
| Sep 23   | Background pictures / Leaderbaord page     | InComplete |
| Sep 24   | Presentations                              | InComplete |

## Timeframes

| Component                 | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal                  |    H     |      2hrs      |     2hrs      |    2hrs     |
| Airtable setup            |    H     |     .5hrs      |      1hr      |     1hr     |
| Clickable icons           |    H     |      1hrs      |      1hr      |     1hr     |
| Data population pg 1      |    H     |      3hrs      |     3hrs      |    3hrs     |
| Data population pg 2      |    H     |      3hrs      |     2hrs      |    2hrs     |
| Data population pg 3      |    H     |      3hrs      |     2hrs      |    2hrs     |
| Form creation pg 1        |    H     |      2hrs      |     2hrs      |    2hrs     |
| Form creation pg 2        |    H     |      2hrs      |     1 hr      |    1 hr     |
| Form creation pg 3        |    H     |      2hrs      |     1 hr      |     1hr     |
| Data creation/update pg 1 |    H     |      3hrs      |     3hrs      |    3hrs     |
| Data creation/update pg 2 |    H     |      3hrs      |      1hr      |     1hr     |
| Data creation/update pg 3 |    H     |      3hrs      |      1hr      |     1hr     |
| Data deletion pg 1        |    H     |      2hrs      |      1hr      |     1hr     |
| Data deletion pg 2        |    H     |      2hrs      |      1hr      |     1hr     |
| Data deletion pg 3        |    H     |      2hrs      |      1hr      |     1hr     |
| Component CSS pg 1        |    H     |      3hrs      |     4hrs      |    4hrs     |
| Component CSS pg 2        |    H     |      3hrs      |     4hrs      |    4hrs     |
| Component CSS pg 3        |    H     |      3hrs      |     4hrs      |    4hrs     |
| Total                     |    H     |    42.5hrs     |     35hrs     |    35hrs    |

## SWOT Analysis

### Strengths:


### Weaknesses:


### Opportunities:


### Threats:

