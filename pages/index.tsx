import {useEffect, useState} from "react";
import {Button, Paragraph, Tag} from "../components";
import {Htag} from "../components/Htag/Htag";


export default function Home() {

    const [counter, setCounter] = useState(0);


    useEffect(() => {
            console.log('Counter' + counter)
        return function cleanUp() {
            console.log('Unmount')
        }
    }, )

    useEffect(() => {
        console.log('Mounted')
    }, [])

  return (
    <div>
        <Htag tag='h1'>{counter}</Htag>
        <Button appearance={'primary'} arrow={'right'} onClick={() => setCounter((counter) => counter +1)}>Кнопка</Button>
        <Paragraph>asd</Paragraph>
        <Tag size={'s'}>Small</Tag>
        <Tag size={'m'} color={'red'}>Medium</Tag>
        <Tag size={'m'} color={'green'}>Medium</Tag>
        <Tag size={'s'} color={'primary'}>Medium</Tag>
    </div>
  )
}
