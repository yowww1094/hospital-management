import classNames from 'classnames';
import React from 'react'
import { Link } from 'react-router-dom'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';


import { BsFilePerson } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";


const CARD_ITEMS = [
  {
    title: 'Patients Today',
    data: 52,
    icon: <BsFilePerson />,
    color: 'red',
  },
  {
    title: 'Patients Today',
    data: 52,
    icon: <BsFilePerson />,
    color: 'green',
  },
  {
    title: 'Patients Today',
    data: 52,
    icon: <BsFilePerson />,
    color: 'blue',
  },
  {
    title: 'Patients Today',
    data: 52,
    icon: <BsFilePerson />,
    color: 'orange',
  },
];

const PIE_CHART_DATA = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const PIE_CHART_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


function Home() {
  function handleEventClick(arg) {
    alert(`You clicked the event '${arg.event.title}'`)
    
    
  }

  const calendarEvents = [
    { title: 'event 1', date: '2024-12-17' },
    { title: 'event 2', date: '2024-12-25' }
  ];

  return (
    <div className='flex flex-col gap-3 mx-5 my-5'>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 w-full items-center justify-center'>
        {
          CARD_ITEMS.map(item => (
            <Card key={item} item={item} />
          ))
        }
      </div>
      {/* <div className='flex flex-row '>
        <div className='w-[60%]'>
          <FullCalendar
            height={600}
            plugins={[ dayGridPlugin, interactionPlugin ]}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            events={calendarEvents}
            eventClick={handleEventClick}
          />
        </div>
        <div className='w-[40%] h-[600px] flex justify-center items-center'>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={500} height={500}>
              <Pie
                data={PIE_CHART_DATA}
                cx="50%"
                cy="50%"
                labelLine={false}
                //label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((index) => (
                  <Cell key={`cell-${index}`} fill={PIE_CHART_COLORS[index % PIE_CHART_COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-100 shadow-md shadow-black/10 p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="font-medium">Todays Patients</div>
            <Link className="font-light text-[11px] text-blue-500 hover:text-blue-700 hover:underline" to='/patients'>View More</Link>
          </div>
          <div className="overflow-x-auto">
            <table className='w-full min-w-[540px]'>
              <thead>
                <tr>
                  <th className='text-[12px] uppercase tracking-wide text-gray-400 px-4 py-2 text-left bg-gray-50 rounded-tl-md rounded-bl-md'>Date</th>
                  <th className='text-[12px] uppercase tracking-wide text-gray-400 px-4 py-2 text-left bg-gray-50'>Patient</th>
                  <th className='text-[12px] uppercase tracking-wide text-gray-400 px-4 py-2 text-left bg-gray-50'>Appiontement Type</th>
                  <th className='text-[12px] uppercase tracking-wide text-gray-400 px-4 py-2 text-left bg-gray-50 rounded-tr-md rounded-br-md'>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='py-2 px-4'><span className='text-[13px] font-medium text-gray-400'>25/12/2024 10:00</span></td>
                  <td className='py-2 px-4'><span className='text-[13px] font-medium text-gray-400'>Younes</span></td>
                  <td className='py-2 px-4'><span className='text-[13px] font-medium text-gray-400'>Nettoyage</span></td>
                  <td className='py-2 px-4 flex items-center'>
                    <button className='items-center justify-center inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-semibold text-[16px]'><FaRegEye /></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

function Card({item}) {
  let cardColor;
  if (item.color === 'blue') {
    cardColor = 'bg-blue-400'
  } else if (item.color === 'red') {
    cardColor = 'bg-red-400'
  } else if (item.color === 'green') {
    cardColor = 'bg-green-400'
  } else if (item.color === 'orange') {
    cardColor = 'bg-orange-400'
  }

  return (
    <div className={classNames('flex-1 flex flex-row gap-3 bg-white border border-gray-200 text-white rounded-m p-4 items-center justify-start')}>
      <div className={classNames('rounded-full h-12 w-12 flex items-center justify-center', cardColor)}>
        <span className='text-2xl text-white'>{item.icon}</span>
      </div>
      <div>
        <span className='text-m text-gray-500 font-light'>{item.title}</span>
        <div className='flex items-center'>
          <strong className='text-l text-gray-700 font-semibold'>{item.data}</strong>
        </div>
      </div>
    </div>
  )
}

export default Home