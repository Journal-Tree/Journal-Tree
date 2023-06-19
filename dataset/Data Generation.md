# Generating journal entries alongside mood labels with ChatGPT
## Prompt
The prompts use a role for ChatGPT to assume when writing the entry. we use a JSON format for the output to make it easier
to parse with code.

**Example:**
`As a 21 year old student with exams looming, you undertake to write some journal entries from a variety of moods for a period of two weeks. 
Please proceed to write entries in the json format:  { mood:"Insert mood here",  entry:"journal entry here"}`

## Usage
The resulting entries will be used as sample data to the application. The mood label can be used to sanity check the classification that the application gives to the journal entry.