import './styles.css'
import { Alert, Space, Spin } from 'antd';


function Loader({ text }) {
    return (
        <div className='loader-container'>
            <Spin size="large">
                <div className="content" />
            </Spin>
            <p>{text}</p>
        </div>
    )
}

export default Loader;