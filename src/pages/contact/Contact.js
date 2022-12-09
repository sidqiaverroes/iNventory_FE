import React, { useState } from "react";
import Card from "../../components/card/Card";
import "./Contact.scss";
import { FaPhoneAlt, FaEnvelope, FaTwitter } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { toast } from "react-toastify";
import axios from "axios";
import { BACKEND_URL } from "../../services/authService";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const data = {
    subject,
    message,
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BACKEND_URL}/api/contactus`, data);
      setSubject("");
      setMessage("");
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="contact">
      <h3 className="--mt">Contact Us</h3>
      <div className="section">
        <Card cardClass="card">
          <form onSubmit={sendEmail}>
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <label>Message</label>
            <textarea
              cols="30"
              rows="10"
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              className="--btn --btn-primary"
              style={{ marginTop: "2rem" }}
            >
              Send Message
            </button>
          </form>
        </Card>

        <div className="details">
          <Card cardClass={"card2"}>
            <h3>Our Contact Information</h3>
            <p>Fill the form or contact us via other channels listed below</p>

            <div className="icons">
              <span>
                <FaPhoneAlt />
                <p>08123456789 </p>
              </span>
              <span>
                <FaEnvelope />
                <p>paw10patrol@outlook.com</p>
              </span>
              <span>
                <GoLocation />
                <p>Yogyakarta, Indonesia</p>
              </span>
              <span>
                <FaTwitter />
                <p>@pawpatrol10</p>
              </span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
