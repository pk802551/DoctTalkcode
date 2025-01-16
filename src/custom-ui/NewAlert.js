import React from 'react'
import { useAlert } from 'react-alert';
import { useNavigate } from 'react-router-dom';
import { alertMessages, alertTypes, path } from '../utility-files/helper-function/HelperFunction';
import { isStringValue } from '../utility-files/data-util/DataHandling';

function NewAlert({ passprase }) {
    const navigate = useNavigate();
    const alert = useAlert();

    const copyText = () => {
        const cb = navigator.clipboard;
        const paragraph = passprase;
        if (window.isSecureContext && cb) {
            cb.writeText(paragraph).then(() => {
                alert.show(alertMessages.COPY_SUCCESSFUL, { type: alertTypes.SUCCESS });
                navigate(path.LOGIN);
            });
        } else {
            const textArea = document.createElement("textarea");
            textArea.value = paragraph;
            document.body.appendChild(textArea);
            textArea.focus(); textArea.select();
            try {
                document.execCommand('copy')
            } catch (err) {
                console.error('Unable to copy to clipboard', err)
            }
            document.body.removeChild(textArea);
            alert.show(alertMessages.COPY_SUCCESSFUL, { type: alertTypes.SUCCESS });
            navigate(path.LOGIN);
        }
    };

    return (
        <div className={`modal ${passprase ? "show page-over" : "fade"}`} id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{passprase}</h5>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => navigate(path.LOGIN)}>Cancel</button>
                        <button type="button" className="btn btn-primary" onClick={() => copyText()}>Copy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewAlert