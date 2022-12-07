import './pages/Home.css'
//import Background from './images/Welcome-BG.jpg'

export default function Welcome(props) {
  return (
    <div className="welcome-body">
      <div id="hi"><h1>Hi, I'm Grace!</h1></div>
      <div id="about"><p>I'm a software engineer with an interest in UI/UX design and visual computing. I'm interested in presenting information to users in fun, playful, and intuitive ways! I believe design should be efficient, but also spark joy for those who engage with it.</p></div>
    </div>
  );
}
