import {useState} from "react";
import {Paragraph, Rating, Tag} from "../components";
import {withLayout} from "../layout/Layout";
import {GetStaticProps} from "next";
import axios from "axios";
import {MenuItem} from "../intergaces/menu.interface";

function Home({menu}: HomeProps) {

    const [rating, setRating] = useState(4);

    return (
        <>
            <Paragraph>asd</Paragraph>
            <Tag size={'s'}>Small</Tag>
            <Tag size={'m'} color={'red'}>Medium</Tag>
            <Tag size={'m'} color={'green'}>Medium</Tag>
            <Tag size={'s'} color={'primary'}>Medium</Tag>
            <Rating rating={rating} isEditable={true} setRating={setRating}/>
            <ul>
                {menu.map((m) => <li key={m._id.secondCategory}>{m._id.secondCategory}</li>)}
            </ul>
        </>
    )
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {

    const firstCategory = 0;
    const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });

    return {
        props: {
            menu,
            firstCategory,
        }
    }
}

interface HomeProps extends Record<string, unknown>{
    menu: MenuItem[];
    firstCategory: number;
}