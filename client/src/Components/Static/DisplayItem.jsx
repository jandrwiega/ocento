import { useState, useEffect, useContext } from 'react'

import Button from '@material-ui/core/Button';
import { AppContext } from '../../Context/AppContext';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import CloseIcon from '@material-ui/icons/Close';
import ApplicationSubmited from '../Static/ApplicationSubmited';

const DisplayItem = (props) => {
    const item = props.item
    const { fetchLink } = useContext(AppContext)

    // eslint-disable-next-line
    const [currentDate, setCurrentDate] = useState(new Date())
    // eslint-disable-next-line
    const [offerAddDate, setOfferAddDate] = useState(new Date(item.Added_Date))
    const [dateDifference, setDateDifference] = useState(0)

    const [applicationOpen, setApplicationOpen] = useState(false)
    const handleToggleApplicationBox = () => {
        setApplicationOpen(!applicationOpen)
    }

    const [submitTry, setSubmitTry] = useState(false)

    const [name, setName] = useState('')
    const [nameAccepted, setNameAccepted] = useState(false)
    const [email, setEmail] = useState('')
    const [emailAccepted, setEmailAccepted] = useState(false)
    const [file, setFile] = useState('')
    const [fileAccepted, setFileAccepted] = useState(false)
    const [agreement, setAgreement] = useState(false)
    const [applicationState, setApplicationState] = useState('')

    const handleSetName = (e) => {
        const value = e.target.value;
        setName(value)
        const reg = /^([a-zA-Z]){3,40}$/
        if(reg.test(value)) {
            setNameAccepted(true)
        }   else {
            setNameAccepted(false)
        }
    }
    const handleSetEmail = (e) => {
        const value = e.target.value;
        setEmail(value)
        // eslint-disable-next-line
        const reg = /(^[-\w\.]+@([-\w\.]+)+[a-z]+$)/
        if(reg.test(value)) {
            setEmailAccepted(true)
        }   else {
            setEmailAccepted(false)
        }
    }
    const handleSetFile = (e) => {
        const value = e.target.value;
        setFile(value)
        if(value.length > 5) {
            setFileAccepted(true)
        }   else {
            setFileAccepted(false)
        }
    }
    const handleToggleAgreement = () => {
        setAgreement(!agreement)
    }

    const handleSubmitJobApplication = (e) => {
        e.preventDefault();
        if(nameAccepted && emailAccepted && fileAccepted) {
        const clientID = '1';
        const applicationObject = {
            clientID, name, email, file, agreement,
        }
        fetch(fetchLink+`praca/aplikacja/${item.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(applicationObject)
        })
        setApplicationState('submitted')
        }   else {
            setSubmitTry(true)
        }
    } 

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
                <Button onClick={handleToggleApplicationBox} variant="outlined" color="secondary">Aplikuj</Button>
            </div>
            { applicationOpen ? <div className="application__wrapper">
                    <div className="closewindow--btn" onClick={handleToggleApplicationBox}>
                       <CloseIcon /> Zamknij
                    </div>
                    {applicationState === 'submitted' ? <ApplicationSubmited /> : <> 
                    <form className="application__form" onSubmit={handleSubmitJobApplication}>
                        <p className='offer--item--header'>Aplikacja na {item.title}</p>
                        <TextField onChange={handleSetName} value={name} id="outlined-basic" label="Imię" variant='outlined' />
                        {!nameAccepted && submitTry ? <span>To pole musi zawierać od 3 do 40 znaków</span> : <span></span>}
                        <TextField onChange={handleSetEmail} value={email} id="outlined-basic" label="E-mail" variant='outlined' />
                        {!emailAccepted && submitTry ? <span>To polu musi mieć formę E-mail</span> : <span></span>}
                        
                        <TextField onChange={handleSetFile} value={file} id="outlined-basic" label="Link do portfolio/CV" variant='outlined' />
                        {!fileAccepted && submitTry ? <span style={{marginTop: '.3em'}}>Nie podano linku</span> : <span></span> }
                        <label>
                            <Checkbox checked={agreement} onChange={handleToggleAgreement} color="primary" required/>
                            <p>
                            Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).
                            </p>
                        </label>
                        <Button type='submit' variant="outlined" color="secondary" >Aplikuj</Button>  
                    </form></>}
            </div> : null }
        </div>
     );
}
 
export default DisplayItem;