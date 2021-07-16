import { useEffect, useState, useContext } from 'react'
import { AppContext } from '../../Context/AppContext';

import StepWidget from './Idea/StepWidget.jsx';
import TextField from '@material-ui/core/TextField';

import '../../Styles/PagesStyles/Idea.css'

const Idea = () => {
    const { fetchLink } = useContext(AppContext)

    const [step, setStep] = useState(0);
    useEffect(()=> {
        if(step > 3) {
            setStep(3)
            
        }
    }, [step])

    const [title, setTitle] = useState('')
    const [idea, setIdea] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [reason, setReason] = useState('')
    
    const handleSetTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleSetInputIdea = (e) => {
        setIdea(e.target.value)
    }
    const handleSetName = (e) => {
        setName(e.target.value)
    }
    const handleSetEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleSetReason = (e) => {
        setReason(e.target.value)
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
            <div className="idea__form">
                <form>
                    {step === 0 ? <> 
                        <h2>Twój pomysł</h2>
                        <TextField value={title} onChange={handleSetTitle} id="outlined-basic" label="Tytuł" variant="outlined" />
                        <TextField value={idea} onChange={handleSetInputIdea} id="outlined-multiline-static" variant='outlined' label="Twój pomysł"  multiline rows={4}/>
                    </> : null}

                    {step === 1 ? <> 
                        <h2>Powiedz nam coś o sobie</h2>
                        <TextField value={name} onChange={handleSetName} id="outlined-basic" label="Imię" variant="outlined" />
                        <TextField value={email} onChange={handleSetEmail} id="outlined-basic" label="E-mail" variant="outlined" />
                        <TextField value={reason} onChange={handleSetReason} id="outlined-basic" label="Dlaczego warto wprowadzić zmianę?" variant="outlined" />
                    </> : null}

                    {step === 2 ? <ConfirmIdea /> : null}

                    {step === 3 ? <ThanksForIdea /> : null}
                </form>
            </div>
            <StepWidget step={step} setStep={setStep} submit={handleSetIdea}/>
        </div>
     );
}
 
export default Idea;

const ConfirmIdea = () => {
    return ( 
        <>
            czy to juz wszystko ?
        </>
     );
}
 
const ThanksForIdea = () => {
    return ( 
        <>
            dzieki dziala
        </>
     );
}