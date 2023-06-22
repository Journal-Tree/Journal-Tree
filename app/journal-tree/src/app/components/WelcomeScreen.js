import Banner from "./Banner";
import SubHeading from "./SubHeading";
import MoodButton from "./MoodButton";

export default function WelcomeScreen() {
    return (<Fragment>
        <Banner text={"Welcome, Sam"}/>
        <SubHeading text={"What's on your mind today?"}/>
        <MoodButton text={"#Balanced"}/>
        <MoodButton text={"#Moody"}/>
        <MoodButton text={"#Inspired"}/>
        <MoodButton text={"#CreateYourOwn"}/>
    </Fragment>)
}

