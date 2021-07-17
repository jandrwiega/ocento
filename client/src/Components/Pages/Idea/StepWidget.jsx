
import DoneIcon from '@material-ui/icons/Done';
import Button from '@material-ui/core/Button';

import '../../../Styles/PagesStyles/StepWidget.css';

const StepWidget = (props) => {
    const isSubmitRequired = () => {
        if(props.step === 0) {
            if(props.titleAccepted && props.ideaAccepted) {
                props.setStep(1)
            }   else {
                props.toggleIdeaError()
                props.setStep(0)
            }
        }   else if(props.step === 1) {

            if(props.nameAccepted && props.emailAccepted && props.reasonAccepted) {
                props.setStep(2)
            }   else {
                props.setStep(1)
                props.setPDBoxError()
            }

        } else if(props.step === 2) {
            props.submit()
            props.setStep(3)
        }
    }
    return ( 
        <div className="stepwidget">
            <div className="stepwidget--progress">
                    <div className="stepwidget--progress--icon" id={props.step >= 1 ? 'stepdone' : null}>
                        {props.step >= 1 ? <DoneIcon /> : '1' }
                    </div>

                    <div className="stepwidget--progress--middle" id={props.step >= 2 ? 'middledone' : null}></div>

                    <div className="stepwidget--progress--icon" id={props.step >= 2 ? 'stepdone' : null}>
                    {props.step >= 2 ? <DoneIcon /> : '2' }
                    </div>

                    <div className="stepwidget--progress--middle" id={props.step >= 3 ? 'middledone' : null}></div>

                    <div className="stepwidget--progress--icon" id={props.step >= 3 ? 'stepdone' : null}>
                        {props.step >= 3 ? <DoneIcon /> : '3' }
                    </div>
            </div>
            <div className="stepwidget--labels">
                <ul>
                    <li>Opisz nam swój pomysł</li>
                    <li>Zostaw nam swoje dane, a my odpowiemy co myślimy o twoim pomyśle</li>
                    <li>To wszystko, dziękujemy że dbasz o rozwój tego serwisu</li>
                </ul>
                    <Button variant="contained" disabled={props.step < 1 ? true : props.step === 3 ? true : false} onClick={() => props.setStep(props.step - 1)}>Cofnij</Button>
                    <Button variant="contained" color="primary" disabled={props.step === 3 ? true : false} onClick={isSubmitRequired}>{props.step >=2 ? 'Wyślij' : 'Dalej'}</Button>
            </div>
        </div>
     );
}
 
export default StepWidget;