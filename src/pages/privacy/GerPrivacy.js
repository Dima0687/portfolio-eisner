const GerPrivacy = ({info, name, address}) => {
  return (
    <>
      <h1>Datenschutz</h1>
      <p>
        Diese Datenschutzerklärung dient der Information der Nutzer dieser
        Webseite über die Art, den Umfang und Zweck der Erhebung und Verwendung
        Ihrer Daten durch den verantwortlichen Anbieter:
      </p>
      <address>
        <p>{name}</p>
        <p>Web und Softwareentwickler</p>
        <p>{address.streetNr} {address.street}</p>
        <p>{address.city} {address.zip}</p>
        <p>{info.tel.lastTwo} {info.tel.middleThree} {info.tel.firstThree} {info.tel.prefixTel}</p>
        <p>{info.email.domain}.{info.email.provider}{String.fromCharCode(info.email.at)}{info.email.first}</p>
      </address>
      <p>
        Dem Datenschutz messe ich große Bedeutung bei. Ihre personenbezogenen
        Daten werden von mir vertraulich und entsprechend der gesetzlichen
        Datenschutzvorschriften sowie dieser Datenschutzerklärung behandelt.
        Rechtliche Grundlage für die Datenverarbeitung sind das
        Bundesdatenschutzgesetz (BDSG) und Telemediengesetz (TMG) sowie die
        EU-Datenschutzgrundverordnung (DSGVO).
      </p>
      <h2>Welche Daten erfasst und verarbeitet werden:</h2>
      <p>
        Die Nutzung dieser Webseite ist in der Regel ohne Angabe spezifischer
        personenbezogener Daten möglich, die eine eindeutige Identifikation
        einer Person ermöglichen (wie zum Beispiel Vorname und Nachname,
        Telefonnummer, E-Mail-Adresse). Ihre Daten werden zum Beispiel erfasst,
        wenn Sie mich per E-Mail kontaktieren. Von Ihnen gemachte Angaben sowie
        Ihre Kontaktdaten speichere ich, um Ihre Anfrage zu bearbeiten und
        mögliche Anschlussfragen stellen zu können.
      </p>
      <h2>Nutzung von Google Fonts</h2>
      <p>
        Auf dieser Webseite werden für eine ansprechende Darstellung von
        Inhalten Google Fonts benutzt, die jedoch lokal eingebunden sind. Das
        heißt, dass die Google Fonts direkt vom eigenen Server und nicht über
        die Fonts API geladen werden. Wodurch auf diesem Wege keine Nutzerdaten
        an Google gelangen.
      </p>
      <h2>Bei Nutzung des Kontaktformulars und bei E-Mail-Kontakt</h2>
      <p>
        Bei Fragen jeglicher Art biete ich Ihnen die Möglichkeit, mit mir über
        ein auf der Website bereitgestelltes Formular Kontakt aufzunehmen. Bei
        der Nutzung des Kontaktformulars werden Name sowie die gültige
        E-Mail-Adresse, unter der ich den Verwender des Kontaktformulars
        erreichen kann, als auch die Nachricht an mich, als Pflichtangabe
        abgefragt und verarbeitet. Die Erfassung dieser Angaben dient in erster
        Linie dazu, zu erfahren, von wem die Anfrage stammt und ermöglicht es
        mir, auf die Anfrage schnell und unkompliziert zu antworten. Außerdem
        sollen sie dabei helfen, Missbrauch entgegenzuwirken und die Zuordnung
        des jeweiligen Anliegens zu ermöglichen bzw. zu erleichtern. Alle
        weiteren im Zusammenhang mit der Kontaktmaske abgefragten Angaben können
        freiwillig getätigt werden. Sie sollen die in diesem Zusammenhang
        bereits geschilderten Zwecke fördern. Alternativ ist eine
        Kontaktaufnahme über die bereitgestellte E-Mail-Adresse möglich. In
        diesem Fall werden die mit der E-Mail übermittelten personenbezogenen
        Daten des Nutzers verarbeitet. Die auf den beschriebenen
        Kommunikationswegen übermittelten Daten werden ausschließlich für die
        Verarbeitung der Konversation verwendet. Die Datenverarbeitung zum
        Zwecke der Kontaktaufnahme im Wege des Kontaktformulars erfolgt nach
        Art. 6 Abs. 1 S. 1 lit. a DSGVO auf Grundlage Ihrer freiwillig erteilten
        Einwilligung. Die Datenverarbeitung über die bereitgestellte
        E-Mail-Adresse erfolgt auf der Grundlage von Art. 6 Abs. 1 Satz 1 lit.
        f DSGVO. Das berechtigte Interesse an der Verarbeitung der Daten liegt
        darin, Anfragen beantworten zu können. Zielt der Kontakt im Übrigen auf
        den Abschluss eines Vertrages ab, so ist zusätzliche Rechtsgrundlage für
        die Verarbeitung Art. 6 Abs. 1 lit. b DSGVO. Die personenbezogenen Daten
        aus der Eingabemaske des Kontaktformulars und diejenigen, die per E-Mail
        übersandt wurden, werden gelöscht, sobald sie für die Erreichung des
        Zweckes ihrer Erhebung nicht mehr erforderlich sind. Dies ist der Fall,
        wenn die jeweilige Konversation mit dem Nutzer beendet ist. Beendet ist
        die Konversation dann, wenn sich aus den Umständen entnehmen lässt, dass
        der betroffene Sachverhalt abschließend geklärt ist. Ich weise darauf
        hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation
        per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der
        Daten vor dem Zugriff durch Dritte ist nicht möglich.
      </p>
      <h2>Cookies</h2>
      <p>
        Ich setze auf meiner Seite Cookies ein. Hierbei handelt es sich um
        kleine Dateien, die Ihr Browser automatisch erstellt und die auf Ihrem
        Endgerät (Laptop, Tablet, Smartphone o.ä.) gespeichert werden, wenn Sie
        meine Seite besuchen. Cookies richten auf Ihrem Endgerät keinen Schaden
        an, enthalten keine Viren, Trojaner oder sonstige Schadsoftware. Ich
        setze sogenannte Session-Cookies ein, um das erneute auswählen der
        gewünschten Sprache während der Session unnötig zu machen. Diese werden
        nach Verlassen meiner Seite automatisch gelöscht. Die meisten Browser
        akzeptieren Cookies automatisch. Sie können Ihren Browser jedoch so
        konfigurieren, dass keine Cookies auf Ihrem Computer gespeichert werden
        oder stets ein Hinweis erscheint, bevor ein neuer Cookie angelegt wird.
        Die vollständige Deaktivierung von Cookies kann jedoch dazu führen, dass
        Sie nicht alle Funktionen meiner Website ordnungsgemäß nutzen können.
      </p>

      <h2>Änderungen:</h2>
      <p>
        Damit diese Datenschutzerklärung immer die jeweils gültigen gesetzlichen
        Vorgaben berücksichtigt, behalte ich mir vor, die Erklärung zur
        gegebenen Zeit zu verändern. Die neue Datenschutzerklärung tritt dann in
        Kraft, wenn Sie diese Webseite das nächste Mal besuchen.
      </p>
      <h3>Stand: September 2022</h3>
    </>
  );
};

export default GerPrivacy;
