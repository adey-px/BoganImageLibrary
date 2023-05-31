from flask import Flask

# Create instance of flask
app = Flask(__name__)


@app.route("/")
def hello():
    return "Hello, World!"


# App server config
# if not set, default port is 5000
if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=8000,
        debug=True,
    )
