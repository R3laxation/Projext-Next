import {useState} from "react";
import {Paragraph, Rating, Tag} from "../components";


export default function Home() {

    const [rating, setRating] = useState(4);


    return (
        <div>
            <Paragraph>asd</Paragraph>
            <Tag size={'s'}>Small</Tag>
            <Tag size={'m'} color={'red'}>Medium</Tag>
            <Tag size={'m'} color={'green'}>Medium</Tag>
            <Tag size={'s'} color={'primary'}>Medium</Tag>
            <Rating rating={rating} isEditable={true} setRating={setRating}/>
        </div>
    )
}
