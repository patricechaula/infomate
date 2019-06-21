import React, {Component} from 'react';
import './message.css'

class IMessage extends Component {
    render() {
        return (
            <div className="i-message-container">

                <div className="clearfix"></div>
                <div className="i-message">

                    <div className="i-i-notify">
                        <div className="i-message-image-box">
                            <img src="./chaula-man.png" className="i-message-image"/>
                            <span className="i-notify-info">

                        <span className="i-message-name">
                            Patrice Chaula
                        </span>
                        <span className="i-message-date">
                            {new Date().toDateString()}
                        </span>
                    </span>
                        </div>

                    </div>
                </div>

                <div className="i-message-body">
                    <p>
                        This is a text message for you. Read it and below you can reply. I
                        have written this message for you make sure you read it. Because if you don't
                        you will be in trouble my friend.
                    </p>
                    <div className="i-message-reply-container">
                        <div className="i-message-reply-input">
                            <form>

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path
                                        fill="grey"
                                        d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"/>
                                </svg>
                                <input type="text" name="comment"/>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default IMessage;