import React, { useRef } from "react";
import { Card, Button, TextInput, Textarea, Label } from "flowbite-react";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import emailjs from "@emailjs/browser"; // ✅ correct import
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uoc5w8w",   // your EmailJS Service ID
        "template_zcnjuy8",  // your EmailJS Template ID
        form.current,
        "xHUiKVtb_nTfS0zu6"  // your EmailJS Public Key
      )
      .then(
        (result) => {
          // alert("Message sent! I will get back to you soon.");
          toast.success("Message sent! I will get back to you soon.")
          e.target.reset(); // clear the form
        },
        (error) => {
          alert("Oops! Something went wrong. Try again later.");
        }
      );
  };

  return (
    <Card className="mt-4 mb-2">
      <h2 className="text-2xl md:text-3xl text-blue-600 font-bold text-center mb-3">
        Contact Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Contact Info */}
        <Card className="md:pb-63 lg:pb-60">
          <h2 className="text-lg md:text-2xl font-bold mb-4 text-blue-600">
            Contact Information
          </h2>
          <div className="space-y-6 text-gray-900 dark:text-white">
            <div className="flex items-center gap-4">
              <HiOutlineMail className="text-2xl text-blue-600" />
              <a
                href="mailto:linkontripura@gmail.com"
                className="text-lg md:text-xl underline hover:text-blue-700"
              >
                linkontripura@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <HiOutlinePhone className="text-2xl text-blue-600" />
              <a
                href="tel:+8801670658012"
                className="text-lg md:text-xl underline hover:text-blue-700"
              >
                +8801670658012
              </a>
            </div>
          </div>
        </Card>

        {/* Right: Contact Form */}
        <Card className="flex flex-col justify-start">
          <h2 className="text-lg md:text-2xl font-bold mb-4 text-blue-600">
            Send me a message
          </h2>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <div>
              <Label htmlFor="name" value="Your Name" />
              <TextInput
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <Label htmlFor="email" value="Your Email" />
              <TextInput
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <Label htmlFor="subject" value="Subject" />
              <TextInput id="subject" name="subject" placeholder="Subject" required />
            </div>
            <div>
              <Label htmlFor="message" value="Message" />
              <Textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                required
                rows={4}
              />
            </div>
            <Button type="submit" className="mt-4">
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </Card>
  );
};

export default Contact;
