# RAM-RAM



## Project Description

RAM-RAM is a React and Airtable build that is decision based adventure game. At home screen it will prompt and ask the user for their Avatar's name. The home screen will also display Previous attempts which displays the names and status of the avatars that are within the airtable. Once you type in a name and press play, you will be prompted to another screen where you would be given multiple dialogues. Each one will have four decisions. Where some will prompt you to instant death and take you to a death screen, or affect the karmic system through a point system. 

## Wireframes

The wireframe below basically shows how RAM-RAM would be viewed on both a desktop and mobile version. Being that it is a similar setup it should feel at home wherever you access it. 

![imageAlt](https://i.ibb.co/6Yvfs7k/Screen-Shot-2021-09-20-at-3-22-45-PM.png)
![imageAlt](https://i.ibb.co/p1cT3Jc/Screen-Shot-2021-09-20-at-3-18-56-PM.png)
![imageAlt](https://i.ibb.co/hgfstWW/Screen-Shot-2021-09-20-at-3-20-35-PM.png)
![imageAlt](https://i.ibb.co/c1kfdWc/Screen-Shot-2021-09-20-at-3-21-06-PM.png)
![imageAlt](https://i.ibb.co/r3PxQXD/Screen-Shot-2021-09-20-at-3-21-49-PM.png)

## Component Hierarchy

![imageAlt](https://i.ibb.co/gF35FPT/Screen-Shot-2021-09-27-at-9-38-53-AM.png)

## API and Data Sample

https://airtable.com/shrj9uVFcL7qXRnbR

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
- Have the player assigned a rank at death or at completion of chapter
- Have a post request once the player dies or completes a chapter
- Chapter one must be complete
- Basic css outline


#### PostMVP

- Completion Chapters 2
- Completion of Chapter 3
- Have images in the background of the dialogue to set the mood.
- Have a leaderboard page that shows a larger list of avatars.
- Have a victory page
- Have State within the dialogue
- Advance/New Css features

## Project Schedule

| Day      | Deliverable                                | Status   |
| -------- | ------------------------------------------ | -------- |
| Sep 17-19 | Proposal Approval / Airtable Setup        | Complete |
| Sep 20   | Component Creation / Home and Chapter Page | Complete |
| Sep 21   | Airtable recieving posts / Posting ranks   | Complete |
| Sep 22   | CSS outline / MVP / Chapter 2 and 3        | Partial |
| Sep 23   | Background pictures / Leaderbaord page     | Partial |
| Sep 24   | Presentations                              | InComplete |

## Timeframes

| Component                 | Priority | Estimated Time | Time Invested |
| ------------------------- | :------: | :------------: | :-----------: |
| Proposal                  |    H     |      3hrs      |     2.5hrs      |
| Airtable setup            |    H     |     .5hrs      |      1hr      |
| Clickable icons           |    M     |      1hrs      |      1hr      |
| Home Page     |    H     |      3hrs      |     3hrs      |
| Chapter one page     |    H     |      3hrs      |     3hrs      |
| Post request     |    H     |      2hrs      |     2.5hrs      |
| Get request       |    H     |      1hr      |     1hr      |
| Death Page    |    H     |      1.5hr      |     1 hr      |
| Home page css     |    H     |      2hrs      |     2.5 hrs      |
| Chapter one css |    H     |      3hrs      |     3hrs      |
| Death Page css |    H     |      3hrs      |      1hr      |
| Chapter 2 page |    L     |      3hrs      |      1hr      |
| Chapter 2 css |    L     |      3hrs      |      0hr      |
| Story development ch.1       |    H     |      3hrs      |      3hrs      |
| Story development ch.2       |    H     |      3hrs      |      2hrs      |
| Total                     |    H     |    35hrs     |     28.5hrs     |

## SWOT Analysis

### Strengths:
My strenths would be having a solid idea of the functional layout of the website. I knew that i wanted this decision based game to be similar to something like a quiz in a way. That would help layout a system where i can call functions according to the specific decision the person makes.

### Weaknesses:
My weaknesses is mostly css. Styling has not been my strong suit since i like to have very basic designs, but i do like to make them comfortbale. I will try to add more features and get comfortable with those so to me its still very normal but still something new at the same time.

### Opportunities:
My opportunities would lie on the fact that the internet has an abundance of help, as well as my cohorts. Ill be able to solidify my knowledge as well as learn new things. I want to learn more things css wise and get more comfortable doing different designs. 

### Threats:
Any threats would probably be using State i react and getting overwhelmed. But Ill make sure to break things down to avoid being overwhelmed. I'll also reach out in case i get stuck regarding the functionality of everything. 
