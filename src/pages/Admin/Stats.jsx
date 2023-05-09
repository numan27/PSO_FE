import React from 'react'
import { Container } from "react-bootstrap";
import { AiOutlineRight } from "react-icons/ai"
import AppLayout from '../../components/Layout/AppLayout'
import STATS_LIST from './StatsList';


const Stats = () => {
    return (
        <AppLayout>
            <Container fluid className="px-sm-5 px-3">
                <div className='d-flex justify-content-end mt-sm-5 mt-2 mb-3 mx-sm-0 mx-4 mobileText_align'>
                    <a className='' href="">Welcome Deputy Commissioner, Bahawalpur<AiOutlineRight /></a>
                </div>
                
                <div className='statsWrapper mb-5'>
                {STATS_LIST.map((item) => (
                    <div className="d-flex">
                        <img src={item.img} height={120} alt='stats' />
                        <div className='d-flex flex-column justify-content-center px-4 text-white w-100' style={{ backgroundColor: item.color }}>
                            <h6 className='fw-semibold fs-6 mb-1'>{item.title}</h6>
                            <h3 className='fw-bold fs-1 mb-0'>{item.count}</h3>
                        </div>
                    </div>
                ))}
                </div>

            </Container>

        </AppLayout>
    )
}

export default Stats