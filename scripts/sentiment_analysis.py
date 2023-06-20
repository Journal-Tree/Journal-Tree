import json
import requests

API_KEY = "YOUR_LLM_API_KEY"

def analyze_sentiment(text):
    response = requests.post(
        "https://api.llm.ai/v1/sentiment",
        headers={"Authorization": f"Bearer {API_KEY}"},
        json={"text": text},
    )
    return response.json()

# Load your JSON data
with open('your_data.json') as f:
    data = json.load(f)

# Assume each item in your data is a dictionary with a 'text' field
for item in data:
    text = item['text']
    sentiment = analyze_sentiment(text)
    print(f'Text: {text}')
    print(f'Sentiment: {sentiment}')
