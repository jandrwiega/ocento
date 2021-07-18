import { useState, useEffect } from 'react'

import Button from '@material-ui/core/Button';

const DisplayItem = (props) => {
    const item = props.item

    // eslint-disable-next-line
    const [currentDate, setCurrentDate] = useState(new Date())
    // eslint-disable-next-line
    const [offerAddDate, setOfferAddDate] = useState(new Date(item.Added_Date))
    const [dateDifference, setDateDifference] = useState(0)

    useEffect(()=> {
        const cdYear = currentDate.getFullYear()
        let cdMonth = currentDate.getMonth() + 1
        let cdDays = currentDate.getDate()
        const cdDisplayDate = `${cdYear}-${cdMonth}-${cdDays}`

        const oadYear = offerAddDate.getFullYear();
        let oadMonth = offerAddDate.getMonth() + 1;
        let oadDays = offerAddDate.getDate();
        const oadDisplayDate = `${oadYear}-${oadMonth}-${oadDays}`

        if((new Date(cdDisplayDate) - new Date(oadDisplayDate)) === 0) {
            setDateDifference('dzisiaj')
        }   else {
            setDateDifference((new Date(cdDisplayDate) - new Date(oadDisplayDate))/86400000)
        }
    }, [currentDate, offerAddDate])
    return ( 
        <div className="offer--item">
            <p className='offer--item--header'>{item.title}</p>
            <ul>
                <p>Co musisz umieć?</p>
                {item.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
            <div className="offer--item--info">
                <p>Dodano: {dateDifference} {dateDifference === 'dzisiaj' ? null : 'dni temu'}</p>
                <Button variant="outlined" color="secondary">Aplikuj</Button>
            </div>
        </div>
     );
}
 
export default DisplayItem;