import { useEffect, useState, useContext } from 'react'
import { AppContext } from '../../Context/AppContext';
import Bounce from 'react-reveal/Bounce';

import StepWidget from './Idea/StepWidget.jsx';
import TextField from '@material-ui/core/TextField';
import thanksVector from '../../Data/thanks.png'

import '../../Styles/PagesStyles/Idea.css'

const Idea = () => {
    const { fetchLink } = useContext(AppContext)

    const [step, setStep] = useState(0);

    useEffect(()=> {
        if(step > 3) {
            setStep(3)
        }
    }, [step])

    const [ideaBoxError, setIdeaBoxError] = useState(false)
    const [PDBoxError, setPDBoxError] = useState(false)

    const [title, setTitle] = useState('')
    const [titleAccept, setTitleAccept] = useState(false)

    const [idea, setIdea] = useState('')
    const [ideaAccepted, setIdeaAccepted] = useState(false)

    const [name, setName] = useState('')
    const [nameAccepted, setNameAccepted] = useState(false)
    
    const [email, setEmail] = useState('')
    const [emailAccepted, setEmailAccepted] = useState(false)

    const [reason, setReason] = useState('')
    const [reasonAccepted, setReasonAccepted] = useState(false)
    
    const handleToggleIdeaBoxError = () => {
        setIdeaBoxError(true)
    }
    const handlePDBoxError = () => {
        setPDBoxError(true)
    }

    const handleSetTitle = (e) => {
        const value = e.target.value;
        setTitle(value)
        const reg =  /^([a-zA-Z ]){10,100}$/
        if(reg.test(value)) {
            setTitleAccept(true)
        }   else {
            setTitleAccept(false)
        }
    }
    const handleSetInputIdea = (e) => {
        const value = e.target.value;
        setIdea(value)
        const reg =  /^([a-zA-Z ]){50,2000}$/
        if(reg.test(value)) {
            setIdeaAccepted(true)
        }   else {
            setIdeaAccepted(false)
        }
    }
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
    const handleSetReason = (e) => {
        const value = e.target.value
        setReason(value)
        const reg = /^([a-zA-Z ]){10,100}$/
        if(reg.test(value)) {
            setReasonAccepted(true)
        }   else {
            setReasonAccepted(false)
        }
    }

    const handleSetIdea = () => {
       const ideaObject = {
           title, idea, name, email, reason
       }
       fetch(fetchLink+'useridea', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           }, 
           body: JSON.stringify(ideaObject)
       })
    }
    return ( 
        <div className="idea__wrapper">
            <div className="stepwidget--header">
               <h1>Podziel si?? swoim pomys??em na rozw??j tej strony</h1>
            </div>
            <div className="idea__form">
                <form>
                    {step === 0 ? <> 
                        <TextField value={title} onChange={handleSetTitle} id="outlined-basic" label="Tytu??" variant="outlined" />
                        { !titleAccept && ideaBoxError ? <span>To pole musi zawiera?? od 10 do 100 znak??w</span> : <span></span> }
                        <TextField value={idea} onChange={handleSetInputIdea} id="outlined-multiline-static" variant='outlined' label="Tw??j pomys??"  multiline rows={4}/>
                        { !ideaAccepted && ideaBoxError ? <span>To pole musi zawiera?? od 50 do 2000 znak??w</span> : <span></span>}
                    </> : null}

                    {step === 1 ? <> 
                        <h2>Powiedz nam co?? o sobie</h2>
                        <TextField value={name} onChange={handleSetName} id="outlined-basic" label="Imi??" variant="outlined" />
                        { !nameAccepted && PDBoxError ? <span>To pole musi zawiera?? od 3 do 40 znak??w</span> : <span></span>}
                        <TextField value={email} onChange={handleSetEmail} id="outlined-basic" label="E-mail" variant="outlined" />
                        { !emailAccepted && PDBoxError ? <span>To pole musi zawiera?? form?? E-mail</span> : <span></span>}
                        <TextField value={reason} onChange={handleSetReason} id="outlined-basic" label="Dlaczego warto wprowadzi?? zmian???" variant="outlined" />
                        { !reasonAccepted && PDBoxError ? <span>To pole musi zawiera?? od 10 do 100 znak??w</span> : <span></span>}
                    </> : null}

                    {step === 2 ? <ConfirmIdea /> : null}

                    {step === 3 ? <ThanksForIdea /> : null}
                </form>
            </div>
            <StepWidget setPDBoxError={handlePDBoxError} reasonAccepted={reasonAccepted} emailAccepted={emailAccepted} nameAccepted={nameAccepted} toggleIdeaError={handleToggleIdeaBoxError} titleAccepted={titleAccept} ideaAccepted={ideaAccepted} step={step} setStep={setStep} submit={handleSetIdea}/>
        </div>
     );
}
 
export default Idea;

const ConfirmIdea = () => {
    return ( 
        <Bounce>
            <h2>Czy chcesz jeszcze co?? zmieni???</h2>
            <p>Je??eli wszsytkie dane wprowdzi??e?? poprawnie to wy??lij nam swoj?? sugrstie, je??eli chcesz jeszcze co?? zmieni?? cofnij si?? do wybranych p??l.</p>
        </Bounce>
     );
}
 
const ThanksForIdea = () => {
    return ( 
        <Bounce>
            <h2>Dzi??kujemy ??e dbasz o nasz rozw??j</h2>
            <img src={thanksVector} alt="" />
        </Bounce>
     );
}