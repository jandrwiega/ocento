import NoResults from '../../Data/noresults.png'

import '../../Styles/Static/NoOffers.css'

const NoOffers = () => {
    return ( 
        <div className="nooffers__wrapper">
            <img src={NoResults} alt="" />
            <h2>Ups... nie mamy narazie żadnych wolnych miejsc</h2>
            <p>Nic nie szkodzi, ciągle szukamy drogi aby się rozwijać oraz tworzyć kolejne funkcjonalności. Jeżeli uważasz że masz dobry pomysł na rozwój tej aplikacji napisz w sekcji pomysłów oraz opisz co chciałbyś robić przy tej funkcjonalności.</p>
        </div>
     );
}
 
export default NoOffers;