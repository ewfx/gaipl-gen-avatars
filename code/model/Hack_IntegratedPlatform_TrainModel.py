#!/usr/bin/env python
# coding: utf-8

# In[1]:


from huggingface_hub import login

#login("")


# In[2]:


from transformers import AutoTokenizer, AutoModelForCausalLM

model = "microsoft/DialoGPT-medium"

# Initialize tokenizer and model
tokenizer = AutoTokenizer.from_pretrained("microsoft/DialoGPT-medium")
model = AutoModelForCausalLM.from_pretrained(model)

# Set the padding token to be the end-of-text token
tokenizer.pad_token = tokenizer.eos_token
model.config.pad_token_id = tokenizer.pad_token_id


# In[3]:


from datasets import load_dataset

# Login using e.g. `huggingface-cli login` to access this dataset
dataset = load_dataset("arsen-r-a/incident-management-qa-test1")


# In[8]:


dataset


# In[11]:


# Define a function to tokenize and prepare data
def tokenize_and_format(example):
    # Ensure we're using raw text for context and question
    context = example['context'] if isinstance(example['context'], str) else " ".join(example['context'])
    question = example['question'] if isinstance(example['question'], str) else " ".join(example['question'])

    # Concatenate context and question for input
    input_text = context + " " + question

    # Extract the 'text' field from 'answers' (if it's a dictionary)
    answer_text = example['answers']['text'][0] if isinstance(example['answers'], dict) and len(example['answers']['text']) > 0 else ""
    output_text = answer_text

    # Encode the input and output text
    input_encodings = tokenizer(input_text, truncation=True, padding="max_length", max_length=1000)
    output_encodings = tokenizer(output_text, truncation=True, padding="max_length", max_length=1000)

    # The labels for language models are often the same as input_ids
    labels = output_encodings["input_ids"]

    # Return inputs formatted for the model's forward method
    return {
        'input_ids': input_encodings['input_ids'],
        'attention_mask': input_encodings['attention_mask'],
        'labels': labels
    }


# In[12]:


# Tokenize the dataset
tokenized_dataset = dataset.map(tokenize_and_format, batched=True, remove_columns=dataset['train'].column_names)


# In[13]:


# Remove unused columns
#tokenized_dataset = tokenized_dataset.remove_columns(["prompt", "response"])


# In[16]:


from transformers import Trainer, TrainingArguments

# Define training arguments
training_args = TrainingArguments(
    output_dir='./results',
    per_device_train_batch_size=2,
    num_train_epochs=3,
    logging_dir='./logs',
)

# Initialize the Trainer
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=tokenized_dataset['train'],
    eval_dataset=tokenized_dataset['validation'],
    tokenizer=tokenizer
)

# Start training
trainer.train()

#Run this to test locall
def chat_with_bot():
    input_text = input("User: ")
    inputs = tokenizer.encode(input_text + tokenizer.eos_token, return_tensors="pt")
    outputs = model.generate(inputs, max_length=100, pad_token_id=tokenizer.eos_token_id)
    response = tokenizer.decode(outputs[:, inputs.shape[-1]:][0], skip_special_tokens=True)
    print(f"Bot: {response}")

# Run the chat loop
while True:
    chat_with_bot()
# In[17]:


model.save_pretrained("./incoutput_model")
tokenizer.save_pretrained("./incoutput_model")


