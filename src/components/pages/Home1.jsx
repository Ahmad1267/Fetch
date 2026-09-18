import { useState } from 'react'
import "./Home1.css"
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from 'react-icons/fa6';
import faqs from '../../data/Faqdata';
import Header1 from '../common/Header1';
import Footer1 from '../common/Footer1';
import Product from './Product';

export default function Home1() {
    let [openAns, set] = useState(0)
    return (
        <>
            
            <section className='faqs'>
                <h1>FAQs About {openAns}</h1>
                <div className='div'>
                    {
                        faqs.map((obj, index) => {
                            return (
                                <div className='border' key={index}>
                                    <h3 className='book' onClick={() => set(obj.id == openAns ? 0 : obj.id)}>{obj.question}
                                        <span>
                                            {
                                                obj.id == openAns ? <FaCircleMinus /> : <FaCirclePlus />
                                            }
                                        </span>
                                    </h3>
                                    <p className={obj.id == openAns ? "answer" : "answer-hidden"}>{obj.answer}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}
