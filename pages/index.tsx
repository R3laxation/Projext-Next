import {useState} from "react";
import {Paragraph, Rating, Tag} from "../components";
import {withLayout} from "../layout/Layout";
import {GetStaticProps} from "next";
import axios from "axios";
import {MenuItem} from "../intergaces/menu.interface";


function Home({menu, firstCategory}:HomeProps) {

    const [rating, setRating] = useState(4);


    return (
        <>
            <Paragraph>asd</Paragraph>
            <Tag size={'s'}>Small</Tag>
            <Tag size={'m'} color={'red'}>Medium</Tag>
            <Tag size={'m'} color={'green'}>Medium</Tag>
            <Tag size={'s'} color={'primary'}>Medium</Tag>
            <Rating rating={rating} isEditable={true} setRating={setRating}/>
        </>
    )
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {

    const firstCategory = 0;
    const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find');

    return {
        props: {
            menu,
            firstCategory,
        }
    }
}

interface HomeProps {
    menu: MenuItem[];
    firstCategory: number;
}