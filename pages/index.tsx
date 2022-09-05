import {Button, Paragraph, Tag} from "../components";
import {Htag} from "../components/Htag/Htag";

export default function Home() {
  return (
    <div>
        <Htag tag='h1'>ts</Htag>
        <Button appearance={'primary'}  arrow={'right'}>Кнопка</Button>
        <Paragraph>asd</Paragraph>
        <Tag size={'s'}>Small</Tag>
        <Tag size={'m'} color={'red'}>Medium</Tag>
        <Tag size={'m'} color={'green'}>Medium</Tag>
        <Tag size={'s'} color={'primary'}>Medium</Tag>
    </div>
  )
}
