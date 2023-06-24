# Project Overview

**Goal:** Develop a journaling application dedicated to mental health, utilizing the power of Pinecone and LLMs

## Capabilities of the App:

- Users can interact with the app daily or as frequently as they prefer, to confidentially document their daily experiences, emotions, and dietary habits.
- Users can view an analysis of their mood patterns and emotions, along with potential triggers (text anxiety, interpersonal relationships, seasonal depression, dietary changes, etc).

## Benefits for Users:

- Gain a deeper understanding of factors that influence their moods
- Share their mood analysis with their therapist
- In the second version, engage with an AI therapist that comprehends them through their journal entries

## App Functionality:

The user interface of the app is divided into three sections:

1. A screen for inputting the day's journal entry, with 3-5 prompts provided for user input
2. A section for accessing historical journal entries
3. A screen that provides a summary of the user's emotions over the past 30 days, 90 days, and a year

## Post-Journal Entry Actions:

After each journal entry, the app performs the following:

- Breaks down the entry into snippets based on concept or mood
- Utilizes GPT-3.5-turbo or GPT-4 to extract 3-5 keywords/concepts, along with additional metadata (timestamp)
- Updates or inserts the data into a Pinecone database

## Analysis Screen:

- Provides a toggle for viewing the past 30 days, 90 days, or a year
- Displays mood clusters and a word cloud of concepts (for example, 'anxious' appears larger than 'depressed' if 'anxious' is more frequent)

## Screenshots
<img width="689" alt="Welcomescreen" src="https://github.com/Journal-Tree/Journal-Tree/assets/71754706/7374288d-4232-43c5-a850-69eb4c901f04">


## Links to Shared Platforms:

- [Discord Server]()
- [Devpost Team Information]()

## Important Dates:

- Project Deadline - June 26, 2023


## Evaluation Criteria:

- Testing by each team member
- Final bug fixes
- Deployment submission

## Advice from Harrison Chase:

- LangChain: Use for extraction and tagging
- PineCone: Acts as the AI's long-term memory
