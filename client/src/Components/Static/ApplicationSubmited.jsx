import appsend from '../../Data/appsend.png'

import '../../Styles/Static/ApplicationSubmited.css';

const ApplicationSubmited = () => {
    return ( 
        <div className="app__sub--wrapper">
            <img src={appsend} alt="" />
            <h2>Dziękujemy że chcesz nam pomóc</h2>
            <p>Rozpatrzymy twoje zgłoszenie jak najszybciej oraz odpowiemy :). Mamy nadzieję że za niedługo zaczniemy tworzyć wspólnie</p>
        </div>
     );
}
 
export default ApplicationSubmited;