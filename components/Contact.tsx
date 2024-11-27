import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Updated imports
import emailjs from "@emailjs/browser";

interface Props {}

const Contact: React.FC<Props> = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      if (form.current) {
        const result = await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        );

        console.log(result.text);
        setSubmitStatus("Email sent successfully!");
        // Reset form
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1 }}
      className="min-h-screen flex flex-col relative px-4 sm:px-6 md:px-8 py-24 max-w-7xl mx-auto"
    >
      <h3 className="uppercase text-gray-500 text-xl sm:text-2xl tracking-[8px] sm:tracking-[10px] mb-8 sm:mb-12 text-center">
        Contact
      </h3>

      <div className="flex-grow flex flex-col items-center justify-center w-full max-w-2xl mx-auto text-textPri">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">
          I have got just what you need.{" "}
          <span className="underline pl-2 text-[#A28B55]">
            Let&apos;s Talk.
          </span>
        </h2>

        <div className="space-y-4 mb-8">
          <p className="flex items-center justify-center">
            <FaPhoneAlt className="text-[#B99470] mr-3" size={18} />
            <span className="text-[#A28B55]">0404479019</span>
          </p>
          <p className="flex items-center justify-center">
            <FaEnvelope className="text-[#B99470] mr-3" size={18} />
            <span className="text-[#A28B55]">contact@quocchic.net</span>
          </p>
          <p className="flex items-center justify-center">
            <FaMapMarkerAlt className="text-[#B99470] mr-3" size={18} />
            <span className="text-[#A28B55]">Richmond VIC 3121</span>
          </p>
        </div>

        <form ref={form} onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-[#F8EDE3] p-3 rounded text-[#A28B55] text-xl placeholder-[#D4BDAC]"
              required
            />
            <input
              type="email"
              name="from_email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#F8EDE3] p-3 rounded text-[#A28B55] text-xl placeholder-[#D4BDAC]"
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="bg-[#F8EDE3] p-3 rounded w-full text-[#A28B55] text-xl placeholder-[#D4BDAC]"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-[#F8EDE3] p-3 rounded w-full h-32 text-[#A28B55] text-xl placeholder-[#D4BDAC] "
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-[#DEAC80] text-[#914F1E] font-bold py-3 px-6 rounded w-full hover:bg-[#EAB652] hover:text-backGroundPri transition duration-300 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
        {submitStatus && (
          <p
            className={`mt-4 ${
              submitStatus.includes("successfully")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {submitStatus}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Contact;
