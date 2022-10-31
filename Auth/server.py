from flask import Flask, request, jsonify
import os
from dotenv import load_dotenv, find_dotenv
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

load_dotenv(find_dotenv())

app = Flask(__name__)


@app.route("/email")
def email():
    # using SendGrid's Python Library
    # https://github.com/sendgrid/sendgrid-python

    """
    Atributos del email

    Parámetros:
        from_email (str): Email del remitente
        to_emails (str): Email del destinatario
        subject (str): Asunto del email
        html_content (str): Contenido del email
    """
    message = Mail(
        from_email=request.args.get("from"),
        to_emails=request.args.get("to"),
        subject=request.args.get("subject"),
        html_content=request.args.get("body"),
    )

    try:
        sg = SendGridAPIClient(os.environ.get("SENDGRID_API_KEY"))
        response = sg.send(message)
        print(response.status_code)
        print(response.body)
        print(response.headers)
        return "Email sent"
    except Exception as e:
        print(e.message)
        return "Email not sent"


if __name__ == "__main__":
    app.run()
