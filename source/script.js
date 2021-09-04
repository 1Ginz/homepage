

const Incrementer = styled.button`
   ...
`;
const Decrementer = styled.button`
   ...
`;
...

const [inputValue, setInputValue] = useState(0);

...

<Incrementer onClick={() => setInputValue(inputValue + 1)} />
<Quantity value={inputValue}/>
<Decrementer onClick={() => setInputValue(inputValue - 1)} />