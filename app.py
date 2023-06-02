import os
import requests
from flask import Flask, request
from dotenv import load_dotenv

# Set debugger from environ global env vars
# Avoid --debug, 'flask run' starts dev server
# os.environ.setdefault("FLASK_DEBUG", "1")

# Load env vars from .env file
load_dotenv()

# Get debugger from .env, set to False if not found
os.environ.get("FLASK_DEBUG", False)

# Instance of flask app
app = Flask(__name__)

# Copied Unsplash API params from client
UNSPLASH_URL = "https://api.unsplash.com/photos/random"
UNSPLASH_KEY = os.environ.get("UNSPLASH_KEY", "")

if not UNSPLASH_KEY:
    raise EnvironmentError(
        "Access denied, your token is invalid",
    )


# Search image api/route
# https://unsplash.com/documentation
@app.route("/search-image")
def search_image():
    newInput = request.args.get("query")
    headers = {
        "Accept-Version": "v1",
        "Authorization": "Client-ID " + UNSPLASH_KEY,
    }
    params = {"query": newInput}

    response = requests.get(
        url=UNSPLASH_URL,
        headers=headers,
        params=params,
    )

    data = response.json()
    return data


# Option 1:
# - start dev server from Flask - 'flask run --debug'
# - debug activates debugger to auto re-start server
# - as bove, set debug value to avoud using --debug

# Option 2:
# - start dev server from Python - 'python app.py'
# - may set host, port & debug, default port is 5000
# - option: put 'app.config["DEBUG"] = True' above
# if __name__ == "__main__":
#     app.run(
#         host="0.0.0.0",
#         port=8000,
#         debug=True,
#     )
