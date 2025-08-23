import React from "react";
import { Card, Button, TextInput, Textarea, Label } from "flowbite-react";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

const Contact = () => {
  return (
    <Card className="mt-4 mb-2">
      <h2 className="text-2xl md:text-3xl text-blue-600 font-bold text-center mb-3">
        Contact Me
      </h2>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Contact Info */}
          <Card>
            <h2 className="text-lg md:text-2xl font-bold  mt-0 mb-4 text-blue-600">
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
          <Card className=" flex flex-col justify-start">
            <h2 className="text-lg md:text-2xl font-bold mb-4 text-blue-600">
              Send me a message
            </h2>
            <form className="flex flex-col gap-4">
              <div>
                <Label htmlFor="name" value="Your Name" />
                <TextInput id="name" placeholder="Enter your name" required />
              </div>
              <div>
                <Label htmlFor="email" value="Your Email" />
                <TextInput
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <Label htmlFor="subject" value="Subject" />
                <TextInput id="subject" placeholder="Subject" required />
              </div>
              <div>
                <Label htmlFor="message" value="Message" />
                <Textarea
                  id="message"
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
      </div>
    </Card>
  );
};

export default Contact;
