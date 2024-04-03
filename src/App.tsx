import Greet from './components/1.typing-props';
import Greets from './components/2.basic-props';
import { Person } from './components/2.basic-props/Person';
import { PersonList } from './components/2.basic-props/PersonList';
import { personName, nameList } from './components/2.basic-props/data';
import { Status } from './components/3.advanced-props';
import { Heading, Oscar } from './components/3.advanced-props/Heading';
import { Button, Input } from './components/4.event-props';
import { Container } from './components/5.styles-props';
import { LoggedIn } from './components/6.useState';
import { Counter } from './components/7.useReducer';
import Apps from './components/8.useContext';
import Context from './components/9.useContext-future-value';
import { DomRef } from './components/10.useRef/Domref';
import { MutableRef } from './components/10.useRef/MutableRef';

export default function App() {
  return (
    <div className="app">
      {/* Typing props */}
      <Greet name="Dhimas" />

      {/* Basic props */}
      <Greets name="Dhimas" messagesCount={10} isLoggedIn />

      {/* Object props */}
      <Person name={personName} />

      {/* Array Object props */}
      <PersonList names={nameList} />

      {/* Advance props */}
      <div>
        {/* Union types only 'loading' | 'success' | 'error' */}
        <Status status="success" />
        {/* Children */}
        <Heading>Placeholder text</Heading>

        {/* Children Node */}
        <Oscar>
          <Heading>Oscar goes to Leonardo Dicaptio</Heading>
        </Oscar>
      </div>

      {/* Event Props */}
      <Button
        handleClick={(e, id) => {
          window.alert('button clicked!');
          console.log(e, id);
        }}
      />

      <Input value="" />

      {/* Styles Props */}
      <Container styles={{ border: '1px solid black', padding: '2rem' }} />

      {/* useState , future value*/}
      <LoggedIn />

      {/* useReducer */}
      <Counter />

      {/* Use Context */}
      <Apps />

      {/* Use Context Future Value*/}
      <Context />

      {/* useRef */}
      {/* useRef DOM */}
      <DomRef />
      {/* useRef Mutable */}
      <MutableRef />

    </div>
  );
}
