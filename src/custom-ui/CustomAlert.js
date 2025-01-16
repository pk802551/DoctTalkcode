import React from 'react'
import { useAlert } from 'react-alert'
import { alertMessages, alertTypes } from '../utility-files/helper-function/HelperFunction';

function CustomAlert(props) {
    const { data } = props;
    const alert = useAlert();

    const copyText = (text) => {
        navigator.clipboard.writeText(text).then(function () {
            alert.show(alertMessages.COPY_SUCCESSFUL, { type: alertTypes.SUCCESS });
        }, function (err) {
            alert.show(err, { type: alertTypes.ERROR });
        });
    };

    return (
        <div>
            {data?.passphrase}
            {data?.showButton && <button type='button' className="copy-btn" onClick={() => copyText(data?.passphrase)}>copy</button>}
        </div>
    )
}

export default CustomAlert