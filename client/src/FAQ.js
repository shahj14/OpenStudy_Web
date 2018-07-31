import React, {Component} from 'react';
import './FAQ.css'

class FAQ extends Component{

    render(){

        return(
            <div className="faq-container">
                <div className="content">
                    <p>Q: Do I need an account to use this app?</p>
                    <p className="ans">A: Yes, the main purpose of this app is for students at the University of Cincinnati to find open study rooms in the library with ease. Creating an account will help ensure that all UC students can spend their time better in the library.</p>

                    <p>Q: Can I reserve more than one room at a time?</p>
                    <p className="ans">A: Yes, although you are not actually reserving a room, but opening/closing a room depending on if it is being used. Because our app is crowd-sourced, we rely on every user to keep it as up-to-date as possible.</p>

                    <p>Q: Is this an official UC affiliated app?</p>
                    <p className="ans">A: No, this is not currently a UC affiliated app. We hope that the University will see the need and potential for this app so we can proudly answer 'Yes!' in the future.</p>

                    <p>Q: Is there a limit to how long a room can stay closed for?</p>
                    <p className="ans">A: There is no limit to how long a room can be closed for. Students can spend anywhere between a few minutes to whole days in the library so the room can stay closed for however long you need it to.</p>

                    <p>Q: How do I open/close a room?</p>
                    <p className="ans">A: After you sign in, you'll be directed to the main library tab which shows each floor in the library and the rooms that are open/closed on the selected floor. To change the status of a room, simply click on the room and select confirm.</p>

                    <p>Q: What happens if I close an open room but someone else is already using it?</p>
                    <p className="ans">A: We encourage people to constantly keep rooms up-to-date so changing a room to closed if someone is in an "open" room (or the opposite) demonstrates how crowd-sourcing works. If ever you encounter a room that is marked as open that is occupied, please change the status of the room and check for another available room.</p>

                    <p>Q: How can I see which rooms are open/closed?</p>
                    <p className="ans">A: The Library tab will allow you to select which floor of the library you would like to view the rooms for. Open rooms will display green and closed rooms will display red.</p>

                    <p>Q: Are all the study rooms in the library listed here?</p>
                    <p className="ans">A: All the current study rooms in Langsam are listed by floor. Other tables/rooms that are not specifically study rooms will not show up.</p>
                </div>
            </div>
        )
    }
}

export default FAQ;