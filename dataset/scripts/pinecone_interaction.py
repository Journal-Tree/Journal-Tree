import pinecone

pinecone.deinit()  # De-initialize any existing Pinecone environments
pinecone.init(api_key="YOUR_PINECONE_API_KEY")  # Initialize Pinecone with your API key

index_name = "mood-journal-entries"  # Name of the index to create/use

# Check if the index already exists
if index_name not in pinecone.list_indexes():
    pinecone.create_index(index_name=index_name, metric="cosine", shards=1)

# Instantiate the index
index = pinecone.Index(index_name=index_name)

def add_entry(date, entry):
    # Add a new entry to the index
    index.upsert(items={date: [entry]})

def get_entry(date):
    # Get an entry from the index
    return index.fetch(ids=[date])

# Don't forget to de-initialize Pinecone when you're done
# pinecone.deinit()
