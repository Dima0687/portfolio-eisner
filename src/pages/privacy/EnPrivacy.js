const EnPrivacy = ({ info, name, address }) => {
  return (
    <>
      <h1>Privacy</h1>
      <p>
        This privacy policy serves to inform the users of this website about the
        nature, scope and purpose of the collection and use Your data by the
        responsible provider:
      </p>
      <address>
        <p>{name}</p>
        <p>Web und Softwareentwickler</p>
        <p>
          {address.streetNr} {address.street}
        </p>
        <p>
          {address.city} {address.zip}
        </p>
        <p>
          {info.tel.lastTwo} {info.tel.middleThree} {info.tel.firstThree}{" "}
          {info.tel.prefixTel}
        </p>
        <p>
          {info.email.domain}.{info.email.provider}
          {String.fromCharCode(info.email.at)}
          {info.email.first}
        </p>
      </address>
      <p>
        I attach great importance to data protection. Your personal Data will be
        treated confidentially and in accordance with the legal Data protection
        regulations and this privacy policy. The legal basis for data processing
        are the Federal Data Protection Act (BDSG) and Telemedia Act (TMG) and
        the EU General Data Protection Regulation (DSGVO).
      </p>
      <h2>What data is collected and processed:</h2>
      <p>
        The use of this website is generally possible without providing specific
        personal data, which allow a unique identification of a person (such as
        first name and surname, telephone number, e-mail address). Your data is
        collected, for example, if you contact me by e-mail. Information
        provided by you as well as I store your contact information in order to
        process your request and to be able to to be able to ask possible
        follow-up questions.
      </p>
      <h2>Use of Google Fonts</h2>.
      <p>
        On this website, for an appealing representation of content are Google
        Fonts used, but these are integrated locally. This means that the Google
        Fonts are loaded directly from the server and not via the Fonts API.
        This means that no user data is passed on to reach Google in this way.
      </p>
      <h2>When using the contact form and email contact</h2>.
      <p>
        For questions of any kind, I offer you the opportunity to contact me via
        a form provided on the website. With the use of the contact form, the
        name and the valid e-mail address, under which I can reach the user of
        the contact form, as well as the message to me, as mandatory data
        queried and processed. The collection of this information serves
        primarily to find out from whom the request originates and allows me to
        respond to the request quickly and easily. In addition, help to
        counteract misuse and to enable the assignment of the respective request
        or to facilitate it. All other information requested in connection with
        the contact form may be given voluntarily. They are intended to promote
        the purposes already described in this context. Alternatively, it is
        possible to contact me via the e-mail address provided. In this case,
        the personal data of the user transmitted by e-mail will be processed.
        The data transmitted via the communication channels described above will
        be used exclusively for the processing of the conversation. The data
        processing for the purpose of contacting you via the contact form is
        carried out in accordance with Art. 6 para. 1 p. 1 lit. a DSGVO on the
        basis of your voluntarily given consent. The data processing via the
        provided e-mail address is carried out on the basis of Art. 6 para. 1
        sentence 1 lit. f DSGVO. The legitimate interest in the processing of
        the data lies in being able to answer inquiries. If the contact is
        otherwise aimed at the conclusion of a contract, the additional legal
        basis for the processing is the processing is Art. 6 para. 1 lit. b
        DSGVO. The personal data from the input mask of the contact form and
        those sent by e-mail will be deleted as soon as they are no longer
        necessary for the purpose of their collection. This is the case when the
        respective conversation with the user has ended. Conversation has ended
        when it is clear from the circumstances that the facts of the matter
        concerned have been conclusively clarified. I would like to point out
        that the data transmission on the Internet (eg communication by e-mail)
        by e-mail) may have security gaps. A complete protection of the Data
        from access by third parties is not possible.
      </p>
      <h2>Cookies</h2>
      <p>
        I use cookies on my site. These are small files that your browser
        automatically creates and that are stored on your End device (laptop,
        tablet, smartphone or similar) when you visit my site. Cookies do not
        cause any damage to your end device do not contain viruses, Trojans or
        other malware. I use so-called session cookies, in order to make it
        unnecessary to select the desired language during the session again.
        These are automatically deleted after leaving my site. Most browsers
        accept cookies automatically. However, you can configure your browser
        configure your browser so that no cookies are stored on your computer or
        that a message always appears before a new cookie is created. However,
        the complete deactivation of cookies can lead to the fact that You can
        not use all the features of my website properly.
      </p>
      <h2>Changes:</h2>
      <p>
        So that this privacy policy always takes into account the current legal
        requirements, I reserve the right to change the statement at the given
        time to change. The new privacy policy will come into effect Effective
        the next time you visit this website.
      </p>
      <h3>Status: September 2022</h3>
    </>
  );
};

export default EnPrivacy;
