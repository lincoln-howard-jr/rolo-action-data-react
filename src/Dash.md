```js

const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.".split (' ');
const generateText = () => {
  let words = [];
  for (var i = 0; i < 30; i++) words.push (text [Math.floor (Math.random () * text.length)]);
  return words.join (' ');
}
const randomDate = () => {
  return new Date (2019 - Math.floor (Math.random () * 15), Math.floor (Math.random () * 12), Math.floor(Math.random () * 31));
}
const datacenterNames = [
  'dal05',
  'hou01',
  'slc01',
  'slc02',
  'nova01'
]

const hostnames = ['bart01', 'alex01', 'jack01', 'rick01', 'john01', 'cole01'];
const genHostname = () => hostnames [Math.floor (Math.random () * 6)]

const genIp = () => [Math.floor (Math.random () * 256), Math.floor (Math.random () * 256), Math.floor (Math.random () * 256), Math.floor (Math.random () * 256)].join ('.');
let index = 1;
const genId = () => ++index;

const generateAction = () => {
  return {
    action: generateText (),
    datacenter: datacenterNames [Math.floor (Math.random () * 5)],
    timestamp: randomDate (),
    primary_ip: genIp (),
    hostname: genHostname (),
    id: genId (),
    backend_ip: genIp ()
  }
}

let _actions = new Array (100).fill (generateAction).map (fn => fn ());

<Dash actions={_actions} />
```