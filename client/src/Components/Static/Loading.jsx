import CircularProgress from '@material-ui/core/CircularProgress';

import '../../Styles/Static/Loading.css';

const Loading = () => {
    return ( 
        <div className="loading__wrapper">
            <CircularProgress style={{width: '100px', height: '100px'}}/>
        </div>
     );
}
 
export default Loading;