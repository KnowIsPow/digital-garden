import Page from 'features/page';
import { useState } from 'react';
import Button from 'ui/form/button';
import TextInput from 'ui/form/input';
import { TitleWithDescription } from 'ui/header/title-with-description';
import { Container } from 'ui/layout/container';

export default function ContactPage({}) {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <Page
      title="Contact"
      description="Looking to get in touch with Curtis Fisher? Whether you have a new project idea, are looking for resources, or want to stay in touch, don't hesitate to reach out!"
      canonical="/contact"
    >
      <Container>
        <div className="relative max-w-xl mx-auto">
          <SVGDots />
          <TitleWithDescription
            title="Let's Chat!"
            description="Use this form to get in touch. I'll get back to you ASAP."
          />

          <div className="mt-12">
            <form
              name="contact"
              method="POST"
              action="/"
              data-netlify="true"
              netlify-honeypot="bot-field"
              data-netlify-recaptcha="true"
              className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <input type="hidden" name="form-name" value="contact" />
              <TextInput
                placeholder="First Name"
                autoComplete="given-name"
                value={first}
                onChange={(val) => setFirst(val)}
                name="first-name"
                id="first-name"
              />
              <TextInput
                placeholder="Last Name"
                autoComplete="family-name"
                value={last}
                onChange={(val) => setLast(val)}
                name="last-name"
                id="last-name"
              />
              <div className="sm:col-span-2">
                <TextInput
                  placeholder="Email Address"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(val) => setEmail(val)}
                  name="email"
                  id="email"
                />
              </div>

              <div className="sm:col-span-2">
                <textarea
                  placeholder="Enter your message here..."
                  rows={4}
                  className="input"
                  defaultValue={''}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  name="message"
                  id="message"
                />
              </div>

              <p class="hidden">
                <label>
                  A message from the bots? <input name="bot-field" />
                </label>
              </p>
              <div data-netlify-recaptcha="true"></div>

              <div className="sm:col-span-2">
                <Button type="submit" className="w-full justify-center btn-primary lowercase">
                  Let's talk
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </Page>
  );
}

function SVGDots({}) {
  return (
    <>
      <svg
        className="absolute left-full transform translate-x-1/2"
        width={404}
        height={404}
        fill="none"
        viewBox="0 0 404 404"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="85737c0e-0916-41d7-917f-596dc7edfa27"
            x={0}
            y={0}
            width={20}
            height={20}
            patternUnits="userSpaceOnUse"
          >
            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
      </svg>
      <svg
        className="absolute right-full bottom-0 transform -translate-x-1/2"
        width={404}
        height={404}
        fill="none"
        viewBox="0 0 404 404"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="85737c0e-0916-41d7-917f-596dc7edfa27"
            x={0}
            y={0}
            width={20}
            height={20}
            patternUnits="userSpaceOnUse"
          >
            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
      </svg>
    </>
  );
}
