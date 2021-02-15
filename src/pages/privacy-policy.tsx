/** @jsx jsx */
import { jsx, Box, Flex } from 'theme-ui';
import React from 'react';
import SEO from '../components/seo';
import PFiveDots from './../images/PFiveDots';

const PrivacyPolicy: React.FC = () => {
  return (
    <Box
      sx={{
        maxWidth: 1110,
        margin: `0 auto`,
        padding: `0 1.0875rem 1.45rem`,
      }}
    >
      <SEO title="Privacy Policy" />
      <div>
        <Box
          sx={{
            position: 'absolute',
            display: ['none', 'none', 'none', 'block'],
          }}
        >
          <PFiveDots />
        </Box>
        <p
          as="h6"
          sx={{
            maxWidth: 210,
            mx: 'auto',
            color: 'rgba(20, 22, 51, 0.85)',
            marginTop: 50,
            textAlign: 'center',
            fontSize: '14px',
          }}
        >
          Effective Date​:  Jan 1st, 2020
        </p>
        <h2
          sx={{
            fontFamily: 'Josefin Sans',
            fontSize: 36,
            maxWidth: 240,
            mx: 'auto',
            my: 0,
            color: 'heading',
          }}
        >
          Privacy Policy
        </h2>
        <p
          sx={{
            maxWidth: 660,
            fontSize: 16,
            mx: 'auto',
            my: '0',
            textAlign: 'center',
            color: 'heading',
          }}
        >
          CODIVOX (PRIVATE) LIMITED (“CODIVOX,” “we,” “our,” or “us”) values
          data privacy and security. This Online Privacy Policy applies to
          personal information we collect on our website at www.codivox.com​
          (the “Site”) and describes how we use and disclose information we
          obtain through this Site.
        </p>
      </div>
      <div
        sx={{
          marginTop: 30,
          padding: '25px 50px',
          background: 'rgba(244, 245, 255, 0.5)',
        }}
      >
        <h2
          sx={{
            fontFamily: 'Josefin Sans',
            color: 'heading',
          }}
        >
          What information do we collect?
        </h2>
        <p>
          Information You Provide – We and our service providers collect the
          information that you provide when you use the Site, including when you
          sign up or create an account, or contact us with a question, comment,
          or request.
        </p>
        <p>
          The information that you provide us may include, but is not limited to
          your name, company name, email address, phone number, username,
          password, and any other information you may choose to provide us when
          you contact us.
        </p>
        <p>
          Information Automatically Collected About Your Visit – We may
          automatically receive information when you visit our Site, including
          through cookies and other technologies. A cookie is a small amount of
          data (often including a unique identifier), that is sent to your
          browser from a website’s computers and stored on your computer’s hard
          drive. We may use cookies to administer the Site, understand Site
          usage and improve the content and offerings on our Site. We may also
          use cookies to collect aggregate information about Site users. The
          information collected for these purposes (including your IP address
          and other information collected by automated means) may be disclosed
          to or collected directly by our third-party web analytics service
          providers, such as Google Analytics. To learn more about opting out of
          these activities, click here:
          ​http://tools.google.com/dlpage/gaoptout​.
        </p>
        <p>
          If you don't want cookies, most web browsers include an option that
          allows you to not accept them. However, if you set your browser to
          refuse cookies, some portions of our Site may not function
          efficiently. We do not currently respond to web browser “do not track”
          signals on this Site.
        </p>
        <p>
          Social Media Widgets – The Site includes social media functions, such
          as the Facebook, Instagram, Twitter and LinkedIn widgets. These
          widgets may collect information about which pages visitors visit on
          the Site and the IP address of the device you use to connect to the
          Internet. The widgets may also set a cookie to ensure the features are
          functioning properly. Social media functions and widgets are hosted
          either by a third party or directly on the Site. Your interactions
          with the social media functions and widgets located on the Site are
          governed by the privacy policies of the companies that provide them.
          If you use any of the social media functions or widgets on this Site,
          we strongly suggest you review the privacy policies of the companies
          that provide those functions and features.
        </p>
        <h2
          sx={{
            fontFamily: 'Josefin Sans',
            color: 'heading',
          }}
        >
          How do we use this information?
        </h2>
        We may use the information we collect on this Site for a number of
        purposes, including, but not limited to:
        <ul sx={{ lineHeight: 2 }}>
          <li>allowing you to sign up or set up a user account;</li>
          <li>
            providing you with our products and services, or information you
            request;
          </li>
          <li>customizing your experience when using the Site;</li>
          <li>marketing and advertising our products and services;</li>
          <li>
            improving the Site and the services we provide, such as by using
            analytics and better tailoring our content to our users’ needs and
            preferences;
          </li>
          <li>
            generating and analyzing statistics about your use of the Site;
          </li>
          <li>
            detecting, preventing, and responding to fraud, intellectual
            property infringement, violations of our Online Privacy Policy or
            Terms of Use, violations of law, or other misuse of the Site; and
          </li>
          <li>supporting our business operations.</li>
        </ul>
        <p>
          {' '}
          We also may combine or aggregate any of the information we collect
          through the Site or elsewhere for any of these purposes.
        </p>
        <p>
          Under what circumstances do we disclose the information we collect?
        </p>
        We may disclose the information we collect from you through the Site:
        <ul sx={{ lineHeight: 2 }}>
          <li>
            to service providers who work on our behalf and who have agreed to
            use the information solely in furtherance of our operations;
          </li>
          <li>to our customers;</li>
          <li>
            as required by law, such as to comply with a subpoena or other legal
            process, or to comply with government reporting obligations;
          </li>
          <li>
            when we believe in good faith that disclosure is necessary (a) to
            protect our rights, the integrity of the Site, or (b) to detect,
            prevent, or respond to fraud, intellectual property infringement,
            violations of our Online Privacy Policy or Terms of Use, violations
            of law, or other misuse of the Site; and
          </li>
          <li>
            to affiliates, service providers, advisors, and other third parties
            to the extent reasonably necessary to proceed with the negotiation
            or completion of a merger, acquisition, or sale of all or a portion
            of our assets (including in the event of are organization,
            dissolution, or liquidation).
          </li>
        </ul>
        <h2
          sx={{
            fontFamily: 'Josefin Sans',
            color: 'heading',
          }}
        >
          How is your information secured?
        </h2>
        <p>
          We maintain reasonable administrative, technical, and physical
          safeguards designed to safeguard the personal information collected by
          the Site.  However, no information system can be 100% secure, so we
          cannot guarantee the absolute security of your information. Moreover,
          we are not responsible for the security of information you transmit to
          the Site over networks that we do not control, including the Internet
          and wireless networks.
        </p>
        <h2
          sx={{
            fontFamily: 'Josefin Sans',
            color: 'heading',
          }}
        >
          Children’s information
        </h2>
        <p>
          The Site is not directed to, nor do we knowingly collect personal
          information from, children under the age of 13.  If you become aware
          that your child or any child under your care has provided us with
          information without your consent, please contact us as indicated
          below.
        </p>
        <h2
          sx={{
            fontFamily: 'Josefin Sans',
            color: 'heading',
          }}
        >
          Changes to this Online Privacy Policy
        </h2>
        <p>
          We may update periodically this Online Privacy Policy and without
          prior notice to you to reflect changes in our personal information
          practices.  If we make material changes to this Online Privacy Policy,
          we will notify you by posting a new Online Privacy Policy on this
          page.
        </p>
        <h2
          sx={{
            fontFamily: 'Josefin Sans',
            color: 'heading',
          }}
        >
          Contact us
        </h2>
        <p>
          If you have any questions about this Online Privacy Policy or our use
          of your personal information collected through the Site, please
          contact us <a href="mailto:hello@codivox.com">hello@codivox.com</a>
        </p>
      </div>
    </Box>
  );
};

export default PrivacyPolicy;
