import React from 'react';
class chat extends React.Component { 
    render() {
        return (
            <div className="chat">
                <script
                    src="https://cdn.cai.tools.sap/webchat/webchat.js"
                    channelId="3d0ed900-b654-4c0e-97e9-3e59df076250"
                    token="0b1d8f11f4e1a86752ae3e49802c204c"
                    id="cai-webchat">
                </script>
            </div>
        )
    }
}
export default chat;
