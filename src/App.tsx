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
import CounterClass from './components/11.class-component/Class';
import { Private } from './components/12.component-prop/auth/Private';
import { Profile } from './components/12.component-prop/auth/Profile';
import { List } from './components/13.generic-props';
import { Toast } from './components/14.template-literals/Toast';
import { CustomButton } from './components/15.wrapping-html/html/Button';
import { CustomComponent } from './components/16.extracting-component-proptypes/CustomComponents';
import { Text } from './components/17.Polymorphic-Component/Text';

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

      {/* Class Component */}
      <CounterClass messages="This count : " />

      {/* Component Prop */}

      <Private isLoggedIn={true} component={Profile} />

      {/* Generic Props */}
      {/* <List
        items={['Batman', 'Superman', 'Cyborg']}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      <List
        items={[
          { id: 1, first: 'Bruce', last: 'Wayne' },
          { id: 2, first: 'Clark', last: 'Kent' },
        ]}
        onClick={(item) => console.log(item)}
      />

      {/* Template Literals */}
      <Toast position="center - bottom" />
      <Toast position="center" />

      {/* Wrapping HTML Elements */}
      <CustomButton variant="primary">Primary Button</CustomButton>

      {/* Extracting component types */}
      <CustomComponent messagesCount={10} isLoggedIn name="User" />

      {/* Polymorphic Components */}
      <div>
      <Text as='h1' size='lg'>Heading</Text>
      <Text as='p' size='md'>Paragraph</Text>
      <Text as='label' size='sm' color='secondary'>Label</Text>
      </div>
    </div>
  );
}
