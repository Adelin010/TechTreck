#Code for the generative Ai
import streamlit as slit
from PyPDF2 import PdfReader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.vectorstores import FAISS
from langchain.chains.question_answering import load_qa_chain
from langchain_community.chat_models import ChatOpenAI

OPENAI_API_KEY = "<Your key to the openai model>"

slit.header("Chatbot Application")
#Upload a pdf file, serves a info base
with slit.sidebar:
    slit.title("Documents")
    file = slit.file.uploader("Upload a PDF file and start asking question", type="pdf")

#Extract the text
if file is not None:
    pdf_reader = PdfReader(file)
    text_per_pages = [page.extract_text() for page in pdf_reader.pages]
    text = "".join(text_per_pages)

    #Broke the text into chunks 
    text_splitter = RecursiveCharacterTextSplitter(
        separators="\n",
        chunk_size = 1000,
        chunk_overlap = 150, 
        length_function = len
    )
    chunks = text_splitter.split_text(text)

    #generate embeddings
    embeddings = OpenAIEmbeddings(openai_api_key = OPENAI_API_KEY)

    #creating vector store
    vector_store = FAISS.from_texts(chunks, embeddings)

    #get user question
    user_question = slit.text_input("Type your question...")

    #do similarity search
    if user_question:
        matching = vector_store.similarity_search(user_question)

    #temperature is a variable between 0 and 1 that specify the degree of 
    #being random outside of topic for the generated text
    llm = ChatOpenAI(
        openai_api_key = OPENAI_API_KEY,
        temperature=0.1,
        max_tokens = 1500,
        model_name="gpt-3.5-turbo"
    )
    #output result
    chain = load_qa_chain(llm, chain_type="stuff")
    response = chain.run(input_documents= matching, question= user_question)
    slit.write(response)