from flask import Flask, request
from dotenv import load_dotenv
# using SendGrid's Python Library
# https://github.com/sendgrid/sendgrid-python
import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

load_dotenv()

app = Flask(__name__)


@app.route("/send-email")
def send_email():

    """
    Atributos del email

    Parámetros:
        from_email (str): Email del remitente
        to_emails (str): Email del destinatario
        subject (str): Asunto del email
        html_content (str): Contenido del email
    """
    message = Mail(
        from_email=os.environ.get("MAIL_DEFAULT_SENDER"),
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
        return "Correo electrónico enviado"
    except Exception as e:
        print(e.message)
        return "Correo electrónico no enviado"


if __name__ == "__main__":
    app.run()
