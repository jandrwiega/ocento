import { Link } from "react-router-dom";

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import '../../../Styles/PagesStyles/Privacy.css'

const Privacy = () => {
    return ( 
        <div className="wrapper__legal">
        <Link to='/' className="back__btn">
            <ArrowBackIcon /> Powrót
        </Link>
    <h1>1. Informacje ogólne</h1>
    <ol className="mainBox">
        <li className="main">Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem url: ocenmyto.pl</li>
        <li className="main">Operatorem serwisu oraz Administratorem danych osobowych jest: Jan Drwięga</li>
        <li className="main">Adres kontaktowy poczty elektronicznej operatora: janek@workfind.pl</li>
        <li className="main">Operator jest Administratorem Twoich danych osobowych w odniesieniu do danych podanych dobrowolnie w Serwisie.</li>
        <li className="main">Serwis wykorzystuje dane osobowe w następujących celach:
            <ul className="extBox">
                <li className="ext">Obsługa zapytań przez formularz</li>
                <li className="ext">Realizacja zamówionych usług</li>
            </ul>
        </li>
        <li className="main">Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniu w następujący sposób:
            <ul className="extBox">
                <li className="ext">Poprzez dobrowolnie wprowadzone w formularzach dane, które zostają wprowadzone do systemów Operatora.</li>
                <li className="ext">Poprzez zapisywanie w urządzeniach końcowych plików cookie (tzw. „ciasteczka”).</li>
            </ul>
        </li>
    </ol>
    <h1>2. Wybrane metody ochrony danych stosowane przez Operatora</h1>
    <ol className="mainBox">
        <li className="main">Miejsca logowania i wprowadzania danych osobowych są chronione w warstwie transmisji (certyfikat SSL). Dzięki temu dane osobowe i dane logowania, wprowadzone na stronie, zostają zaszyfrowane w komputerze użytkownika i mogą być odczytane jedynie na docelowym serwerze.</li>
    </ol>
    <h1>3. Hosting</h1>
    <ol className="mainBox">
        <li className="main">Serwis jest hostowany (technicznie utrzymywany) na serwerze operatora: PROSERWER.pl</li>
    </ol>
    <h1>4. Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych</h1>
    <ol className="mainBox">
        <li className="main">W niektórych sytuacjach Administrator ma prawo przekazywać Twoje dane osobowe innym odbiorcom, jeśli będzie to niezbędne do wykonania zawartej z Tobą umowy lub do zrealizowania obowiązków ciążących na Administratorze. Dotyczy to takich grup odbiorców:
            <ul className="extBox">
                <li className="ext">firma hostingowa na zasadzie powierzenia</li>
                <li className="ext">operatorzy płatności</li>
            </ul>   
        </li>
        <li className="main">Twoje dane osobowe przetwarzane przez Administratora nie dłużej, niż jest to konieczne do wykonania związanych z nimi czynności określonych osobnymi przepisami (np. o prowadzeniu rachunkowości). W odniesieniu do danych marketingowych dane nie będą przetwarzane dłużej niż przez 3 lata.</li>
        <li className="main">Przysługuje Ci prawo żądania od Administratora:
            <ul className="extBox">
                <li className="ext">dostępu do danych osobowych Ciebie dotyczących,</li>
                <li className="ext">ich sprostowania,</li>
                <li className="ext">usunięcia,</li>
                <li className="ext">ograniczenia przetwarzania,</li>
                <li className="ext">oraz przenoszenia danych.</li>
            </ul>
        </li>
        <li className="main">Przysługuje Ci prawo do złożenia sprzeciwu w zakresie przetwarzania wskazanego w pkt 3.3 c) wobec przetwarzania danych osobowych w celu wykonania prawnie uzasadnionych interesów realizowanych przez Administratora, w tym profilowania, przy czym prawo sprzeciwu nie będzie mogło być wykonane w przypadku istnienia ważnych prawnie uzasadnionych podstaw do przetwarzania, nadrzędnych wobec Ciebie interesów, praw i wolności, w szczególności ustalenia, dochodzenia lub obrony roszczeń.</li>
        <li className="main">Na działania Administratora przysługuje skarga do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.</li>
        <li className="main">Podanie danych osobowych jest dobrowolne, lecz niezbędne do obsługi Serwisu.</li>
        <li className="main">W stosunku do Ciebie mogą być podejmowane czynności polegające na zautomatyzowanym podejmowaniu decyzji, w tym profilowaniu w celu świadczenia usług w ramach zawartej umowy oraz w celu prowadzenia przez Administratora marketingu bezpośredniego.</li>
        <li className="main">
            Dane osobowe nie są przekazywane od krajów trzecich w rozumieniu przepisów o ochronie danych osobowych. Oznacza to, że nie przesyłamy ich poza teren Unii Europejskiej.</li>
    </ol>
    <h1>5. Informacje w formularzach</h1>
    <ol className="mainBox">
        <li className="main">Serwis zbiera informacje podane dobrowolnie przez użytkownika, w tym dane osobowe, o ile zostaną one podane.</li>
        <li className="main">Serwis może zapisać informacje o parametrach połączenia (oznaczenie czasu, adres IP).</li>
        <li className="main">Serwis, w niektórych wypadkach, może zapisać informację ułatwiającą powiązanie danych w formularzu z adresem e-mail użytkownika wypełniającego formularz. W takim wypadku adres e-mail użytkownika pojawia się wewnątrz adresu url strony zawierającej formularz.</li>
        <li className="main">Dane podane w formularzu są przetwarzane w celu wynikającym z funkcji konkretnego formularza, np. w celu dokonania procesu obsługi zgłoszenia serwisowego lub kontaktu handlowego, rejestracji usług itp. Każdorazowo kontekst i opis formularza w czytelny sposób informuje, do czego on służy.</li>
    </ol>
    <h1>6. Logi Administratora</h1>
    <ol className="mainBox">
        <li className="main">Informacje zachowaniu użytkowników w serwisie mogą podlegać logowaniu. Dane te są wykorzystywane w celu administrowania serwisem.</li>
    </ol>
    <h1>7. Istotne techniki marketingowe</h1>
    <ol className="mainBox">
        <li className="main">Operator stosuje analizę statystyczną ruchu na stronie, poprzez Google Analytics (Google Inc. z siedzibą w USA). Operator nie przekazuje do operatora tej usługi danych osobowych, a jedynie zanonimizowane informacje. Usługa bazuje na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika. W zakresie informacji o preferencjach użytkownika gromadzonych przez sieć reklamową Google użytkownik może przeglądać i edytować informacje wynikające z plików cookies przy pomocy narzędzia: https://www.google.com/ads/preferences/</li>
        <li className="main">Operator stosuje techniki remarketingowe, pozwalające na dopasowanie przekazów reklamowych do zachowania użytkownika na stronie, co może dawać złudzenie, że dane osobowe użytkownika są wykorzystywane do jego śledzenia, jednak w praktyce nie dochodzi do przekazania żadnych danych osobowych od Operatora do operatorom reklam. Technologicznym warunkiem takich działań jest włączona obsługa plików cookie.</li>
        <li className="main">Operator stosuje korzysta z piksela Facebooka. Ta technologia powoduje, że serwis Facebook (Facebook Inc. z siedzibą w USA) wie, że dana osoba w nim zarejestrowana korzysta z Serwisu. Bazuje w tym wypadku na danych, wobec których sam jest administratorem, Operator nie przekazuje od siebie żadnych dodatkowych danych osobowych serwisowi Facebook. Usługa bazuje na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika.</li>
        <li className="main">Operator stosuje rozwiązanie badające zachowanie użytkowników poprzez tworzenie map ciepła oraz nagrywanie zachowania na stronie. Te informacje są anonimizowane zanim zostaną przesłane do operatora usługi tak, że nie wie on jakiej osoby fizycznej one dotyczą. W szczególności nagrywaniu nie podlegają wpisywane hasła oraz inne dane osobowe.</li>
        <li className="main">Operator stosuje rozwiązanie automatyzujące działanie Serwisu w odniesieniu do użytkowników, np. mogące przesłać maila do użytkownika po odwiedzeniu konkretnej podstrony, o ile wyraził on zgodę na otrzymywanie korespondencji handlowej od Operatora.</li>
        <li className="main">Operator może stosować profilowanie w rozumieniu przepisów o ochronie danych osobowych</li>
    </ol>
    <h1>8. Informacja o plikach cookies</h1>
    <ol className="mainBox">
        <li className="main">Serwis korzysta z plików cookies.</li>
        <li className="main">Pliki cookies (tzw. „ciasteczka”) stanowią dane informatyczne, w szczególności pliki tekstowe, które przechowywane są w urządzeniu końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze stron internetowych Serwisu. Cookies zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas przechowywania ich na urządzeniu końcowym oraz unikalny numer.</li>
        <li className="main">Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Serwisu pliki cookies oraz uzyskującym do nich dostęp jest operator Serwisu.</li>
        <li className="main">Pliki cookies wykorzystywane są w następujących celach:
            <ul className="extBox">
                <li className="ext">utrzymanie sesji użytkownika Serwisu (po zalogowaniu), dzięki której użytkownik nie musi na każdej podstronie Serwisu ponownie wpisywać loginu i hasła</li>
                <li className="ext">realizacji celów określonych powyżej w części "Istotne techniki marketingowe"</li>
            </ul>
        </li>
        <li className="main">W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies: „sesyjne” (session cookies) oraz „stałe” (persistent cookies). Cookies „sesyjne” są plikami tymczasowymi, które przechowywane są w urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia oprogramowania (przeglądarki internetowej). „Stałe” pliki cookies przechowywane są w urządzeniu końcowym Użytkownika przez czas określony w parametrach plików cookies lub do czasu ich usunięcia przez Użytkownika.</li>
        <li className="main">Oprogramowanie do przeglądania stron internetowych (przeglądarka internetowa) zazwyczaj domyślnie dopuszcza przechowywanie plików cookies w urządzeniu końcowym Użytkownika. Użytkownicy Serwisu mogą dokonać zmiany ustawień w tym zakresie. Przeglądarka internetowa umożliwia usunięcie plików cookies. Możliwe jest także automatyczne blokowanie plików cookies Szczegółowe informacje na ten temat zawiera pomoc lub dokumentacja przeglądarki internetowej.</li>
        <li className="main">Ograniczenia stosowania plików cookies mogą wpłynąć na niektóre funkcjonalności dostępne na stronach internetowych Serwisu.</li>
        <li className="main">Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika Serwisu wykorzystywane mogą być również przez współpracujące z operatorem Serwisu podmioty, w szczególności dotyczy to firm: Google (Google Inc. z siedzibą w USA), Facebook (Facebook Inc. z siedzibą w USA), Twitter (Twitter Inc. z siedzibą w USA).</li>
    </ol>
    <h1>9. Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać zgodę?</h1>
    <ol className="mainBox">
        <li className="main">Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić ustawienia przeglądarki. Zastrzegamy, że wyłączenie obsługi plików cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa, utrzymania preferencji użytkownika może utrudnić, a w skrajnych przypadkach może uniemożliwić korzystanie ze stron www</li>
        <li className="main">W celu zarządzania ustawienia cookies wybierz z listy poniżej przeglądarkę internetową, której używasz i postępuj zgodnie z instrukcjami:
            <ul className="extBox">
                <li className="ext"><a href="https://support.microsoft.com/pl-pl/microsoft-edge/wy%C5%9Bwietlanie-i-usuwanie-historii-przegl%C4%85darki-w-programie-microsoft-edge-00cf7943-a9e1-975a-a33d-ac10ce454ca4">Edge</a></li>
                <li className="ext"><a href="https://support.microsoft.com/pl-pl/help/278835/how-to-delete-cookie-files-in-internet-explorer">Internet Explorer</a></li>
                <li className="ext"><a href="https://support.google.com/chrome/answer/95647?hl=pl">Chrome</a></li>
                <li className="ext"><a href="https://support.apple.com/pl-pl/guide/safari/sfri11471/mac">Safari</a></li>
                <li className="ext"><a href="https://support.mozilla.org/pl/kb/wzmocniona-ochrona-przed-sledzeniem-firefox-desktop?redirectslug=W%C5%82%C4%85czanie+i+wy%C5%82%C4%85czanie+obs%C5%82ugi+ciasteczek&redirectlocale=pl">Firefox</a></li>
                <li className="ext"><a href="https://help.opera.com/pl/latest/web-preferences/#cookies">Opera</a></li>
            </ul>
            <p>Urządzenia mobilne:</p>
            <ul className="extBox">
                <li className="ext"><a href="https://support.google.com/chrome/answer/95647?hl=pl">Android</a></li>
                <li className="ext"><a href="https://support.apple.com/pl-pl/HT201265">Safari (iOS)</a></li>
                <li className="ext"><a href="https://support.microsoft.com/pl-pl/windows/windows-phone-7-3ebc303c-59c0-d367-3995-f258b184fabb">Windows Phone</a></li>
            </ul>
        </li>
    </ol>
</div>
     );
}
 
export default Privacy;