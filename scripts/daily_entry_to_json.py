# There are some dependencies.
"""
!pip install langchain
!pip install openai
!pip install tiktoken
"""

from langchain import OpenAI
import json
from os import path

# Change the text and add your API key. It should be a paid account inorder to work.
openai_api_key = 'YOUR_API_KEY'

# Temperature is set to 0 for deterministic output.
llm = OpenAI(temperature=0, openai_api_key=openai_api_key)


# Prompt to Summarize the data.
# The area after the TEXT: should come from the app when the user enters the data. I haven't taken it as an input for demonstration purpose.
prompt = """
Please provide a summary of the individuals day from the answers to the questions in less than 100 words ?

TEXT:
Highlight of the day: "I had a really productive morning at work."
Moments that made her feel good: "I finished a challenging project at work, and I spent quality time with my family."
Time she felt low or challenged: "Balancing work and family has been a bit stressful this week."
Energy levels: "My energy levels fluctuate, but I try to maintain a balance with regular breaks and relaxation time."
Overall mood and significant events: "I'd say my mood has been balanced overall, with normal ups and downs. Work stress and family time both have significant impacts."
"""

"""
If we have input stored in some variable called "input" we can modify the prompt into this format.
Where will this data be stored ?

prompt = f""
Please provide a summary of the individuals day from the answers to the questions in less than 100 words ?

TEXT:
{input}
""
"""

# Checking the number of tokens it can be removed when we are making it as an app. 
"""
I was trying to minimize the tokens that is the reason why the prompt is to summarize the data in less than 100 words.
"""
num_tokens = llm.get_num_tokens(prompt)
# print (f"Our prompt has {num_tokens} tokens")

# Getting the output.
entry = llm(prompt)
# print(entry)
"""OUTPUT
The individual had a productive morning at work and finished a challenging project. She also spent quality time with her family. 
Balancing work and family has been a bit stressful this week, but she tries to maintain a balance with regular breaks and 
relaxation time. Her mood has been balanced overall, with normal ups and downs. Work stress and family time both have significant impacts.
"""

# Prompt for finding the mood of the user of the day from the summary of his/ her journal data.
prompt = f"""
In one word, describe the mood of the person of the day.

TEXT:
{entry}
"""

# checking the token can be skipped.
num_tokens = llm.get_num_tokens(prompt)
# print (f"Our prompt has {num_tokens} tokens")

# Finding the mood of the person.
mood = llm(prompt)
# print(mood)
"""OUTPUT
Serene
"""
# Loading the journal entry data. This shoud not be loaded like this need to fix later.
filename = '/content/student_journal.json'
listObj = []

# Check if file exists
if path.isfile(filename) is False:
  raise Exception("File not found")

# Read JSON file
with open(filename) as fp:
  listObj = json.load(fp)

# Printing the json data.
# print(listObj)
# print(type(listObj))

"""OUTPUT
{'entries': [{'mood': 'Anxious', 'entry': "Feeling overwhelmed today as the exams are approaching rapidly. The pressure is mounting, and I can't help but worry about whether I've studied enough. Thoughts of failure keep creeping into my mind, making it difficult to concentrate. I'm trying my best to stay focused and revise as much as I can, but the anxiety is overwhelming."}]}
"""

# Appending the data into the journal data.
listObj['entries'].append({
  "mood": mood.strip(),
  "entry": entry.strip(),
})

# Verifying the data.
# print(listObj)

# Dumping back the file as json.
with open(filename, 'w') as json_file:
    json.dump(listObj, json_file,
                        indent=4,
                        separators=(',',': '))

# print('Successfully appended to the JSON file')
"""OUTPUT
{'entries': [{'mood': 'Anxious', 'entry': "Feeling overwhelmed today as the exams are approaching rapidly. The pressure is mounting, and I can't help but worry about whether I've studied enough. Thoughts of failure keep creeping into my mind, making it difficult to concentrate. I'm trying my best to stay focused and revise as much as I can, but the anxiety is overwhelming."}, {'mood': 'Serene.', 'entry': 'The individual had a productive morning at work and finished a challenging project. She also spent quality time with her family. Balancing work and family has been a bit stressful this week, but she tries to maintain a balance with regular breaks and relaxation time. Her mood has been balanced overall, with normal ups and downs. Work stress and family time both have significant impacts.'}]}
Successfully appended to the JSON file
"""
