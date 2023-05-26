import React, { useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import { useFormik } from "formik";
import { contactSchema } from "../schema/contactSchema";
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID || "";
  const templateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID || "";
  const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY || "";

  const form = useRef<any>();

  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const loadingSVG = (
    <>
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </>
  )

  const { handleSubmit, handleChange, handleBlur, isSubmitting, values, touched, errors } =
    useFormik({
      initialValues: {
        user_name: "",
        user_email: "",
        message: "",
      },
      validationSchema: contactSchema,
      onSubmit: (values, { setSubmitting, resetForm }) => {
        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
          .then((result) => {
            setSent(true);
            resetForm();
          })
          .catch((error) => {
            setError(true);
          })
          .finally(() => {
            setSubmitting(false);
          });
      },
    });

  return (
    <section
      id="contact"
      className="lgl:py-18 mx-auto max-w-contentContainer py-10 flex flex-col gap-4"
    >
      <SectionTitle title="Contact Me"></SectionTitle>
      {sent ? (
        <>
          <h3 className="text-green-600 text-center tracking-wider">Message sent successfully</h3>
        </>
      ) : ("")}
      {error ? (
        <>
          <h3 className="text-red-500 text-center tracking-wider">Something went wrong! Please try again later</h3>
        </>
      ) : ("")}
      <div className="m-auto w-full md:w-2/3 lgl:w-1/2">
        <form ref={form} onSubmit={handleSubmit} noValidate>
          <div className="mb-4 flex flex-col gap-2">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="user_name"
              id="name"
              placeholder="Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.user_name}
              className="rounded-md border border-textGreen bg-timelineColor px-4 py-2 text-textLight outline-none"
            />
            {touched.user_name && errors.user_name && (
              <small className="text-red-600 tracking-wide text-sm italic">
                {errors.user_name}
              </small>
            )}
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <label htmlFor="email">Your email:</label>
            <input
              type="email"
              name="user_email"
              id="email"
              placeholder="Your email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.user_email}
              className="rounded-md border border-textGreen bg-timelineColor px-4 py-2 text-textLight outline-none"
            />
            {touched.user_email && errors.user_email && (
              <small className="text-red-600 tracking-wide text-sm italic">
                {errors.user_email}
              </small>
            )}
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              cols={20}
              rows={7}
              placeholder="Let's start a conversation"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
              className="resize-none rounded-md border border-textGreen bg-timelineColor px-4 py-2 text-textLight outline-none"
            ></textarea>
            {touched.message && errors.message && (
              <small className="text-red-600 tracking-wide text-sm italic">
                {errors.message}
              </small>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="rounded-md border border-textGreen px-4 py-2 text-[15px] text-textGreen duration-300 hover:bg-hoverColor"
            >
              {isSubmitting ? (
                <>
                  <svg
                    aria-hidden="true"
                    id="loader"
                    className="mr-2 inline h-4 w-4 animate-spin fill-blue-500 text-gray-200 dark:text-gray-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {loadingSVG}
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <svg
                    aria-hidden="true"
                    id="loader"
                    className="mr-2 hidden h-4 w-4 animate-spin fill-blue-500 text-gray-200 dark:text-gray-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {loadingSVG}
                  </svg>
                  Send message
                </>
              )}

            </button>
          </div>
        </form>
      </div>
      <div className="flex gap-12 text-textDark justify-center mt-10 xl:hidden">
        <a
          href="mailto:souravchoudhary1998@gmail.com"
          aria-label="Mail"
          target="_blank"
        >
          <span className="w-8 h-8 text-4xl inline-flex items-center justify-content hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <FaEnvelope />
          </span>
        </a>
        <a

          href="https://github.com/sourav0098"
          aria-label="Github"
          target="_blank"
        >
          <span className="w-8 h-8 text-4xl inline-flex items-center justify-content hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <FaGithub />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/sourav009/"
          aria-label="Linkedin"
          target="_blank"
        >
          <span className="w-8 h-8 text-4xl inline-flex items-center justify-content hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <FaLinkedin />
          </span>
        </a>
      </div>
    </section>
  );
}