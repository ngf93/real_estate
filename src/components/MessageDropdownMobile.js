import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard/lib/Component';
import {HandySvg} from 'handy-svg';
import copy from '../img/icons/copy.svg';
import edit from '../img/icons/edit.svg';
import trash from '../img/icons/trash.svg';
import choose from '../img/icons/choose.svg';

const MessageDropdownMobile = (props) => {
    const {
        activeMessage,
        resetActiveMessage,
        onChooseMessage,
        onUpdateMessage,
        onDeleteMessage
    } = props

    return (
        <ul className="mobile-item__dropdown">
            <CopyToClipboard text={activeMessage?.text}>
                <li
                    onClick={() => resetActiveMessage()}
                >
                    <HandySvg
                        src={copy}
                        width="24"
                        height="24"
                        className="copy-icon"
                    />
                    <span>копировать текст</span>
                </li>
            </CopyToClipboard>
            <li
                onClick={() => {
                    onUpdateMessage(activeMessage.id, activeMessage.text)
                    // setEditableMessageId(id)
                    // setMessageInput(children)

                    // onEditMessage()
                    resetActiveMessage()
                }}
            >
                <HandySvg
                    src={edit}
                    width="24"
                    height="24"
                    className="edit-icon"
                />
                <span>изменить</span>
            </li>
            <li
                onClick={() => {
                    onDeleteMessage(activeMessage.id)
                    resetActiveMessage()
                }}
            >
                <HandySvg
                    src={trash}
                    width="24"
                    height="24"
                    className="trash-icon"
                />
                <span>удалить</span>
            </li>
            <li
                onClick={() => {
                    onChooseMessage()
                    resetActiveMessage()
                }}
            >
                <HandySvg
                    src={choose}
                    width="24"
                    height="24"
                    className="choose-icon"
                />
                <span>выбрать</span>
            </li>
        </ul>
    )
}

export default MessageDropdownMobile;