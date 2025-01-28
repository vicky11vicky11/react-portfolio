import { createElement, useRef } from "react";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    // Send email to you
    emailjs
      .sendForm(
        'service_p37r907', 
        'template_kr21a3a', 
        form.current, 
        'Zza3fHy6xEn2-9Rs3'
      )
      .then(
        (result) => {
          console.log(result.text);

          // Send acknowledgment email to the user
          const userName = form.current.from_name.value;
          const userEmail = form.current.user_email.value;
          const userMessage = form.current.message.value;

          // Send acknowledgment email to the user using the correct template ID
          emailjs
            .send(
              'service_p37r907', // Same service ID
              'template_8a2trzp', // Correct acknowledgment template ID
              {
                to_name: userName, // User's name
                to_email: userEmail, // User's email
                message: userMessage, // User's message
              },
              'Zza3fHy6xEn2-9Rs3' // Your user email API key
            )
            .then(
              (result) => {
                console.log("Acknowledgment sent:", result.text);
              },
              (error) => {
                console.log("Error in acknowledgment email:", error.text);
              }
            );

          // Clear all input field values
          form.current.reset();
          // Success toast message
          toast.success("Email sent successfully, an acknowledgment has been sent to your email.");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <section className="bg-[#1a1a1a] text-white" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14">
        <h2 className="title !text-white" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email Id"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-slate-600 p-3 rounded h-44"
              required
            ></textarea>
            <button
              className="btn self-start
            bg-white text-dark_primary"
            >
              Submit
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
                <h4 className="text-white">{createElement(content.icon)}</h4>
                <a className="font-Poppins" href={content.link} target="_blank">
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
