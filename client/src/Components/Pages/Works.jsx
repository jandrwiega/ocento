import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../Context/AppContext';

import Loading from '../Static/Loading';
import NoOffers from '../Static/NoOffers'
import DisplayItem from '../Static/DisplayItem'

import '../../Styles/PagesStyles/Works.css'

const Works = () => {
    const { fetchLink } = useContext(AppContext);

    const [worksList, setWorksList] = useState([])
    const [worksListLoaded, setWorksListLoaded] = useState(false)

    useEffect(()=> {
        fetch(fetchLink+'db/praca')
        .then(response => response.json())
        .then(data => { setWorksList(data.Advertisments); setWorksListLoaded(true)})
    }, [fetchLink])
    return ( 
        <div className="works__wrapper">
            <div className="works__wrapper--header">
                <h1>Kto obecie może nam pomóc?</h1>
            </div>
            <div className="works__wrapper--offers">
                {worksListLoaded ? worksList.length === 0 ? <NoOffers /> : worksList.map((item) => <DisplayItem key={item.id} item={item}/>) : <Loading />}
            </div>
        </div>
     );
}
 
export default Works;