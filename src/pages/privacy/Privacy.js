// hooks
import { useContext } from "react";

// css
import './privacy.css';

// portfolio
import portfolio from "../../data/portfolioData";

// context
import { LangContext } from "../../context/LangContext";

// different languages privacy
import EnPrivacy from "./EnPrivacy";
import GerPrivacy from "./GerPrivacy";
import RuPrivacy from "./RuPrivacy";

const Privacy = () => {
  const { lang } = useContext(LangContext);
  const { contact:{ info }, welcomeText: { name }, address} = portfolio;

  return (
    <>
      <article>
        { lang === 'en' && <EnPrivacy info={info} name={name} address={address}/> }
        { lang === 'ger' && <GerPrivacy info={info} name={name} address={address}/> }
        { lang === 'ru' && <RuPrivacy info={info} name={name} address={address}/> }
      </article> 
    </>
  );
}
 
export default Privacy;



/* 
Datenschutz
Diese Datenschutzerklärung dient der Information der Nutzer dieser Webseite über die Art, den Umfang und Zweck der Erhebung und Verwendung Ihrer Daten durch den verantwortlichen Anbieter:

Dietmar Eisner
Web und Softwareentwickler
Hinrich-Wilhelm-Kopf-Straße 3
21337 Lüneburg
+49 151 504 704 11
dietmar(at)eisner-developer.com

Dem Datenschutz messe ich große Bedeutung bei. Ihre personenbezogenen Daten werden von mir vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung behandelt. Rechtliche Grundlage für die Datenverarbeitung sind das Bundesdatenschutzgesetz (BDSG) und Telemediengesetz (TMG) sowie die EU-Datenschutzgrundverordnung (DSGVO).

Welche Daten erfasst und verarbeitet werden:
Die Nutzung dieser Webseite ist in der Regel ohne Angabe spezifischer personenbezogener Daten möglich, die eine eindeutige Identifikation einer Person ermöglichen (wie zum Beispiel Vorname und Nachname, Telefonnummer, E-Mail-Adresse). Ihre Daten werden zum Beispiel erfasst, wenn Sie mich per E-Mail kontaktieren. Von Ihnen gemachte Angaben sowie Ihre Kontaktdaten speichere ich, um Ihre Anfrage zu bearbeiten und mögliche Anschlussfragen stellen zu können.


Nutzung von Google Fonts
Auf dieser Webseite werden für eine ansprechende Darstellung von Inhalten Google Fonts benutzt, die jedoch lokal eingebunden sind. 
Das heißt, dass die Google Fonts direkt vom eigenen Server und nicht über die Fonts API geladen werden. Wodurch auf diesem Wege keine Nutzerdaten an
Google gelangen.



Bei Nutzung des Kontaktformulars und bei E-Mail-Kontakt
Bei Fragen jeglicher Art biete ich Ihnen die Möglichkeit, mit mir über ein auf der Website bereitgestelltes Formular Kontakt aufzunehmen. Bei der Nutzung des Kontaktformulars werden Name sowie die gültige E-Mail-Adresse, unter der ich den Verwender des Kontaktformulars erreichen kann, als auch die Nachricht an mich, als Pflichtangabe abgefragt und verarbeitet. Die Erfassung dieser Angaben dient in erster Linie dazu, zu erfahren, von wem die Anfrage stammt und ermöglicht es mir, auf die Anfrage schnell und unkompliziert zu antworten. Außerdem sollen sie dabei helfen, Missbrauch entgegenzuwirken und die Zuordnung des jeweiligen Anliegens zu ermöglichen bzw. zu erleichtern. Alle weiteren im Zusammenhang mit der Kontaktmaske abgefragten Angaben können freiwillig getätigt werden. Sie sollen die in diesem Zusammenhang bereits geschilderten Zwecke fördern.

Alternativ ist eine Kontaktaufnahme über die bereitgestellte/n E-Mail-Adresse/n möglich. In diesem Fall werden die mit der E-Mail übermittelten personenbezogenen Daten des Nutzers verarbeitet.

Die auf den beschriebenen Kommunikationswegen übermittelten Daten werden ausschließlich für die Verarbeitung der Konversation verwendet.

Die Datenverarbeitung zum Zwecke der Kontaktaufnahme im Wege des Kontaktformulars erfolgt nach Art. 6 Abs. 1 S. 1 lit. a DSGVO auf Grundlage Ihrer freiwillig erteilten Einwilligung. Die Datenverarbeitung über die bereitgestellte/n E-Mail-Adresse/n erfolgt auf der Grundlage von Art. 6 Abs. 1 Satz 1 lit. f DSGVO. Das berechtigte Interesse an der Verarbeitung der Daten liegt darin, Anfragen beantworten zu können

Zielt der Kontakt im Übrigen auf den Abschluss eines Vertrages ab, so ist zusätzliche Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1 lit. b DSGVO.

Die personenbezogenen Daten aus der Eingabemaske des Kontaktformulars und diejenigen, die per E-Mail übersandt wurden, werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind. Dies ist der Fall, wenn die jeweilige Konversation mit dem Nutzer beendet ist. Beendet ist die Konversation dann, wenn sich aus den Umständen entnehmen lässt, dass der betroffene Sachverhalt abschließend geklärt ist.

Ich weise darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.

Cookies
Ich setze auf meiner Seite Cookies ein. Hierbei handelt es sich um kleine Dateien, die Ihr Browser automatisch erstellt und die auf Ihrem Endgerät (Laptop, Tablet, Smartphone o.ä.) gespeichert werden, wenn Sie meine Seite besuchen. Cookies richten auf Ihrem Endgerät keinen Schaden an, enthalten keine Viren, Trojaner oder sonstige Schadsoftware.

Ich setze sogenannte Session-Cookies ein, um das erneute auswählen der gewünschten Sprache während der Session unnötig zu machen. Diese werden nach Verlassen meiner Seite automatisch gelöscht.

Die meisten Browser akzeptieren Cookies automatisch. Sie können Ihren Browser jedoch so konfigurieren, dass keine Cookies auf Ihrem Computer gespeichert werden oder stets ein Hinweis erscheint, bevor ein neuer Cookie angelegt wird. Die vollständige Deaktivierung von Cookies kann jedoch dazu führen, dass Sie nicht alle Funktionen meiner Website nutzen können.


Änderungen:
Damit diese Datenschutzerklärung immer die jeweils gültigen gesetzlichen Vorgaben berücksichtigt, behalten ich mir vor, die Erklärung zur gegebenen Zeit zu verändern. Die neue Datenschutzerklärung tritt dann in Kraft, wenn Sie diese Webseite das nächste Mal besuchen.

Stand: September 2022




Der Nutzung von im Rahmen der Impressumspflicht oder auch der in Datenschutz veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. 

Ich behalte mir ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.

*/


